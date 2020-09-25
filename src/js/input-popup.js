/** input-popup.js - A component that pops out and gathers input from the user
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

import css from '../css/input-popup.css'

class InputPopup extends React.Component {

  constructor(props) {
    super(props);
    this.unMountStyle = this.unMountStyle.bind(this);
    this.mountStyle = this.mountStyle.bind(this);
    this.transitionEnd = this.transitionEnd.bind(this);
    this.updateText = this.updateText.bind(this);

    var class_name = 'input-popup-default';
    if ( this.props.transition ) class_name += '-' + this.props.transition;

    this.state = {
      show: this.props.mounted,
      style_class: class_name,
      text: ''
    };
  }; // end constructor

  unMountStyle() {
    var class_name = 'input-popup-unload';
    if ( this.props.transition ) class_name += '-' + this.props.transition;
    this.setState({ style_class: class_name });
  }; // end unMountStyle
  mountStyle() {
    var class_name = 'input-popup-load';
    if ( this.props.transition ) class_name += '-' + this.props.transition;
    this.setState({ style_class: class_name });
  }; // end unMountStyle
  
  componentWillReceiveProps(newProps) {
    if ( !newProps.mounted ) {
      return this.unMountStyle();
    } else {
      this.setState({ show: true });
      setTimeout( this.mountStyle, 10 );
    }
  }; // end componentWillReceiveProps
  
  componentDidMount() {
    setTimeout( this.mountStyle, 10 );
  }; // end componentDidMount
  
  transitionEnd() {
    if ( !this.props.mounted ) {
      this.setState({ show: false });
    }
  }; // end transitionEnd

  updateText(evt) {
    this.setState({ text: evt.target.value });
  }; // end updateText

  render() {
    var class_name = 'input-popup input-popup-' + this.props.type + ' ' + this.state.style_class;
    if ( this.props.className ) class_name += ' ' + this.props.className;
    return this.state.show && (
      <div className={class_name} onTransitionEnd={this.transitionEnd}>
        <div className='input-popup-message'>{this.props.message}</div>
        <div className='input-popup-options'>
          <input
            className='input-popup-textinput'
            type='text'
            placeholder={this.props.text_prompt}
            onChange={this.updateText}
          />
          <i
            className='material-icons'
            onClick={ () => this.props.onSubmit( this.state.text ) }
          >
            check
          </i>
        </div>
      </div>
    );
  }; // end render

}; // end InputPopup

InputPopup.defaultProps = {
  className: null,
  onSubmit: () => 1,
  message: '',
};

export default InputPopup;
