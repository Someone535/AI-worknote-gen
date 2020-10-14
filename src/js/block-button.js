/** block-button.js - A large block type button with animation
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

import css from '../css/block-button.css'

class BlockButton extends React.Component {

  constructor(props) {
    super(props);
  }; // end constructor

  renderText() {
    var lines = this.props.text.split('\n');
    if ( lines.length > 6 ) {
      lines = [ ...lines.slice(0,6), '(+'+(lines.length-6)+' more)' ];
    }
    return lines.map( (el,ind) => (
      <div id={ind+el} className='block-button-line'>{el}</div>
    ));
  }; // end renderText

  render() {
    var titles = this.props.text.split('\n');
    return (
      <TransitionContainer
        className='block-button'
        transition={this.props.transition}
        onClick={this.props.onClick}
        onUnmount={this.props.onUnmount}
        mounted={this.props.mounted}
      >
        {this.renderText()}
      </TransitionContainer>
    );
  }; // end render

}; // end BlockButton

BlockButton.defaultProps = {
  onClick: () => 1,
  text: '',
  transition: null
};

export default BlockButton;
