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

import BlockButton from './block-button.js';
import MegaButton from './mega-button.js';

class NavPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = { show_children: this.props.show_children };
  }; // end constructor

  renderBlock(tree) {
    var blocks = [];
    for ( var key in tree.nodes ) {
      blocks.push({ key: key, label: tree.nodes[key].label });
    }
    return blocks.map( (bl) => (
      <BlockButton
        key={bl.key}
        onClick={() => this.props.onClick(bl.key) }
        text={bl.label}
        mounted={this.props.show_children}
      />
    ));
  }; // end renderBlock

  renderMegaList(tree) {
    var btns = [];
    for ( var key in tree.nodes ) {
      var subtitles = [];
      for ( var subkey in tree.nodes[key].nodes ) {
        subtitles.push( tree.nodes[key].nodes[subkey].label );
      }
      btns.push({ key: key, label: tree.nodes[key].label, subtitles: subtitles });
    }
    return btns.map( (btn) => (
      <MegaButton
        key={btn.key}
        title={btn.label}
        subtitles={btn.subtitles}
        mounted={this.props.show_children}
        onClick={() => this.props.onClick(btn.key) }
      />
    ));
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
  onClick: () => 1,
  show_children: 'true'
};

export default NavPanel;
