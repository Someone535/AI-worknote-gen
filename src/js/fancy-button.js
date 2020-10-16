/** fance-button.js - A fancy button with an icon & animation
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

import css from '../css/fancy-button.css'

class FancyButton extends React.Component {

  constructor(props) {
    super(props);
  }; // end constructor

  render() {
    var class_name = 'fancy-button';
    if ( this.props.className ) class_name += ' ' + this.props.className;
    return (
      <TransitionContainer
        mounted={this.props.mounted}
        className={class_name}
        onClick={this.props.onClick}
        transition={this.props.transition}
      >
          {/* Icon */}
          <i className="material-icons">{this.props.icon}</i>
          {/* Label */}
          <span>{this.props.text}</span>
      </TransitionContainer>
    );
  }; // end render

}; // end FancyButton

FancyButton.defaultProps = {
  className: null,
  onClick: () => 1,
  icon: 'check_box_outline_blank',
  text: '',
  transition: null
};

export default FancyButton;
