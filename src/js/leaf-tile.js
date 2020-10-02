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
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      confirm_delete: false,
    };
  }; // end constructor

  handleDelete() {
    console.log('confirming delete');
    this.setState({ confirm_delete: true });
  }; // end handleDelete

  renderDeleteConfirm() {
    return (
      <TransationContainer
        className='leaf-tile-delete-confirm'
        transition='growright'
        mounted={this.state.confirm_delete}
      >
        <div className='delete-confirm-title'>Delete this leaf?</div>
        <div className='delete-confirm-options'>
          <i className='material-icons delete-confirm-no'
            onClick={() => this.setState({ confirm_delete: false })}
          >cancel</i>
          <i className='material-icons delete-confirm-yes'
            onClick={() => this.props.onDelete(this.props.path)}
          >delete</i>
        </div>
      </TransationContainer> 
    );
  }; // end renderDeleteConfirm

  renderBtns() {
    var btns = [];
    if ( this.props.onDelete ) btns.push(
      <i key='delete' className='material-icons delete' onClick={this.handleDelete}>delete</i>
    );
    if ( this.props.onFav ) btns.push(
      <i key='fav' className='material-icons fav' onClick={this.handleDelete}>star</i>
    );
    return btns;
  }; // end renderBtns

  render() {
    var leaftype = '';
    var leafpath = '';
    var node = this.props.tree;
    var path_cumulative = [];
    this.props.path.forEach( (el,ind) => {
      if ( ind > 1 ) leafpath += '\n';
      node = node.nodes[el];
      path_cumulative.push(el);
      if ( ind != 0 ) leafpath += '- ' + node.label;
      if ( ind == 0 ) leaftype = node.label;
      if ( node.input ) leafpath += '*';
    });
    var leafcode = node.leafcode;
    var leaftypestyle = 'leaf-style-'+leaftype.replace(/ /g,'');
    return (
      <TransationContainer
        mounted={this.props.mounted}
        className='leaf-tile'
        transition={this.props.transition}
      >
        <div className={'leaf-tile-titlebox '+leaftypestyle}>
          {this.renderDeleteConfirm()}
          <div className='leaf-tile-type'>{leaftype}</div>
          {this.renderBtns()}
        </div>
        <div 
          className='leaf-tile-details-container'
          onClick={() => this.props.onClick(this.props.path)}
        >
          <div className='leaf-path'>{leafpath}</div>
          <div className='leaf-code'>{leafcode}</div>
        </div>
      </TransationContainer>
    );
  }; // end render

}; // end LeafTile

LeafTile.defaultProps = {
  onClick: () => 1,
  onDelete: null,
  onFav: null,
  transition: null,
  path: [],
  tree: {},
};

export default LeafTile;
