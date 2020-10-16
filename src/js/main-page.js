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
import axios from 'axios';

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
import Welcome from './welcome.js';

import UI_MAP from '../config/ui-tree.js';

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
    this.renderPartsPopup = this.renderPartsPopup.bind(this);

    this.state = {
      section: null, path: [], data: {}, 
      leaves: [],
      default_sections: [ 'First Paragraph', 'Last Paragraph' ],
      parts: null,
      sections: [ 'First Paragraph', 'Last Paragraph' ],
      show_content: false, show_submit_page: false, select_doors: false,
      show_search: false, show_review: false, select_parts: false,
      welcome: !document.cookie.split(';').some( el => el.includes('oldUser=true') )
    };
  }; // end constructor

  /* Given a tree and an array of keys, navigate via those keys and return the
   * node final node that you arrive at.
   */
  getNode(tree,path) {
    var out = tree;
    path.forEach( function(key) { out = out.nodes[key]; } );
    return out;
  }; // getNode

  /* Build an array containing all of the sections and their leaves out of the
   * current data stored in the state object.
   *  [
   *    { label: [sectionlabel], leaves: [leaves] },
   *    ...
   *  ]
   */
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

  /* Checks if there are any leaves currently saved.
   */
  hasLeaves() {
    var leaves_found = false;
    this.joinSections().forEach( el => {
      if ( el.leaves.length > 0 ) leaves_found = true;
    });
    return leaves_found;
  }; // end hasLeaves

  /* Navigates the state of the component to the provided path. Deletes any
   * data from nodes not on the current path. If the new path has some default
   * values, makes sure those are saved to the data object.
   */
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

  /* Gives the navPane time to complete it's animation before calling the 
   * callback that would otherwise cut the animation short.
   */
  hideContentCallback( fnc, params ) {
    this.setState({ show_content: false });
    setTimeout( () => fnc(...params), 250 );
  }; // end hideContentCallback

  /* Used by callbacks using the hideContentCallback function that allows the
   * navPane to re-display itself once the callback has been completed.
   */
  showContent() {
    this.setState({ show_content: true });
  }; // end showContent

  /* Callback used by the nav pan when the user navigates. Modifies the path to
   * keep track of their location.
   */
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

  /* Decrement the path by one, going up one level.
   */
  goUp() {
    var new_path = [...this.state.path];
    new_path.pop();
    this.navigateTo( new_path );
  }; // end goUp

  /* Navigate back to the root of the UI tree for the current section.
   */
  handleBackBtn() {
    this.navigateTo( [] );
    this.showContent();
  }; // end handleBackBtn

  /* Navigate back to the section selection state.
   */
  handleHomeBtn() {
    this.navigateTo( [] );
    this.setState({ section: null });
  }; // end handleHomeBtn

  /* Hide the main content (so it transitions nicely later) and show the 
   * submit page.
   */
  handleSaveExitBtn() {
    this.setState({ show_content: false, show_submit_page: true });
  }; // end handleSaveExitBtn

  /* Set the current section to be the provided one.
   */
  handleSectionSelection( section_label ) {
    if ( section_label == "Specific Doors" ) {
      this.setState({ select_doors: true });
    } else {
      this.setState({ section: section_label });
    }
  }; // end handleSectionSelection

  /* Given a path to a leaf, locate it in the leaves array and remove it.
   */
  handleLeafDeletion(path) {
    var path_str = path.join('');
    var leaves = this.state.leaves;
    leaves = leaves.filter( leaf => leaf.path.join('') != path_str );
    this.setState({ leaves: leaves });
  }; // end handleLeafDeletion

  /* Takes data from the current state and submits it as a leaf.
   */
  submitCurrentLeaf() {
    var node = this.getNode(UI_MAP,this.state.path);
    this.submitLeaf({
      code: node.leafcode,
      data: Object.values( this.state.data ),
      path: this.state.path,
    });
  }; // end submitCurrentLeaf

  /* Expects a leaf provided in the form:
   *   { code: [string], data: [array], path: [array] }
   * Saves that leaf against the current section and then returns back a page.
   */
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

  /* Save the provided data against the current node.
   */
  saveData(data) {
    var new_data = this.state.data;
    new_data[ this.state.path.join(':') ] = data;
    this.setState({ data: new_data });
  }; // end saveData

  /* Call the server to obtain a list of parts, part-codes and descriptions.
   */
  getParts() {
    axios.get('/gettechparts').then( res => {
      this.setState({ parts: res.data });
    }, error => {
      console.log('Error Gathering Parts Data');
      console.log(error);
    });
  }; // end getParts

  /* This pop-up confirms that the user would like to submit the current leaf
   * to the current section.
   */
  renderLeafConfirmation() {
    var title = 'Would you like to submit the following leaf?';
    var message = ''
    var node = UI_MAP;
    var path_cumulative = [];
    // Build out the message with details from the path and data
    this.state.path.forEach( (el,ind) => {
      node = node.nodes[el];
      path_cumulative.push(el);
      if ( ind == 0 ) message += node.label;
      else if ( ind == 1 ) message += ' -> ' + node.label;
      else message += '- ' + node.label;
      if ( node.input || node.parts == true ) {
        message += ' ( ' + this.state.data[ path_cumulative.join(':') ] + ' )';
      }
      if ( ind != 0 ) message += '\n';
    });
    var node = this.getNode(UI_MAP,this.state.path);
    message += 'Final Code: ' + node.leafcode;
    // Only mount this component if the current node either doesn't need input
    // or has already gathered input
    var data = ( !node.input && node.parts != true ) 
      || this.state.data[ this.state.path.join(':') ];
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


  /* This pop-up requests that the user provide some additional information.
   * It will block all other input until the user enters something. Will only
   * display when the current node needs data and hasn't yet gathered it.
   */
  renderTextInputBox() {
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

  /* Titles change as the user navigates through the ui. This renders them
   * appropriately.
   */
  renderTitles() {
    var title = this.state.section || 'Select Section';
    var subtitle = this.state.path.length == 0 ?  '' :
      ' - ' + UI_MAP.nodes[ this.state.path[0] ].label;
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

  /* This is the first panel that is displayed to the user and allows them to
   * select a section to which notes are to be added.
   */
  renderSectionSelection() {
    var sections = this.joinSections().map( el => el.label );
    sections.push('Specific Doors');
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

  /* This is the main navigation panel in the center of the screen. Once the
   * user selects a section, this panel displays the tree of options so that
   * the user can navigate to a leaf. The first layer of options are printed
   * as mega-buttons, where-as the later layers are displayed in an accordion
   * menu. Callbacks that would navigate away from this menu or would change
   * it into a different form must be processed by the hideContentCallback
   * function so that transitions are animated properly.
   */
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

  /* This page is the final one that displays the generated work notes for the
   * user to review. They can edit the work notes here and copy them to the
   * clipboard. They are also provided the option to go back and continue
   * building the notes OR exit and start again fresh.
   */
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

  /* Pop-up that displays a list of doors by label (normally serial number or
   * location) for the user to search and select. Doors are passed to the app
   * via the url parameter ?doors=[comma separated list] . The user can also
   * add their own to the list of options.
   */
  renderDoorsPopup() {
    var url_params = new URLSearchParams(window.location.search);
    var doors = url_params.get('doors');
    if ( doors ) doors = doors.split(',');
    else doors = [];
    // NOTE: Selected doors are combined into a section label which is added
    // to the list of sections and then set as the current one.
    return (
      <DoorsPopup
        mounted={this.state.select_doors}
        title='Specific Doors:'
        options={doors}
        custom='true'
        onUnmount={() => this.setState({ select_doors: false })}
        onSubmit={(arr) => {
          this.setState({ select_doors: false, show_content: true });
          var section_label = arr.join('\n');
          var sections = this.state.sections;
          sections.push(section_label);
          this.setState({ sections: sections, section: section_label });
        }}
      />
    );
  }; // end renderDoorsPopup


  /* Pop-up that displays a list of parts for the user to search and select.
   * Parts and their codes are obtained from the server and saved to the state
   * object when the app first starts. The user can also add custom parts to
   * the end of the list if the one they are looking for cannot be found.
   */
  renderPartsPopup() {
    var node = this.getNode(UI_MAP,this.state.path);
    var data_gathered = this.state.data[ this.state.path.join(':') ];
    // Only display if current node needs parts and hasn't got any data saved
    var select_parts = node.parts == true && data_gathered == undefined;
    // Build parts labels
    var parts = [];
    if ( this.state.parts != null ) {
      for ( var key in this.state.parts ) {
        var part = this.state.parts[key];
        parts.push( part.type + ' : ' + part.code + ' : ' + part.desc );
      }
    }
    // NOTE: Selected parts are saved as data against the current path.
    return (
      <DoorsPopup
        mounted={select_parts}
        title='Which Parts?'
        options={parts}
        custom='true'
        onUnmount={() => this.goUp()}
        onSubmit={(arr) => {
          arr = arr.map( el => el.split(' : ') );
          arr = arr.map( el => el[2] + ' [' + el[1] + '] ' );
          var new_data = this.state.data;
          new_data[ this.state.path.join(':') ] = arr.join(', ');
          this.setState({ data: new_data });
        }}
      />
    );
  }; // end renderPartsPopup

  /* Page that allows the user to search for leaves by keyword. Results show
   * the user where to find the leaf in the future and also allows the user
   * to add the leaf to their notes directly from the search results.
   */
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

  /* Page that shows the user the leaves they have currently selected grouped
   * by section. The user can then delete these leaves as they need.
   */
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

  /* Welcome page to display cookie message and licensing details. Only
   * displayed on first visit, cookie then records user's selection.
   */
  renderWelcome() {
    return (
      <Welcome
        mounted={this.state.welcome}
        onSubmit={ () => {
          document.cookie = 'oldUser=true; expires=Fri, 31 Dec 9999 23:59:59 GMT';
          this.setState({ welcome: false });
        }}
      />
    );
  }; // end renderWelcome

  render() {
    if ( this.state.parts == null ) this.getParts();
    return (
      <div className='main-page'>

        {/* Main Title Block and Navigation Panes */}
        {this.renderTitles()}
        {this.renderNavPane()}
        {this.renderSectionSelection()}

        {/* Leaf Review Button */}
        <FancyButton
          className='menu-btn' icon='list' transition='growleft'
          onClick={ () => this.setState({ show_review: true }) }
          mounted='true'
        />
        {/* Search Button */}
        <FancyButton
          className='search-btn' icon='search' transition='growright'
          onClick={ () => this.setState({ show_search: true }) }
          mounted={this.state.section}
        />
        {/* Save & Exit Button - (view work notes) */}
        <FancyButton
          className='exit-btn' icon='save' transition='growright'
          onClick={this.handleSaveExitBtn}
          mounted={this.hasLeaves()}
        />
        {/* Back Button (go up) */}
        <FancyButton 
          className='back-btn' icon='arrow_back' transition='growleft'
          onClick={() => this.hideContentCallback(this.handleBackBtn,[])}
          mounted={this.state.path.length > 0}
        />
        {/* Home Button (return to section selection) */}
        <FancyButton 
          className='home-btn' icon='home' transition='growleft'
          onClick={() => this.hideContentCallback(this.handleHomeBtn,[])}
          mounted={this.state.section}
        />

        {/* Various Pop-ups and Pages */}
        {this.renderLeafConfirmation()}
        {this.renderTextInputBox()}
        {this.renderDoorsPopup()}
        {this.renderPartsPopup()}
        {this.renderSubmitPage()}
        {this.renderSearchPanel()}
        {this.renderLeafReview()}
        {this.renderWelcome()}

      </div>
    );
  }; // end render
}; // end MainPage

export default MainPage;
