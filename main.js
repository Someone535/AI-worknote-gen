// Main functions required to draw/update the UI
//
console.log('test');

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
      var new_input = document.createElement('input');
      new_input.setAttribute('type','text');
      new_input.setAttribute('placeholder',obj.nodes[node].label);
      new_input.setAttribute('id',node+'_input');
      options_div.appendChild(new_input);
      var new_submit = document.createElement('button');
      new_submit.innerText = 'Submit';
      new_submit.setAttribute('data',node);
      new_submit.onclick = inputButtonHandler;
      options_div.appendChild(new_submit);
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
  document.body.innerHTML = "";
  var output = document.AI.submitted;
  output.forEach( function(out) {
    console.log(JSON.stringify(out));
    var output_p = document.createElement('p');
    output_p.innerText = JSON.stringify(out);
    document.body.appendChild(output_p);
  });
}; // end saveAndExit()

function getUINode(ui_map,key_arr) {
  var out = ui_map;
  key_arr.forEach( function(el) {
    out = out.nodes[el];
  });
  return out;
}; // end getUINode(key_arr)
