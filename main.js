/** main.js - Main functions required to draw/update the UI
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

document.AI = {
  curr_position: [],
  curr_data: {},
  submitted: []
}
drawUI();

// Register common buttons
var back = document.getElementById('go_back_btn');
back.onclick = backButtonHandler;
var save_btn = document.getElementById('save_btn');
save_btn.onclick = submitButtonHandler;
var finish = document.getElementById('complete_btn');
finish.onclick = saveAndExit;

function navUp() {
  delete document.AI.curr_data[ document.AI.curr_position.join(':') ];
  document.AI.curr_position.pop();
}; // end navUp(curr_position)

function navDown(option) {
  document.AI.curr_position.push(option);
}; // end navDown(curr_position,option)

function drawUI() {

  var obj = getUINode(UI_MAP,document.AI.curr_position);

  var options_div = document.getElementById('options_list');
  
  // Draw Title
  var title = document.getElementById('page_title');
  title.innerText = obj.label;

  // Draw Options
  for ( var node in obj.nodes ) {
    // Input button
    if ( obj.nodes[node].input ) {
      var new_container = document.createElement('div');
      var new_input = document.createElement('input');
      new_input.setAttribute('type','text');
      new_input.setAttribute('placeholder',obj.nodes[node].label);
      new_input.setAttribute('id',node+'_input');
      new_container.appendChild(new_input);
      var new_submit = document.createElement('button');
      new_submit.innerText = 'Submit';
      new_submit.setAttribute('data',node);
      new_submit.onclick = inputButtonHandler;
      new_container.appendChild(new_submit);
      options_div.appendChild(new_container);
    } else { // Simple option button
      var new_input = document.createElement('button');
      new_input.innerText = obj.nodes[node].label;
      new_input.setAttribute('data',node);
      if ( obj.nodes[node].value ) {
        new_input.setAttribute('value',obj.nodes[node].value);
      }
      new_input.onclick = optionButtonHandler;
      options_div.appendChild(new_input);
    }
  }

  // Draw save button if no other options
  var save_btn = document.getElementById('save_btn');
  if ( obj.nodes == undefined ) {
    save_btn.setAttribute('data',obj.leafcode);
    save_btn.style.display = '';
    var leaf_text = [];
    var data_key = null;
    document.AI.curr_position.forEach( function(el) {
      data_key = data_key ? data_key+':'+el : el;
      if ( document.AI.curr_data[data_key] != undefined ) {
        leaf_text.push( el + '( ' + document.AI.curr_data[data_key] + ' )' ); 
      } else leaf_text.push( el );
    });
    leaf_text = leaf_text.join(', ');
    var leaf_text_p = document.createElement('p');
    leaf_text_p.innerText = leaf_text;
    options_div.appendChild(leaf_text_p);
  } else {
    save_btn.style.display = 'none';
  }

  // Draw debug info
  var leaves = document.getElementById('saved_leaves');
  leaves.innerHTML = '';
  document.AI.submitted.forEach( function(out) {
    var output_p = document.createElement('li');
    output_p.innerText = JSON.stringify(out);
    leaves.appendChild(output_p);
  });
  var c_pos = document.getElementById('curr_pos');
  c_pos.innerText = document.AI.curr_position.join(', ');
  var c_data = document.getElementById('curr_data');
  c_data.innerHTML = '';
  for ( var key in document.AI.curr_data ) {
    var new_data = document.createElement('li');
    new_data.innerText = key + ' -> ' + document.AI.curr_data[key];
    c_data.appendChild(new_data);
  }

}; // end drawUI(ui_map,key_arr)

function inputButtonHandler(e) {
  var input_id = e.target.getAttribute('data') + '_input';
  var inp_data = document.getElementById( input_id ).value;
  clearUI();
  navDown(e.target.getAttribute('data'));
  document.AI.curr_data[ document.AI.curr_position.join(':') ] = inp_data;
  drawUI();
}; // end inputButtonHandler()

function optionButtonHandler(e) {
  var intr_data = e.target.getAttribute('value');
  clearUI();
  navDown(e.target.getAttribute('data'));
  if ( intr_data ) document.AI.curr_data[ document.AI.curr_position.join(':') ] = intr_data;
  drawUI();
}; // end optionButtonHandler()

function submitButtonHandler(e) {
  var leafcode = e.target.getAttribute('data');
  var new_data = [];
  for ( var key in document.AI.curr_data ) {
    new_data.push( document.AI.curr_data[key] );
  }
  var new_leaf = { code: leafcode, data: new_data };
  document.AI.submitted.push(new_leaf);
  document.AI.curr_data = [];
  document.AI.curr_position = [];
  clearUI();
  drawUI();
}; // end submitButtonHandler(e)

function backButtonHandler() {
  clearUI();
  navUp();
  drawUI();
}; // end backButtonHandler()

function clearUI() {
  var options_div = document.getElementById('options_list');
  var elements = options_div.children;
  var to_delete = [];
  for ( var i = 0; i < elements.length; i++ ) {
    var el = elements[i];
    if ( el.tagName != 'SCRIPT' && el.tagName != 'H1' && el.id != 'complete_btn' ) to_delete.push(el);
  }
  to_delete.forEach( function(el) {
    options_div.removeChild(el);
  });
}; // end clearUI()

function saveAndExit() {
  var output = document.AI.submitted;
  var note_tree = buildOutputTree( output );
  document.body.innerHTML = "";
  /*output.forEach( function(out) {
    console.log(JSON.stringify(out));
    var output_p = document.createElement('p');
    output_p.innerText = JSON.stringify(out);
    document.body.appendChild(output_p);
  });*/
  var notes = collapseOutputTree( note_tree );
  var notes_p = document.createElement('p');
  notes_p.innerText = notes;
  document.body.appendChild(notes_p);
}; // end saveAndExit()

function getUINode(ui_map,key_arr) {
  var out = ui_map;
  key_arr.forEach( function(el) {
    out = out.nodes[el];
  });
  return out;
}; // end getUINode(key_arr)
