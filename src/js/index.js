/** index.js - Main functions required to draw/update the UI
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
import UI_MAP from './ui-tree.js';
import backend from './notes-gen.js';

import React from 'react';
import ReactDOM from 'react-dom';

import css from '../css/index.css'

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curr_position: [],
      curr_data: {},
      submitted: []
    };
    this.handleOpt = this.handleOpt.bind(this);
    this.handleSubmitBtn = this.handleSubmitBtn.bind(this);
    this.handleSaveExitBtn = this.handleSaveExitBtn.bind(this);
  }

  handleOpt(opt,value) {
    this.setState((state,props) => {
      var new_pos = state.curr_position;
      new_pos.push(opt);
      var new_state = { curr_position: new_pos };
      if ( value ) {
        var new_data = state.curr_data;
        new_data[ new_pos.join(':') ] = value;
        new_state.curr_data = new_data;
      }
      return new_state;
    });  
    console.log( 'Container State: '+JSON.stringify(this.state) );
  };

  handleBackBtn() {
    this.setState((state,props) => {
      var new_data = state.curr_data;
      delete new_data[ state.curr_position.join(':') ];
      var new_pos = state.curr_position;
      new_pos.pop();
      return { curr_position: new_pos };
    });
  };

  handleSubmitBtn() {
    var node = getUINode(UI_MAP,this.state.curr_position);
    var new_data = [];
    for ( var key in this.state.curr_data ) {
      new_data.push( this.state.curr_data[key] );
    }
    var new_submitted = this.state.submitted;
    new_submitted.push({ code: node.leafcode, data: new_data });
    this.setState({
      curr_position: [],
      curr_data: {},
      submitted: new_submitted
    });
  };

  handleSaveExitBtn() {
    var note_tree = backend.buildOutputTree( this.state.submitted );
    var notes = backend.collapseOutputTree( note_tree );
    console.log('WORK NOTES: '+notes);
  };

  renderOption(key,node) {
    return (
      <Option 
        key={key} node={node} node_key={key} 
        onClick={(value) => this.handleOpt(key,value)} 
      />
    );
  };

  render() {
    var node = getUINode(UI_MAP,this.state.curr_position);
    var options = [];
    for ( var key in node.nodes ) {
      options.push( this.renderOption(key,node.nodes[key]) );
    }
    var save_btn = node.leafcode ? 
      ( <button id='save_btn' onClick={this.handleSubmitBtn}>Save Note</button> )
      : null;
    var back_btn = this.state.curr_position.length > 0 ?
      ( <button id='go_back_btn' onClick={()=>this.handleBackBtn()}>Go Back</button> )
      : null;
    var exit_btn = this.state.submitted.length > 0 ?
      ( <button id='complete_btn' onClick={this.handleSaveExitBtn}>Submit All Notes &amp; Exit</button> )
      : null;
    return (
      <div>
        <h1>{node.label}</h1>
        <div id='options_list'>{options}</div>
        <div id='navigation_buttons'>
          {save_btn}
          {back_btn}
          {exit_btn}
        </div>
      </div>
    );
  }
}

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      inp: props.node.input ? '' : props.node.value
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmitBtn = this.handleSubmitBtn.bind(this);
  };

  handleInput(evt) {
    this.setState({ inp: evt.target.value });
  };
  handleSubmitBtn() {
    this.props.onClick( this.state.inp );
  };

  render() {

    var jsxOut = null;
    var jsxBtn = ( 
      <button
        id={'opt_'+this.props.node_key} 
        onClick={this.handleSubmitBtn}
      >
        {this.props.node.input ? 'Submit' : this.props.node.label}
      </button>
    );
    if ( this.props.node.input ) {
      jsxOut  = (
        <div>
          <input 
            id={'ipt_'+this.props.node.node_key} 
            type='text' 
            placeholder={this.props.node.label} 
            onChange={this.handleInput}
          />
          {jsxBtn}
        </div>
      );
    } else {
      jsxOut = jsxBtn;
    }

    return jsxOut;
  }
}

function getUINode(ui_map,key_arr) {
  var out = ui_map;
  key_arr.forEach( function(el) {
    out = out.nodes[el];
  });
  return out;
}; // end getUINode(key_arr)

ReactDOM.render( <MainContainer />, document.getElementById('root') );
