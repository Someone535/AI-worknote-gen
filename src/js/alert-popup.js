/** alert-popup.js - A component that pops out and gathers input from the user
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

import css from '../css/alert-popup.css'

class AlertPopup extends React.Component {

  constructor(props) {
    super(props);
    this.unMountStyle = this.unMountStyle.bind(this);
    this.mountStyle = this.mountStyle.bind(this);
    this.transitionEnd = this.transitionEnd.bind(this);

    var class_name = 'alert-popup-default';
    if ( this.props.transition ) class_name += '-' + this.props.transition;

    this.state = {
      show: this.props.mounted,
      style_class: class_name,
    };
  }; // end constructor

  unMountStyle() {
    var class_name = 'alert-popup-unload';
    if ( this.props.transition ) class_name += '-' + this.props.transition;
    this.setState({ style_class: class_name });
  }; // end unMountStyle
  mountStyle() {
    var class_name = 'alert-popup-load';
    if ( this.props.transition ) class_name += '-' + this.props.transition;
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
    var class_name = 'alert-popup alert-popup-' + this.props.type + ' ' + this.state.style_class;
    if ( this.props.className ) class_name += ' ' + this.props.className;
    return this.state.show && (
      <div className={class_name} onTransitionEnd={this.transitionEnd}>
        <div className='alert-popup-title'>{this.props.title}</div>
        <div className='alert-popup-message'>{this.props.message}</div>
        <div className='alert-popup-options'>
          <div className='alert-popup-cancel alert-popup-opt' onClick={this.props.onCancel}>
            <i className='material-icons'>cancel</i>
          </div>
          <div className='alert-popup-confirm alert-popup-opt' onClick={this.props.onSubmit}>
            <i className='material-icons'>check</i>
          </div>
        </div>
      </div>
    );
  }; // end render

}; // end AlertPopup

AlertPopup.defaultProps = {
  className: null,
  onSubmit: () => 1,
  onCancel: () => 1,
  title: '',
  message: '',
};

export default AlertPopup;
