/** test-config.js - Small test to verify that config files are valid
 *
 * This file is part of the Auto Ingress Work Note Generator.
 *
 *  Copyright 2020 by Auto Ingress Pty Ltd.
 *  Written by Aidan Jessen <aidan.jessen@gmail.com>.
 *  Released under the GNU General Public License.
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
var UI_MAP = require('../config/ui-tree.js');
var RULES = require('../config/ui-to-notes.js');
var NOTES_MAP = require('../config/notes-tree.js');

var failed = false;

function traverseNodes(node,callback,path) {
  console.log('testing node: '+path.join(':'));
  var results = [];
  var res = callback(node,path);
  if ( res ) results.push(res);
  if ( node.nodes ) {
    for ( var key in node.nodes ) {
      results.push( ...traverseNodes(node.nodes[key],callback,[...path,key]) );
    }
  }
  return results;
}; // end traverseNodes

//// Check all UI_MAP nodes have required parameters
function uiMapCallback(node,path) {
  var has_leafcode = node.leafcode != undefined;
  var has_nodes = node.nodes != undefined;
  var is_input = node.input == true;
  var has_input_message = node.input_message != undefined;
  var is_parts_input = node.parts == true;

  var issues = [];

  if ( has_leafcode && has_nodes ) {
    issues.push('Marked as a leaf and also has children.');
  }

  if ( !has_nodes && !has_leafcode ) {
    issues.push('Not marked as a leaf or a node (missing children).');
  }

  if ( is_input && is_parts_input ) {
    issues.push('Marked for both parts input and text input.');
  }

  if ( is_input && ! has_input_message ) {
    issues.push('Marked for text input but no input message provided.');
  }

  return issues.length == 0 ? null : {
    title: 'ERROR',
    message: issues.join(' : '),
    node: node,
    path: path
  };
}; // end uiMapCallback
var uimap_issues = traverseNodes(UI_MAP,uiMapCallback,[]);
if ( uimap_issues && uimap_issues.length > 0 ) {
  failed = true;
  console.log('The following UI_MAP issues were located:');
  uimap_issues.forEach( el => {
    console.log('  '+el.title+':  '+el.path.join(' -> '));
    el.message.split(' : ').forEach( el => console.log('    - '+el) );
  });
} else {
  console.log('No issues found with UI_MAP.');
}

//// Check all RULES have the required parameters
var rules_issues = {};
function addIssue(issue,rulecode) {
  if ( rules_issues[rulecode] == undefined ) rules_issues[rulecode] = [];
  rules_issues[rulecode].push(issue);
}; // end addIssue
// check each rule for entries and then check each entry
for ( var key in RULES ) {
  if ( RULES[key].length == 0 ) {
    addIssue({
      title: 'ERROR',
      message: 'No entries found.'
    }, key);
  }
  RULES[key].forEach( entry => {
    if ( entry.path == undefined ) {
      addIssue({
        title: 'ENTRY MISSING PATH ARRAY',
        message: ''//JSON.stringify(entry)
      }, key);
    }
    if ( entry.value == undefined ) {
      addIssue({
        title: 'ENTRY MISSING VALUE',
        message: ''//JSON.stringify(entry)
      }, key);
    }
  });
}
// print results for rules map
var keys = Object.keys(rules_issues);
if ( keys.length > 0 ) {
  failed = true;
  console.log('The following RULES issues were located:');
  keys.forEach( key => {
    console.log('  '+key+':');
    rules_issues[key].forEach( issue => {
      console.log('    - '+issue.title+' '+issue.message);
    });
  });
} else {
  console.log('No issues found with RULES map.');
}

//// Check all NOTES_MAP nodes have required parameters
function notesMapCallback(node,path) {
  var has_format = node.format != undefined;
  var has_nodes = node.nodes != undefined;

  var issues = [];

  if ( has_nodes && !has_format ) {
    issues.push('Missing format string.');
  }

  if ( has_format && has_nodes ) {
    var missing_nodes = [];
    var keys = node.format.match(/\{.*?\}/gs);
    if ( keys ) {
      keys.forEach( key => {
        var true_key = key.match(/\{(.*?)(:.*?)?\}/s)[1];
        console.log('checking for key: '+true_key);
        console.log(node.nodes[true_key]);
        if ( node.nodes[true_key] == undefined ) {
          missing_nodes.push(true_key);
        }
      });
    }
    if ( missing_nodes.length > 0 ) {
      issues.push(
        'Key(s) present in format string without matching child node: '
        + missing_nodes.join(', ') + '.'
      );
    }
  }

  return issues.length == 0 ? null : {
    title: 'ERROR',
    message: '',
    node: node,
    path: path
  };
}; // end notesMapCallback
var notesmap_issues = traverseNodes(NOTES_MAP,notesMapCallback,[]);

/// Check all leafcodes in UI_MAP are present in rules

/// Check all leafcodes in RULES are present in UI_MAP

/// Check all RULES point to valid locations in the NOTES_MAP

console.log(failed ? 'COMPLETE: Issues detected, see notes above.' : 'COMPLETE: All tests passed.');
