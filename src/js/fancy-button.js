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

import css from '../css/fancy-button.css'

class FancyButton extends React.Component {

  constructor(props) {
    super(props);
    this.unMountStyle = this.unMountStyle.bind(this);
    this.mountStyle = this.mountStyle.bind(this);
    this.transitionEnd = this.transitionEnd.bind(this);

    var class_name = 'fancy-btn-default';
    if ( this.props.direction ) class_name += '-' + this.props.direction;

    this.state = {
      show: this.props.mounted,
      style_class: class_name,
    };
  }; // end constructor

  unMountStyle() {
    var class_name = 'fancy-btn-unload';
    if ( this.props.direction ) class_name += '-' + this.props.direction;
    this.setState({ style_class: class_name });
  }; // end unMountStyle
  mountStyle() {
    var class_name = 'fancy-btn-load';
    if ( this.props.direction ) class_name += '-' + this.props.direction;
    this.setState({ style_class: class_name });
  }; // end unMountStyle
  
  componentDidUpdate(prevProps, prevState) {
    if ( this.props.mounted != prevProps.mounted ) {
      if ( !this.props.mounted ) {
        return this.unMountStyle();
      } else {
        this.setState({ show: true });
        setTimeout( this.mountStyle, 10 );
      }
    }
  }; // end componentDidUpdate
  
  componentDidMount() {
    setTimeout( this.mountStyle, 10 );
  }; // end componentDidMount
  
  transitionEnd() {
    if ( !this.props.mounted ) {
      this.setState({ show: false });
    }
  }; // end transitionEnd

  render() {
    var class_name = 'fancy-button ' + this.state.style_class;
    if ( this.props.className ) class_name += ' ' + this.props.className;
    return this.state.show && (
      <div className={class_name} onClick={this.props.onClick} onTransitionEnd={this.transitionEnd}>
        <i className="material-icons">{this.props.icon}</i>
        <span>{this.props.text}</span>
      </div>
    );
  }; // end render

}; // end FancyButton

FancyButton.defaultProps = {
  className: null,
  onClick: () => 1,
  icon: 'check_box_outline_blank',
  text: '',
  direction: null
};

export default FancyButton;
