/** leaf-tile.js - A tile displaying information about a particular leaf
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

import TransationContainer from './transition-container.js';

import css from '../css/leaf-tile.css'

class LeafTile extends React.Component {

  constructor(props) {
    super(props);
  }; // end constructor

  render() {
    var leafpath = '';
    var node = this.props.tree;
    this.props.path.forEach( (el,ind) => {
      if ( ind != 0 ) leafpath += '\n';
      if ( ind != 0 ) leafpath += '- ';
      node = node.nodes[el];
      leafpath += node.label;
      if ( node.input ) leafpath += '*';
    });
    var leafcode = node.leafcode;
    return (
      <TransationContainer
        mounted={this.props.mounted}
        className='leaf-tile'
        onClick={() => this.props.onClick(this.props.path)}
        transition={this.props.transition}
      >
        <div className='leaf-path'>{leafpath}</div>
        <div className='leaf-code'>{leafcode}</div>
      </TransationContainer>
    );
  }; // end render

}; // end LeafTile

LeafTile.defaultProps = {
  onClick: () => 1,
  transition: null,
  path: [],
  tree: {},
};

export default LeafTile;
