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

import TransitionContainer from './transition-container.js';

import css from '../css/doors-popup.css'

class DoorsPopup extends React.Component {

  constructor(props) {
    super(props);
    this.searchOptions = this.searchOptions.bind(this);

    this.state = {
      options: this.props.options,
      selected: {},
      alerting: false,
      search_text: ''
    };
  }; // end constructor

  handleCheckbox(ind,key,evt) {
    if ( this.state.selected[ind] && !evt.target.checked ) {
      delete this.state.selected[ind];
    } else if ( !this.state.selected[ind] && evt.target.checked ) {
      this.state.selected[ind] = key;
    }
    console.log(this.state.selected);
  }; // end handleCheckbox

  searchOptions() {
    if ( this.state.search_text != '' ) {
      return this.props.options.filter( el => 
        el.search( new RegExp( this.state.search_text, 'gi' ) ) != -1
      );
    } else {
      return this.props.options;
    }
  }; // end searchOptions

  renderOptions() {
    return this.searchOptions().map( (el,ind) => (
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
    var class_name = 'doors-popup';
    if ( this.state.alerting ) class_name += ' doors-popup-alerting';
    return (
      <TransitionContainer
        mounted={this.props.mounted}
        transition='growright'
        className='doors-popup-blocker'
        onClick={ (evt) => this.setState({ alerting: true }) }
      >
        <div
          className={class_name}
          onClick={ (evt) => {
            evt.stopPropagation();
            evt.nativeEvent.stopImmediatePropagation();
          }}
        >
          <h1 className='doors-popup-title'>{this.props.title}</h1>
          <input
            type='text'
            className='doors-popup-search'
            onChange={(evt) => this.setState({ search_text: evt.target.value })}
          />
          <div className='doors-popup-options'>
            {this.renderOptions()}
            {this.renderCustom()}
          </div>
          <div className='doors-popup-submit-container'>
            <div className='doors-popup-btn'>
              <div className='doors-popup-btnlabel'>Select All</div>
              <i
                className='doors-popup-submit material-icons'
                onClick={() => 1}
              >
                select_all
              </i>
            </div>
            <div className='doors-popup-btn'>
              <div className='doors-popup-btnlabel'>Submit</div>
              <i
                className='doors-popup-submit material-icons'
                onClick={() => {
                  if ( Object.keys(this.state.selected).length > 0 ) {
                    this.props.onSubmit( Object.values(this.state.selected) );
                    this.setState({ selected: {}, search_text: '' });
                  } else {
                    this.setState({ search_text: '' });
                    this.props.onUnmount();
                  }
                }}
              >
                check
              </i>
            </div>
          </div>
        </div>
      </TransitionContainer>
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
