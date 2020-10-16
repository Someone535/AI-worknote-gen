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

import TransitionContainer from './transition-container.js';

import css from '../css/input-popup.css';

class InputPopup extends React.Component {

  constructor(props) {
    super(props);
    this.updateText = this.updateText.bind(this);
    this.alertTransitionEnd = this.alertTransitionEnd.bind(this);

    this.textInput = React.createRef();

    this.state = {
      text: '',
      alerting: false
    };
  }; // end constructor

  /* Keep state up-to-date with the text input.
   */
  updateText(evt) {
    this.setState({ text: evt.target.value });
  }; // end updateText

  /* Reset the alerting class by updating the state when the alert transition
   * ends.
   */
  alertTransitionEnd(evt) {
    this.setState({ alerting: false });
  }; // end alertTransitionEnd

  render() {
    var class_name = 'input-popup';
    if ( this.props.className ) class_name += ' ' + this.props.className;
    if ( this.state.alerting ) class_name += ' icon-alert';
    return (
      <TransitionContainer
        mounted={this.props.mounted}
        transition={this.props.transition}
        className='input-popup-blocker'
        onClick={(evt) => {
          this.textInput.current.focus();
          this.setState({ alerting: true });
        }}
      >
      {/*
        Blocker (above) - to block any other input from the user until input 
        has been gathered. If the user clicks outside of the text input pop-up, 
        the blocker sets the alerting state variable to trigger an animation.
      */}

        {/* Input Pop-up Main Body */}
        <div
          className={class_name}
          onClick={ (evt) => {
            /* Required to stop the alert animation when the input pop-up is
             * pressed. */
            evt.stopPropagation();
            evt.nativeEvent.stopImmediatePropagation();
          }}
        >
          <div className='input-popup-message'>{this.props.message}</div>
          <div className='input-popup-options'>
            {/* Text Input - (focused by default, enter key submits) */}
            <input
              autoFocus
              ref={this.textInput}
              className='input-popup-textinput'
              type='text'
              placeholder={this.props.text_prompt}
              onChange={this.updateText}
              onKeyDown={ (evt) => {
                if ( evt.key == 'Enter' ) this.props.onSubmit( this.state.text );
              }}
            />
            {/* Submit Button */}
            <i
              className={ this.state.alerting ? 
                'material-icons icon-alert' :
                'material-icons'
              }
              onClick={ (evt) => this.props.onSubmit( this.state.text ) }
              onTransitionEnd={this.alertTransitionEnd}
            >
              check
            </i>
          </div>
        </div>
      </TransitionContainer>
    );
  }; // end render

}; // end InputPopup

InputPopup.defaultProps = {
  className: null,
  onSubmit: () => 1,
  message: '',
  transition: 'growright'
};

export default InputPopup;
