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
import LeafReview from './leaf-review.js';

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
    this.joinSections = this.joinSections.bind(this);
    this.handleSectionSelection = this.handleSectionSelection.bind(this);
    this.submitLeaf = this.submitLeaf.bind(this);
    this.handleLeafDeletion = this.handleLeafDeletion.bind(this);

    this.state = {
      section: null, path: [], data: {}, 
      leaves: [],
      default_sections: [ 'Opening Notes', 'Closing Notes' ],
      sections: [ 'Opening Notes', 'Closing Notes' ],
      show_content: false, show_submit_page: false, select_doors: false,
      show_search: false, show_review: false,
    };
  }; // end constructor

  getNode(tree,path) {
    var out = tree;
    path.forEach( function(key) { out = out.nodes[key]; } );
    return out;
  }; // getNode

  joinSections() {
    var sections = {};
    this.state.sections.forEach( label => {
      sections[label] = {
        label: label,
        leaves: []
      }
    });
    this.state.leaves.forEach( leaf => {
      sections[leaf.section].leaves.push(leaf);
    });
    return Object.values(sections);
  }; // end joinSections

  hasLeaves() {
    var leaves_found = false;
    this.joinSections().forEach( el => {
      if ( el.leaves.length > 0 ) leaves_found = true;
    });
    return leaves_found;
  }; // end hasLeaves

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
    if ( section_label == "Select Doors" ) {
      this.setState({ select_doors: true });
    } else {
      this.setState({ section: section_label });
    }
  }; // end handleSectionSelection

  handleLeafDeletion(path) {
    var path_str = path.join('');
    var leaves = this.state.leaves;
    leaves = leaves.filter( leaf => leaf.path.join('') != path_str );
    this.setState({ leaves: leaves });
  }; // end handleLeafDeletion

  submitCurrentLeaf() {
    var node = this.getNode(UI_MAP,this.state.path);
    this.submitLeaf({
      code: node.leafcode,
      data: Object.values( this.state.data ),
      path: this.state.path,
    });
  }; // end submitCurrentLeaf
  submitLeaf(leaf) {
    leaf.section = this.state.section;
    var leaves = this.state.leaves;
    // Check for leaf with same path and section to replace
    var match_ind = leaves.findIndex( el => 
      el.path.join('') == leaf.path.join('') && el.section == leaf.section
    );
    if ( match_ind != -1 ) {
      leaves[match_ind] = leaf;
    } else {
      leaves.push(leaf);
    }
    this.setState({ leaves: leaves });
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
    var sections = this.joinSections();
    sections.forEach( el => {
      el.leaves = el.leaves.map( l => l.leaf );
    });
    return (
      <SubmitPage
        mounted={this.state.show_submit_page}
        sections={this.joinSections()}
        onUnmount={ () => this.setState({
          show_content: true, show_submit_page: false 
        }) }
        onClear={ () => {
          this.setState({
            show_submit_page: false,
            show_content: false,
            section: null,
            sections: this.state.default_sections,
            leaves: []
          });
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
          var section_label = 'Door(s): '+arr.join(', ');
          var sections = this.state.sections;
          sections.push(section_label);
          this.setState({ sections: sections, section: section_label });
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

  renderLeafReview() {
    return (
      <LeafReview
        mounted={this.state.show_review}
        onDelete={this.handleLeafDeletion}
        onUnmount={() => this.setState({ show_review: false })}
        sections={this.state.sections}
        leaves={this.state.leaves}
        tree={UI_MAP}
      />
    );
  }; // end renderLeafReview

  render() {
    return (
      <div className='main-page'>
        {this.renderTitles()}
        {this.renderNavPane()}
        <FancyButton
          className='menu-btn' icon='list' transition='growleft'
          onClick={ () => this.setState({ show_review: true }) }
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
        {this.renderLeafReview()}
      </div>
    );
  }; // end render
}; // end MainPage

export default MainPage;
