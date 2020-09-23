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

import UI_MAP from './ui-tree.js';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.navClick = this.navClick.bind(this);
    this.handleBackBtn = this.handleBackBtn.bind(this);
    this.showContent = this.showContent.bind(this);
    this.hideContentCallback = this.hideContentCallback.bind(this);

    this.state = { path: [], data: {}, leaves: [], show_content: true };
  }; // end constructor

  getNode(tree,path) {
    var out = tree;
    path.forEach( function(key) { out = out.nodes[key]; } );
    return out;
  }; // getNode

  hideContentCallback( fnc, params ) {
    this.setState({ show_content: false });
    setTimeout( () => fnc(params), 250 );
  }; // end hideContentCallback
  showContent() {
    this.setState({ show_content: true });
  }; // end showContent

  navClick(new_key) {
    var new_path = this.state.path;
    new_path.push(new_key);
    this.setState({ path: new_path });
    this.showContent();
  }; // end navClick

  handleBackBtn() {
    var new_path = this.state.path;
    new_path.pop();
    this.setState({ path: new_path });
    this.showContent();
  }; // end handleBackBtn

  render() {
    var curr_node = this.getNode(UI_MAP,this.state.path);
    var section_label = this.state.path.length > 0 ? 
      this.getNode(UI_MAP,this.state.path.slice(0,1)).label : '';
    var type_label = this.state.path.length > 1 ?
      this.getNode(UI_MAP,this.state.path.slice(0,2)).label : '';
    var title = 'Select Section';
    var subtitle = '';
    var nav_panel_style = 'block';
    if ( this.state.path.length > 0 ) {
      title = 'Select Note Type';
      subtitle = curr_node.label;
      nav_panel_style = 'mega-list';
    }
    if ( this.state.path.length > 1 ) {
      title = 'Build Note';
      subtitle = section_label + ' - ' + type_label;
      nav_panel_style = 'accordion';
    }
    return (
      <div className='main-page'>
        <h1 className='main-title'>{title}</h1>
        <h2 className='sub-title'>{subtitle}</h2>
        <NavPanel
          style={nav_panel_style}
          option_tree={curr_node}
          onClick={(key) => this.hideContentCallback(this.navClick,[key])} 
          show_children={this.state.show_content}
        />
        <FancyButton className='menu-btn' icon='list' direction='left' mounted='true' />
        <FancyButton className='search-btn' icon='search' direction='right' mounted='true' />
        <FancyButton className='exit-btn' icon='save' direction='right' mounted={this.state.leaves.length > 0} />
        <FancyButton 
          className='back-btn' icon='arrow_back' direction='left'
          onClick={() => this.hideContentCallback(this.handleBackBtn,[])}
          mounted={this.state.path.length > 0}
        />
      </div>
    );
  }; // end render
}; // end MainPage

export default MainPage;
