/** search-panel.js - A panel that allows the user to search for leaves
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

import TransitionContainer from './transition-container.js';
import LeafTile from './leaf-tile.js';
import InputPopup from './input-popup.js';
import FancyButton from './fancy-button.js';

import css from '../css/search-panel.css'

class SearchPanel extends React.Component {

  constructor(props) {
    super(props);
    this.needsData = this.needsData.bind(this);
    this.gatherData = this.gatherData.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.submitLeaf = this.submitLeaf.bind(this);

    this.state = {
      text: '',
      data: {},
      node_to_gather: null,
      leaf_to_submit: null,
    };
  }; // end constructor

  needsData() {
    // find all nodes/keys that need input
    var input_nodes = [];
    var path_cumulative = [];
    var node = this.props.tree;
    this.state.leaf_to_submit.forEach( el => {
      path_cumulative.push(el);
      node = node.nodes[el];
      if ( node.value || node.input ) input_nodes.push([...path_cumulative]);
    });
    // check that each is present in the data state
    var needs_data = false;
    input_nodes.forEach( el => {
      if ( this.state.data[el.join(':')] == undefined ) needs_data = true;
    });
    return needs_data;
  }; // end needsData

  submitLeaf(path) {
    this.setState({ leaf_to_submit: path }, this.gatherData );
  }; // end submitLeaf

  gatherData() {
    if ( this.needsData() ) {
      // check along path to locate missing data
      var data = this.state.data;
      var path_cumulative = [];
      var node = this.props.tree;
      this.state.leaf_to_submit.forEach( el => {
        path_cumulative.push(el);
        node = node.nodes[el]; 
        if ( this.state.data[ path_cumulative.join(':') ] == undefined ) {
          // set data for the missing node, or set it to be gathered
          if ( node.value ) data[ path_cumulative.join(':') ] = node.value;
          if ( node.input ) this.setState({ node_to_gather: [...path_cumulative] });
        }
        this.setState({ data: data });
      });
    } else { // if no data missing, submit leaf
      var node = this.props.tree;
      this.state.leaf_to_submit.forEach( el => node = node.nodes[el] );
      this.props.onSubmit({
        code: node.leafcode,
        data: Object.values( this.state.data ),
        path: this.state.leaf_to_submit,
      });
      this.setState({ node_to_gather: null, leaf_to_submit: null });
    }
  }; // end gatherData

  handleInputSubmit(data) {
    // save new data record
    var new_data = this.state.data;
    new_data[ this.state.node_to_gather.join(':') ] = data;
    this.setState({ data: new_data, node_to_gather: null });
    // continue gathering data
    this.gatherData(this.state.leaf_to_submit);
  }; // end handleInputSubmit

  renderInputPopup() {
    var node = this.props.tree;
    if ( this.state.node_to_gather )
    this.state.node_to_gather.forEach( el => node = node.nodes[el] );
    return (
      <InputPopup
        className='leaf-input-alert'
        message={node.input_message}
        text_prompt={node.input_placeholder}
        transition='growright'
        mounted={this.state.node_to_gather}
        onSubmit={this.handleInputSubmit}
      />
    );
  }; // end renderInputPopup

  locateMatches(search_term) {
    search_term = search_term.replace(/ /g,'.*?');
    if ( search_term != '' ) {
      return [
        ...this._checkNode( this.props.tree, [], new RegExp(search_term,'gi'), '' )
      ]
    } else return [];
  }; // end locateMatches

  _checkNode(node,path,reg,parent_match) {
    var matches = [];
    var p_match = parent_match + node.label;
    if ( node.leafcode && p_match.search(reg) != -1 ) {
      matches.push(path);
    }
    for ( var key in node.nodes ) {
      matches = [
        ...matches,
        ...this._checkNode( node.nodes[key], [...path,key], reg, p_match)
      ];
    }
    return matches;
  }; // end _checkNode

  renderResults() {
    var results = this.locateMatches( this.state.text );
    return results.map( el => (
      <LeafTile
        key={el.join(':')}
        transition='heightgrowdown'
        path={el}
        tree={this.props.tree}
        onClick={this.submitLeaf}
        mounted={true}
      />
    ));
  }; // end renderResults

  render() {
    return (
      <TransitionContainer
        mounted={this.props.mounted}
        className='search-panel'
        transition={this.props.transition}
      >
        <div className='search-title-container'>
          <input
            autoFocus
            className='search-input'
            type='text'
            placeholder='type here'
            onChange={ (evt) => this.setState({ text: evt.target.value }) }
          />
        </div>
        <div className='search-results-container'>
          <div className='search-results'>
            {this.renderResults()}
          </div>
        </div>
        {this.renderInputPopup()}
        <FancyButton
          className='search-btn' icon='search' transition='growright'
          mounted={true}
        />
        <FancyButton 
          className='back-btn' icon='arrow_back' transition='growleft'
          onClick={this.props.onCancel}
          mounted={true}
        />
      </TransitionContainer>
    );
  }; // end render

}; // end SearchPanel

SearchPanel.defaultProps = {
  onSubmit: () => 1,
  onCancel: () => 1,
  transition: null,
  tree: {},
};

export default SearchPanel;
