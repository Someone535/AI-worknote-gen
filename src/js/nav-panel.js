/** nav-panel.js - Main navigation panel, displays options to navigate ui tree
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

import css from '../css/nav-panel.css';

class NavPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleTilePress = this.handleTilePress.bind(this);
  }; // end constructor

  handleTilePress(evt) {
    this.props.onClick( evt.target.getAttribute('data-key') );
  };

  renderBlock(tree) {
    var out_jsx = [];
    for ( var key in tree.nodes ) {
      out_jsx.push(
        <div
          key={key}
          className='nav-panel-block'
          data-key={key}
          onClick={this.handleTilePress}
        >
          {tree.nodes[key].label}
        </div>
      );
    }
    return out_jsx;
  }; // end renderBlock

  renderMegaList(tree) {
    var out_jsx = [];
    for ( var key in tree.nodes ) {
      var sub_titles = [];
      for ( var sub_key in tree.nodes[key].nodes ) {
        sub_titles.push( 
          <div 
            className='nav-panel-megalist-subtitle'
            key={tree.nodes[key].nodes[sub_key].label}
          >
            {tree.nodes[key].nodes[sub_key].label}
          </div>
        );
      }
      out_jsx.push(
        <div
          className='nav-panel-megalist'
          key={tree.nodes[key].label}
          data-key={key}
          onClick={this.handleTilePress}
        >
          <div className='nav-panel-megalist-title'>
            {tree.nodes[key].label}
          </div>
          <div className='nav-panel-megalist-subcontainer'>
            {sub_titles}
          </div>
        </div>
      );
    };
    return out_jsx;
  }; // end renderMegaList

  renderAcordion(tree) {
    return this.renderMegaList(tree);
  }; // end renderAcordion

  render() {
    switch (this.props.style) {
      case 'block': 
        var options = this.renderBlock( this.props.option_tree ); break;
      case 'mega-list':
        var options = this.renderMegaList( this.props.option_tree ); break;
      case 'acordion':
        var options = this.renderAcordion( this.props.option_tree ); break;
    };
    return (
      <div className='nav-panel'>
        {options}
      </div>
    );
  }; // end render
}; // end NavPanel

NavPanel.defaultProps = {
  option_tree: {},
  style: 'block',
  onClick: () => 1
};

export default NavPanel;
