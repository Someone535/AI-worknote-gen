const fs = require('fs');
var UI_MAP = require('../config/ui-tree.js');

function alphabetise(node) {

  if ( node.nodes != undefined ) {
    // Sort the children by label
    var new_children = {};
    var child_arr = [];
    for ( var key in node.nodes ) {
      child_arr.push({ key: key, node: node.nodes[key] });
    }
    child_arr.sort( (a,b) => {
      var labelA = a.node.label.toUpperCase();
      var labelB = b.node.label.toUpperCase();
      if ( labelA < labelB ) return -1;
      if ( labelA > labelB ) return 1;
      return 0;
    }).forEach( el => {
      new_children[el.key] = el.node;
    });
    // Alphabetise each child
    for ( var key in new_children ) {
      new_children[key] = alphabetise( new_children[key] );
    }
    // Set new children
    node.nodes = new_children;
  }

  return node;
  
}; // end alphabetise

var new_map = UI_MAP;
// Don't alphabetise the first level
for ( var key in new_map.nodes ) {
  new_map.nodes[key] = alphabetise(new_map.nodes[key]);
}

new_map = 'module.exports = ' + JSON.stringify(new_map,null, '\t');

try {
  fs.writeFileSync('./src/config/ui-tree.js',new_map);
} catch (e) {
  console.log('Cannot write file ',e);
}
