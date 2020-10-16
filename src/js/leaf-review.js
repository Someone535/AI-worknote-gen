/** leaf-review.js - The page used to delete leaves from the current notes
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
import MegaButton from './mega-button.js';
import FancyButton from './fancy-button.js';

import css from '../css/leaf-review.css'

class LeafReview extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      section: null,
    };
  }; // end constructor

  /* Render a single section by printing all of it's leaves. Only prints if
   * the state.section variable is set.
   */
  renderSection() {
    var leaves = this.props.leaves.filter(
      leaf => leaf.section == this.state.section
    );
    return leaves.map( leaf => (
      <LeafTile
        key={leaf.path.join(':')}
        transition='growdown'
        path={leaf.path}
        tree={this.props.tree}
        onClick={()=>1}
        mounted={true}
        onDelete={this.props.onDelete}
      />
    ));
  }; // end renderSection

  /* Render a list of all available sections if no particular section has
   * yet been selected.
   */
  renderSections() {
    // Gather sections from props into an array of objects
    var sections = this.props.sections.map( label => {
      return { label: label, sublabels: [] };
    });
    this.props.leaves.forEach( leaf => {
      // Generate a label for each leaf
      var leaf_label = '';
      var node = this.props.tree;
      leaf.path.forEach( (key,ind) => {
        node = node.nodes[key];
        if ( ind != 0 ) leaf_label += ', ';
        leaf_label += node.label;
      });
      // Add the leaf to it's corresponding section tile
      sections.find( el => el.label == leaf.section )
              .sublabels.push( leaf_label );
    });
    return sections.map( (section) => (
      <MegaButton
        key={section.label}
        title={section.label}
        subtitles={section.sublabels}
        mounted={this.state.section == null}
        onClick={() => this.setState({ section: section.label })}
        transition='growdown'
      />
    ));
  }; // end renderSections

  render() {
    var class_name = 'leaf-review';
    return (
      <TransitionContainer
        mounted={this.props.mounted}
        className='leaf-review'
        transition='growleft'
      >
        {/* Title Bar */}
        <div className='review-title-container'>
          <div className='review-title'>Review Work Notes</div>
        </div>

        {/* Buttons */}
        <FancyButton
          className='menu-btn' icon='list' transition='growleft'
          onClick={() => {
            this.setState({ section: null });
            this.props.onUnmount();
          }}
          mounted='true'
        />
        <FancyButton 
          className='back-btn' icon='arrow_back' transition='growleft'
          onClick={() => this.setState({ section: null })}
          mounted={this.state.section != null}
        />

        {/* Main Display */}
        <div className='review-container'>
          {this.renderSection()}
          {this.renderSections()}
        </div>
      </TransitionContainer>
    );
  }; // end render

}; // end LeafReview

LeafReview.defaultProps = {
  onDelete: () => 1,
  onUnmount: () => 1,
  sections: [],
  leaves: [],
  tree: {},
};

export default LeafReview;
