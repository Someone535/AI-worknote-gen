/** doors-popup.js - A fancy button with an icon & animation
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

import css from '../css/doors-popup.css'

class DoorsPopup extends React.Component {

  constructor(props) {
    super(props);
    this.unMountStyle = this.unMountStyle.bind(this);
    this.mountStyle = this.mountStyle.bind(this);
    this.transitionEnd = this.transitionEnd.bind(this);

    var class_name = 'doors-popup-default';
    if ( this.props.direction ) class_name += '-' + this.props.direction;

    this.state = {
      show: this.props.mounted,
      style_class: class_name,
      options: this.props.options,
      selected: {}
    };
  }; // end constructor

  unMountStyle() {
    var class_name = 'doors-popup-unload';
    if ( this.props.direction ) class_name += '-' + this.props.direction;
    this.setState({ style_class: class_name });
  }; // end unMountStyle
  mountStyle() {
    var class_name = 'doors-popup-load';
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

  handleCheckbox(ind,key,evt) {
    if ( this.state.selected[ind] && !evt.target.checked ) {
      delete this.state.selected[ind];
    } else if ( !this.state.selected[ind] && evt.target.checked ) {
      this.state.selected[ind] = key;
    }
    console.log(this.state.selected);
  }; // end handleCheckbox

  renderOptions() {
    return this.state.options.map( (el,ind) => (
      <div key={el+ind} className='doors-popup-option'>
        <label className='doors-popup-label'>
          <input type='checkbox' className='doors-popup-checkbox' 
            onChange={(evt) => this.handleCheckbox(ind,el,evt)}
          />
          <span className='doors-popup-checkmark'></span>
          {el}
        </label>
      </div>
    ))
  }; // end renderOptions

  renderCustom() {
    return this.props.custom && (
      <div className='doors-popup-custom'>
        <label className='doors-popup-label'>
          <input type='checkbox' className='doors-popup-checkbox' />
          <span className='doors-popup-custom-checkmark'></span>
        </label>
        <input
          type='text'
          onKeyDown={ (evt) => {
            if ( evt.key == 'Enter' ) {
              var new_options = this.state.options;
              new_options.push( evt.target.value );
              this.setState({ options: new_options });
              evt.target.value = '';
            }
          }}
        />
      </div>
    );
  }; // end renderCustom

  render() {
    var class_name = 'doors-popup ' + this.state.style_class;
    return this.state.show && (
      <div className={class_name} onTransitionEnd={this.transitionEnd}>
        <h1 className='doors-popup-title'>{this.props.title}</h1>
        <div className='doors-popup-options'>
          {this.renderOptions()}
          {this.renderCustom()}
        </div>
        <i
          className='doors-popup-submit material-icons'
          onClick={ () => this.props.onSubmit( Object.values(this.state.selected) ) }
        >
          check
        </i>
      </div>
    );
  }; // end render

}; // end DoorsPopup

DoorsPopup.defaultProps = {
  onSubmit: () => 1,
  onUnmount: () => 1,
  title: '',
  options: [],
  custom: true,
};

export default DoorsPopup;
