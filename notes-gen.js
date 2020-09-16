// Basic Note Builder Scripts
//

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
        str = str.replace(new RegExp("\\{.*\\}","gi"),'');
    }

    return str;
};

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

function buildOutputTree( ui_output ) {

  var out_tree = {};

  ui_output.forEach( function(leaf) {

    MAP_TO_TREE[ leaf.code ].forEach( function(entry) {

      // format each element of the path array
      var fmt_path = [];
      entry.path.forEach( function(el) {
        fmt_path.push( el.formatUnicorn( leaf.data ) );
      });

      // format the output value
      var fmt_out = entry.value && entry.value.formatUnicorn( leaf.data );

      // build out path to penultimate node
      var curr_pos = out_tree;
      var curr_keys = [];
      verifyCurrentNode( curr_pos, curr_keys );
      for ( var i = 0; i < fmt_path.length-1; i++ ) {
        // Check if the current key exists, if it doesn't then create it
        var key = fmt_path[i];
        console.log('key: '+key);
        if ( curr_pos.nodes[key] == undefined ) curr_pos.nodes[key] = {};
        // Move our position to the new node
        curr_pos = curr_pos.nodes[key];
        curr_keys.push(key);
        // Gather the format and create the sub-nodes for the current node
        verifyCurrentNode( curr_pos, curr_keys );
        console.log('verifiedNode: '+JSON.stringify(curr_pos));
      }
      console.log('penultimate node: '+JSON.stringify(curr_pos));

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

  console.log( JSON.stringify( out_tree, null, '\t' ) );

  return out_tree;

}; // end buildOutputTree( ui_output )

function collapseOutputTree( notes_tree ) {

  var work_notes = _collapseNode( notes_tree );
  console.log('WORK NOTES: '+work_notes);

  return work_notes;

}; // end collapseOutputTree( notes_tree )

function _collapseNode( node ) {

  try {

    // Join array nodes into one string
    var sep = ' ';
    if ( Array.isArray(node) ) return node.join(sep);

    // Process sub-nodes if current node is an object
    for ( var key in node.nodes ) {
      console.log('checking node: '+key);
      if ( typeof node.nodes[key] != 'string' ) {
        console.log('node is not a string');
        var node_str = _collapseNode( node.nodes[key] );
        node.nodes[key] = node_str;
        console.log('node is now a string: '+node_str);
      }
    }

    // Format the sub-nodes into a return string
    console.log('formating node');
    var out_str = node.format.formatUnicorn( node.nodes );
    console.log('formatted node: '+out_str);

    return out_str;

  } catch (e) {

    console.log('ERROR collapsing node: '+JSON.stringify(node));
    console.log('ERROR was: '+JSON.stringify(e,replaceErrors));
    return '';

  }

}; // end _collapseNode( node )

function getNode( obj, path_arr ) {
  var curr_pos = obj;
  path_arr.forEach( function(key) {
    curr_pos = curr_pos.nodes[key];
    console.log('locating... '+JSON.stringify(curr_pos));
  });
  console.log('located: '+JSON.stringify(curr_pos));
  return curr_pos;
}; // end getNode( path_arr )

function verifyCurrentNode( node, path_arr ) {
  console.log('checking node: '+JSON.stringify(node));
  console.log('path arr for check: '+JSON.stringify(path_arr));
  if ( node.format == undefined ) {
    // gather the format and prepare the sub nodes
    var fmt_node = getNode( FORMAT_TREE, path_arr );
    node.format = fmt_node.format;
    node.nodes = {};
  }
}; // end verifyCurrentNode( node, path_arr )
