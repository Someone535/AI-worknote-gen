/** notes-gen.js - Basic Note Builder Scripts
 *
 * This file is part of the Auto Ingress Work Note Generator.
 *
 *  Copyright 2020 by Auto Ingress Pty Ltd
 *  Written by Aidan Jessen <aidan.jessen@gmail.com>
 *  Released under the GNU General Public License
 *
 * The Auto Ingress Work Note Generator is free software: you can redistribute 
 * it and/or modify it under the terms of the GNU General Public License as 
 * published by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * The Auto Ingress Work Note Generator is distributed in the hope that it will 
 * be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with the Auto Ingress Work Note Generator.
 * If not, see <https://www.gnu.org/licenses/>.
 */

import MAP_TO_TREE from '../config/ui-to-notes.js'
import FORMAT_TREE from '../config/notes-tree.js'

/* Tool to format a string based on an object containing keys/values, kinda
 * like fprintf.
 */
String.prototype.formatUnicorn = String.prototype.formatUnicorn ||
function () {
    "use strict";
    var str = this.toString();
    if (arguments.length) {
        var t = typeof arguments[0];
        var key;
        var args = ("string" === t || "number" === t) ?
            Array.prototype.slice.call(arguments)
            : arguments[0];

        for (key in args) {
            // Replace all keys with their values
            str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
        }
        // Replace all missing keys with empty strings
        str = str.replace(new RegExp("\\{.*?\\}","gi"),'');
    }

    return str;
};

/* Callback used to stringify error objects.
 */
function replaceErrors(key, value) {
  if (value instanceof Error) {
    var error = {};
    Object.getOwnPropertyNames(value).forEach( function(propName) {
      error[propName] = value[propName];
    });
    return error;
  }
  return value;
};

/* Main function for the module, builds the notes tree based on input from the
 * ui and then collapses it into work notes.
 */
function processUIOutput( ui_output ) {

  // for each notes section, generate a notes tree and collapse it
  var notes_arr = ui_output.map( el => {
    return {
      label: el.label.split('\n').join(', '),
      notes: collapseOutputTree( buildOutputTree( el.leaves ) )
    }
  });

  // join each set of notes together with the labels
  var final_notes = '';
  notes_arr.forEach( el => {
    if ( el.notes != '' ) {
      if ( el.label != 'First Paragraph' && el.label != 'Last Paragraph' ) {
        final_notes += 'Door(s): '+el.label+'\n';
      }
      final_notes += el.notes+'\n';
    }
  });

  return final_notes;

}; // end processUIOutput

/* Using the rules setup in config, adds entries to the notes tree for each
 * leaf provided by the ui. Returns the notes tree for further processing.
 */
function buildOutputTree( leaves ) {

  var out_tree = {};

  leaves.forEach( function(leaf) {

    var entry = MAP_TO_TREE[ leaf.code ];
    if ( entry == undefined ) {
      console.log('ERROR: No entry found for '+leaf.code+'.');
      return out_tree;
    }
    entry.forEach( function(entry) {

      // format each element of the path array using the leaf data
      var fmt_path = [];
      entry.path.forEach( function(el) {
        fmt_path.push( el.formatUnicorn( leaf.data ) );
      });

      // format the output value again using the leaf data
      var fmt_out = entry.value && entry.value.formatUnicorn( leaf.data );

      // build out path to penultimate node
      var curr_pos = out_tree;
      var curr_keys = [];
      verifyCurrentNode( curr_pos, curr_keys );
      for ( var i = 0; i < fmt_path.length-1; i++ ) {
        // Check if the current key exists, if it doesn't then create it
        var key = fmt_path[i];
        if ( curr_pos.nodes[key] == undefined ) curr_pos.nodes[key] = {};
        // Move our position to the new node
        curr_pos = curr_pos.nodes[key];
        curr_keys.push(key);
        // Gather the format and create the sub-nodes for the current node
        verifyCurrentNode( curr_pos, curr_keys );
      }

      // set value of final node depending on it's current type
      var final_key = fmt_path[ fmt_path.length-1 ];
      if ( typeof curr_pos.nodes[final_key] == 'string' ) {
        // Convert string to array and push on the new value
        var curr_value = curr_pos.nodes[final_key];
        curr_pos.nodes[final_key] = [ curr_value, fmt_out ];
      } else if ( Array.isArray( curr_pos.nodes[final_key] ) ) {
        // Push on the new value
        curr_pos.nodes[final_key].push( fmt_out );
      } else {
        // Override anything else (undefined, object, null) to become fmt_out
        curr_pos.nodes[final_key] = fmt_out;
      }

    });

  });

  return out_tree;

}; // end buildOutputTree( leaves )

