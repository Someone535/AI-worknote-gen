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
import DoorsPopup from './doors-popup.js';
import BlockButton from './block-button.js';
import SearchPanel from './search-panel.js';

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
    this.renderDoorsPopup = this.renderDoorsPopup.bind(this);
    this.locateSection = this.locateSection.bind(this);
    this.joinSections = this.joinSections.bind(this);
    this.clearSections = this.clearSections.bind(this);
    this.resetSections = this.resetSections.bind(this);
    this.handleSectionSelection = this.handleSectionSelection.bind(this);
    this.submitLeaf = this.submitLeaf.bind(this);

    this.state = {
      section: null, path: [], data: {}, 
      open_sections: [
        { label: 'Opening Notes', leaves: [] },
      ],
      close_sections: [
        { label: 'Closing Notes', leaves: [] },
      ],
      other_sections: [],
      show_content: false, show_submit_page: false, select_doors: false,
      show_search: false,
    };
  }; // end constructor

  getNode(tree,path) {
    var out = tree;
    path.forEach( function(key) { out = out.nodes[key]; } );
    return out;
  }; // getNode

  locateSection( section_label ) {
    var section_arr = '';
    switch ( section_label ) {
      case 'Opening Notes':
        section_arr = 'open_sections';
        break;
      case 'Closing Closing':
        section_arr = 'close_sections';
        break;
      default:
        section_arr = 'other_sections';
    };
    section_arr = this.state[section_arr];
    var section = section_arr.find( el => el.label == section_label );
    if ( section == undefined ) {
      section = { label: section_label, leaves: [] };
      section_arr.push(section);
    }
    return { state_arr: section_arr, section: section }
  }; // end locateSection

  joinSections() {
    return [ 
      ...this.state.open_sections, 
      ...this.state.close_sections,
      ...this.state.other_sections, 
    ];
  }; // end joinSections

  hasLeaves() {
    var leaves_found = false;
    this.joinSections().forEach( el => {
      if ( el.leaves.length > 0 ) leaves_found = true;
    });
    return leaves_found;
  }; // end hasLeaves

  clearSections() {
    this.state.open_sections.forEach( el => el.leaves = [] );
    this.state.close_sections.forEach( el => el.leaves = [] );
    this.state.other_sections.forEach( el => el.leaves = [] );
    this.setState({ section: null });
  }; // end clearSections

  resetSections() {
    this.setState({ other_sections: [] });
    this.clearSections();
  }; // end resetSections

  navigateTo(path) {
    // Locate data to be cleared based on differences between two paths
    var paths_to_clear = [];
    var path_cumulative = [];
    var matches = true;
    this.state.path.forEach( (el,ind) => {
      if ( matches && ( ind > path.length-1 || path[ind] != el ) ) matches = false;
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
      var root_path = this.state.path.slice(0,1);
      this.navigateTo([...root_path, ...input ]);
    } else if ( typeof input == 'string' ) {
      var new_path = [...this.state.path];
      new_path.push(input);
      this.navigateTo( new_path );
    }
    if ( input == 'specificdoors' ) this.setState({ select_doors: true });
    this.showContent();
  }; // end navClick

  goUp() {
    var new_path = [...this.state.path];
    new_path.pop();
    this.navigateTo( new_path );
  }; // end goUp

  handleBackBtn() {
    this.navigateTo( [] );
    this.showContent();
  }; // end handleBackBtn

  handleHomeBtn() {
    this.navigateTo( [] );
    this.setState({ section: null });
  }; // end handleHomeBtn

  handleSaveExitBtn() {
    this.setState({ show_content: false, show_submit_page: true });
  }; // end handleSaveExitBtn

  handleSectionSelection( section_label ) {
    console.log(section_label);
    if ( section_label == "Select Doors" ) {
      this.setState({ select_doors: true });
    } else {
      this.setState({ section: section_label });
    }
  }; // end handleSectionSelection

  submitCurrentLeaf() {
    var node = this.getNode(UI_MAP,this.state.path);
    this.submitLeaf({
      code: node.leafcode,
      data: Object.values( this.state.data ) 
    });
  }; // end submitCurrentLeaf
  submitLeaf(leaf) {
    var section = this.locateSection(this.state.section);
    section.section.leaves.push(leaf);
    var new_state = {};
    new_state[section.state_label] = section;
    this.setState(new_state);
    this.handleBackBtn();
  }; // end submitLeaf

  saveData(data) {
    var new_data = this.state.data;
    new_data[ this.state.path.join(':') ] = data;
    this.setState({ data: new_data });
  }; // end saveData

  renderLeafConfirmation() {
    var title = 'Would you like to submit the following leaf?';
    var message = ''
    var node = UI_MAP;
    var path_cumulative = [];
    this.state.path.forEach( (el,ind) => {
      node = node.nodes[el];
      path_cumulative.push(el);
      if ( ind == 0 ) message += node.label;
      else if ( ind == 1 ) message += ' -> ' + node.label;
      else message += '- ' + node.label;
      if ( node.input ) message += ' ( ' + this.state.data[ path_cumulative.join(':') ] + ' )';
      if ( ind != 0 ) message += '\n';
    });
    var node = this.getNode(UI_MAP,this.state.path);
    message += 'Final Code: ' + node.leafcode;
    var data = !node.input || this.state.data[ this.state.path.join(':') ];
    return (
      <AlertPopup
        className='leaf-alert'
        type='confirm'
        title={title}
        message={message}
        onSubmit={() => this.hideContentCallback(this.submitCurrentLeaf,[])}
        onCancel={this.goUp}
        mounted={node.leafcode != undefined && data}
        transition='growleft'
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
        message={node.input_message}
        text_prompt={node.input_placeholder}
        onSubmit={this.saveData}
        transition='growright'
        mounted={data}
      />
    );
  }; // end renderTextInputBox()

  renderTitles() {
    var title = this.state.section || 'Select Section';
    var subtitle = this.state.path.length > 0 ? ' - ' + UI_MAP.nodes[ this.state.path[0] ].label : '';
    var titles = [(
      <div key={'0'} className='main-title title-shortened'>{title}</div> 
    )];
    if ( subtitle != '' ) titles.push(
      <div key={'1'} className='main-title title-fulllength'>{subtitle}</div>
    );
    return (
      <div className='main-page-title-container'>
        {titles}
      </div>
    );
  }; // end renderTitles

  renderSectionSelection() {
    var sections = this.joinSections().map( el => el.label );
    sections.push('Select Doors');
    sections = sections.map( (el,ind) => (
      <BlockButton
        key={el+ind}
        text={el}
        mounted={this.state.section == null}
        transition='growdown'
        onClick={ () => this.handleSectionSelection(el) }
        onUnmount={ () => this.setState({ show_content: true }) }
      />
    )); 
    return (
      <div className="section-selection"> {sections} </div> 
    );
  }; // end renderSectionSelection

  renderNavPane() {
    var node = this.getNode(UI_MAP,this.state.path);
    var nav_panel_style = 'mega-list';
    if ( this.state.path.length > 0 ) {
      nav_panel_style = 'accordion';
      node = this.getNode(UI_MAP,this.state.path.slice(0,1));
    }
    return (
      <NavPanel
        style={nav_panel_style}
        option_tree={node}
        onClick={(key) => this.hideContentCallback(this.navClick,[key])} 
        clickNoUIUpdate={this.navClick}
        show_children={this.state.show_content}
        mounted={true}
      />
    );
  }; // end renderNavPane

  renderSubmitPage() {
    return (
      <SubmitPage
        mounted={this.state.show_submit_page}
        sections={this.joinSections()}
        onUnmount={ () => this.setState({
          show_content: true, show_submit_page: false 
        }) }
        onClear={ () => {
          this.setState({ show_submit_page: false, show_content: false });
          this.resetSections();
          this.navigateTo([]);
        }}
      />
    );
  }; // end renderSubmitPage

  renderDoorsPopup() {
    var url_params = new URLSearchParams(window.location.search);
    var doors = url_params.get('doors');
    if ( doors ) doors = doors.split(',');
    else doors = [];
    return (
      <DoorsPopup
        mounted={this.state.select_doors}
        title='Select Doors:'
        options={doors}
        custom='true'
        onUnmount={() => this.setState({ select_doors: false })}
        onSubmit={(arr) => {
          this.setState({ select_doors: false, show_content: true });
          this.locateSection( 'Doors: '+arr.join(', ') );
          this.setState({ section: 'Doors: '+arr.join(', ') });
        }}
      />
    );
  }; // end renderDoorsPopup

  renderSearchPanel() {
    return (
      <SearchPanel
        transition='growright'
        tree={UI_MAP}
        onCancel={ () => this.setState({ show_search: false }) }
        onSubmit={ (leaf) => {
          this.setState({ show_search: false });
          this.submitLeaf(leaf);
        }}
        mounted={this.state.show_search}
      />
    );
  }; // end renderSearchPanel

  render() {
    return (
      <div className='main-page'>
        {this.renderTitles()}
        {this.renderNavPane()}
        <FancyButton
          className='menu-btn' icon='list' transition='growleft'
          mounted='true'
        />
        <FancyButton
          className='search-btn' icon='search' transition='growright'
          onClick={ () => this.setState({ show_search: true }) }
          mounted={this.state.section}
        />
        <FancyButton
          className='exit-btn' icon='save' transition='growright'
          onClick={this.handleSaveExitBtn}
          mounted={this.hasLeaves()}
        />
        <FancyButton 
          className='back-btn' icon='arrow_back' transition='growleft'
          onClick={() => this.hideContentCallback(this.handleBackBtn,[])}
          mounted={this.state.path.length > 0}
        />
        <FancyButton 
          className='home-btn' icon='home' transition='growleft'
          onClick={() => this.hideContentCallback(this.handleHomeBtn,[])}
          mounted={this.state.section}
        />
        {this.renderLeafConfirmation()}
        {this.renderTextInputBox()}
        {this.renderSectionSelection()}
        {this.renderDoorsPopup()}
        {this.renderSubmitPage()}
        {this.renderSearchPanel()}
      </div>
    );
  }; // end render
}; // end MainPage

export default MainPage;
