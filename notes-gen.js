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
            str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
        }
    }

    return str;
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
      for ( var i = 0; i < fmt_path.length-1; i++ ) {
        var key = fmt_path[i];
        console.log('key: '+key);
        verifyCurrentNode( curr_pos, curr_keys );
        console.log('verifiedNode: '+JSON.stringify(curr_pos));
        if ( curr_pos.nodes[key] == undefined ) curr_pos.nodes[key] = {};
        curr_pos = curr_pos.nodes[key];
        curr_keys.push(key);
      }
      console.log('penultimate node: '+JSON.stringify(curr_pos));

      // set value of final node
      if ( entry.value != null) {
        curr_pos.nodes[ fmt_path[ fmt_path.length-1 ] ] = fmt_out;
      } else {
        var def_val = getNode( FORMAT_TREE, fmt_path );
        curr_pos.nodes[ fmt_path[ fmt_path.length-1 ] ] = def_val;
      }

    });

  });

  console.log( JSON.stringify( out_tree, null, '\t' ) );

}; // end buildOutputTree( ui_output )

function collapseOutputTree( notes_tree ) {
}; // end collapseOutputTree( notes_tree )

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
    // set any nodes already formatted
    /*for ( var key in fmt_node.nodes ) {
      if ( typeof fmt_node.nodes[key] == 'string' ) {
        node.nodes[key] = fmt_node.nodes[key]
      }
    }*/
  }
}; // end verifyCurrentNode( node, path_arr )