/* Takes a notes tree created by buildOutputTree and collapses it into a string.
 * Formatting is it goes following the format strings in the config notes tree.
 */
function collapseOutputTree( notes_tree ) {

  if ( notes_tree.nodes == undefined ) return '';

  var work_notes = _collapseNode( notes_tree );

  return work_notes;

}; // end collapseOutputTree( notes_tree )

/* Recursive function used to traverse the notes tree collapsing each node
 * into a simple string.
 */
function _collapseNode( node ) {

  try {

    /* Format strings in the notes tree can have keys of the form:
     * {key:seperator} where key is a string and separator is another string.
     * When a key corresponds to an array, the separator string is used to join
     * that array into one string. If no separator array is present a simple
     * space is used to join the array. If the separator string starts with the
     * letter 'f' the separator string is also printed at the front of the
     * string. If 'f' is used at the start of the separator, it is also placed
     * in front of single string nodes (not just array nodes).
     */

    // Generate a map of separator strings to sub-nodes
    var sep_regexp = new RegExp('{(.*?)(:(.*?))?}','gis');
    var node_format = node.format;
    if ( node.format == undefined ) {
      throw new Error('ERROR: No format found in - '+JSON.stringify(node));
    }
    var result = Array.from( node.format.matchAll( sep_regexp ), function(el) {
      return { key: el[1], sep: el[3] || ' ' } 
    });
    var sep_map = {};
    result.forEach( function(el) { sep_map[el.key] = el.sep; });
    // Remove sep codes from format string
    node.format = node.format.replace( sep_regexp, '{$1}');

    // Process sub-nodes if current node is an object
    // if sep key starts with f, slice f out and also print the separator in
    // front of the first element
    for ( var key in node.nodes ) {
      var first = sep_map[key][0] == 'f';
      var sep = (sep_map[key] && first) ? sep_map[key].slice(1) : sep_map[key];
      if ( Array.isArray( node.nodes[key] ) ) {
        // Join arrays together using the sep string
        var node_str = node.nodes[key].join( sep );
        if ( first ) node.nodes[key] = sep + node_str;
      } else if ( typeof node.nodes[key] != 'string' ) {
        // Recurse for objects child nodes that are nodes themselves
        var node_str = _collapseNode( node.nodes[key] );
        node.nodes[key] = ( sep && first ? sep : '' ) + node_str;
      } else {
        // Handle simple string case
        node.nodes[key] = ( sep && first ? sep : '' ) + node.nodes[key];
      }
    }

    // Format the sub-nodes into a return string
    var out_str = node.format.formatUnicorn( node.nodes );

    return out_str;

  } catch (e) {

    console.log('ERROR collapsing node: '+JSON.stringify(node));
    console.log('ERROR was: '+JSON.stringify(e,replaceErrors));
    return '';

  }

}; // end _collapseNode( node )

/* Given a tree object and an array of keys, traverses the object following the
 * keys and then returns the final node that it arrives at.
 */
function getNode( obj, path_arr ) {
  var curr_pos = obj;
  path_arr.forEach( function(key) {
    curr_pos = curr_pos.nodes[key];
  });
  return curr_pos;
}; // end getNode( path_arr )

/* Given a node in the generated notes tree, checks if it has it's format set.
 * If no format set, gathers it from config and creates the sub-nodes object.
 */
function verifyCurrentNode( node, path_arr ) {
  if ( node.format == undefined ) {
    // gather the format and prepare the sub nodes
    var fmt_node = getNode( FORMAT_TREE, path_arr );
    node.format = fmt_node.format;
    node.nodes = {};
  }
}; // end verifyCurrentNode( node, path_arr )

var exp;
export default exp = {
  processUIOutput: processUIOutput
}
