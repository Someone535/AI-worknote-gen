/** main-page.js - Component acting as the main/root page of the app
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
import React from 'react';

import css from '../css/main-page.css';

import FancyButton from './fancy-button.js';
import NavPanel from './nav-panel.js';
import AlertPopup from './alert-popup.js';
import InputPopup from './input-popup.js';
import SubmitPage from './submit-page.js';

import UI_MAP from './ui-tree.js';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.navClick = this.navClick.bind(this);
    this.handleBackBtn = this.handleBackBtn.bind(this);
    this.handleHomeBtn = this.handleHomeBtn.bind(this);
    this.showContent = this.showContent.bind(this);
    this.hideContentCallback = this.hideContentCallback.bind(this);
    this.submitCurrentLeaf = this.submitCurrentLeaf.bind(this);
    this.goUp = this.goUp.bind(this);
    this.saveData = this.saveData.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
    this.handleSaveExitBtn = this.handleSaveExitBtn.bind(this);

    this.state = {
      path: [], data: {}, leaves: [],
      show_content: true, show_submit_page: false
    };
  }; // end constructor

  getNode(tree,path) {
    var out = tree;
    path.forEach( function(key) { out = out.nodes[key]; } );
    return out;
  }; // getNode

  navigateTo(path) {
    console.log(JSON.stringify(this.state));
    // Locate data to be cleared based on differences between two paths
    var paths_to_clear = [];
    var path_cumulative = [];
    var matches = true;
    this.state.path.forEach( (el,ind) => {
      if ( matches && ( !path[ind] || path[ind] != el ) ) matches = false;
      path_cumulative.push(el);
      if ( !matches ) paths_to_clear.push( path_cumulative.join(':') );
    });
    // Clear data and change path
    var new_data = this.state.data;
    paths_to_clear.forEach( el => delete this.state.data[el] );
    // Identify values to be saved based on nodes traversed
    var node = UI_MAP;
    path_cumulative = [];
    path.forEach( el => {
      path_cumulative.push(el);
      node = node.nodes[el];
      if ( node.value ) new_data[ path_cumulative.join(':') ] = node.value;
    });
    this.setState({ path: path, data: new_data });
    console.log(JSON.stringify(this.state));
  }; // end navigateTo

  hideContentCallback( fnc, params ) {
    this.setState({ show_content: false });
    setTimeout( () => fnc(...params), 250 );
  }; // end hideContentCallback
  showContent() {
    this.setState({ show_content: true });
  }; // end showContent

  navClick(input) {
    if ( Array.isArray(input) ) {
      var root_path = this.state.path.slice(0,2);
      this.navigateTo([...root_path, ...input ]);
    } else if ( typeof input == 'string' ) {
      var new_path = this.state.path;
      new_path.push(input);
      this.navigateTo( new_path );
    }
    this.showContent();
  }; // end navClick

  goUp() {
    var new_path = this.state.path;
    new_path.pop();
    this.navigateTo( new_path );
  }; // end goUp

  handleBackBtn() {
    if ( this.state.path.length < 2 ) {
      this.goUp();
    } else {
      this.navigateTo( this.state.path.slice(0,1) );
    }
    this.showContent();
  }; // end handleBackBtn

  handleHomeBtn() {
    this.navigateTo( [] );
    this.showContent();
  }; // end handleHomeBtn

  handleSaveExitBtn() {
    this.setState({ show_submit_page: true });
  }; // end handleSaveExitBtn

  submitCurrentLeaf() {
    var new_leaves = this.state.leaves;
    var node = this.getNode(UI_MAP,this.state.path);
    new_leaves.push({
      code: node.leafcode, data: Object.values( this.state.data )
    });
    this.handleBackBtn();
  }; // end submitCurrentLeaf

  saveData(data) {
    console.log('saving data: '+data);
    var new_data = this.state.data;
    new_data[ this.state.path.join(':') ] = data;
    this.setState({ data: new_data });
    console.log(JSON.stringify(this.state));
  }; // end saveData

  renderLeafConfirmation() {
    var title = 'Would you like to submit the following leaf?';
    var message = this.state.path.join(' : ');
    var node = this.getNode(UI_MAP,this.state.path);
    message += ' -> ' + node.leafcode;
    var data = !node.input || this.state.data[ this.state.path.join(':') ];
    return (
      <AlertPopup
        className='leaf-alert'
        type='confirm'
        title={title}
        message={message}
        onSubmit={() => this.hideContentCallback(this.submitCurrentLeaf,[])}
        onCancel={this.goUp}
        mounted={data && node.leafcode != undefined}
        transition='bottom'
      />
    );
  }; // end renderLeafConfirmation

  renderTextInputBox() {
    var message = 'This input requires text:';
    var text_prompt = 'text goes here';
    var node = this.getNode(UI_MAP,this.state.path);
    var data = node.input && !this.state.data[ this.state.path.join(':') ];
    return (
      <InputPopup
        className='text-input-alert'
        type='textinput'
        message={message}
        text_prompt={text_prompt}
        onSubmit={this.saveData}
        transition='right'
        mounted={data}
      />
    );
  }; // end renderTextInputBox()

  renderTitles() {
    var node = this.getNode(UI_MAP,this.state.path);
    var section_label = this.state.path.length > 0 ? 
      this.getNode(UI_MAP,this.state.path.slice(0,1)).label : '';
    var type_label = this.state.path.length > 1 ?
      this.getNode(UI_MAP,this.state.path.slice(0,2)).label : '';
    var title = 'Select Section';
    var subtitle = '';
    if ( this.state.path.length > 0 ) {
      title = 'Select Note Type';
      subtitle = node.label;
    }
    if ( this.state.path.length > 1 ) {
      title = 'Build Note';
      subtitle = section_label + ' - ' + type_label;
    }
    return [
      <h1 key='main-title' className='main-title'>{title}</h1>,
      <h2 key='subtitle' className='sub-title'>{subtitle}</h2>
    ];
  }; // end renderTitles

  renderNavPane() {
    var node = this.getNode(UI_MAP,this.state.path);
    var nav_panel_style = 'block';
    if ( this.state.path.length > 0 ) {
      nav_panel_style = 'mega-list';
    }
    if ( this.state.path.length > 1 ) {
      nav_panel_style = 'accordion';
      node = this.getNode(UI_MAP,this.state.path.slice(0,2));
    }
    return (
      <NavPanel
        style={nav_panel_style}
        option_tree={node}
        onClick={(key) => this.hideContentCallback(this.navClick,[key])} 
        clickNoUIUpdate={this.navClick}
        show_children={this.state.show_content}
      />
    );
  }; // end renderNavPane

  renderSubmitPage() {
    return (
      <SubmitPage
        mounted={this.state.show_submit_page}
        leaves={this.state.leaves}
        unmount={ () => this.setState({ show_submit_page: false }) }
      />
    );
  }; // end renderSubmitPage

  render() {
    return (
      <div className='main-page'>
        {this.renderTitles()}
        {this.renderNavPane()}
        <FancyButton className='menu-btn' icon='list' direction='left' mounted='true' />
        <FancyButton className='search-btn' icon='search' direction='right' mounted='true' />
        <FancyButton
          className='exit-btn'
          icon='save'
          direction='right'
          onClick={this.handleSaveExitBtn}
          mounted={this.state.leaves.length > 0}
        />
        <FancyButton 
          className='back-btn' icon='arrow_back' direction='left'
          onClick={() => this.hideContentCallback(this.handleBackBtn,[])}
          mounted={this.state.path.length > 0}
        />
        <FancyButton 
          className='home-btn' icon='arrow_back' direction='left'
          onClick={() => this.hideContentCallback(this.handleHomeBtn,[])}
          mounted={this.state.path.length > 1}
        />
        {this.renderLeafConfirmation()}
        {this.renderTextInputBox()}
        {this.renderSubmitPage()}
      </div>
    );
  }; // end render
}; // end MainPage

export default MainPage;
