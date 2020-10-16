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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectAll = this.handleSelectAll.bind(this);

    var option_status_map = this.props.options.map( (el,ind) => { 
      return { label: el, ind: ind, marked: false } ;
    });

    this.state = {
      options: option_status_map,
      alerting: false,
      search_text: '',
      select_all: true,
    };
  }; // end constructor

  /* If the provided list of options has changed, merge the new list in with
   * the existing list.
   */
  componentDidUpdate(prevProps, prevState) {
    if ( prevProps.options.join('') != this.props.options.join('') ) {
      // merge new props with current options array (adding new items)
      var new_options = this.state.options;
      this.props.options.forEach( el => {
        // if the current option cannot be found in the state
        if ( new_options.find( opt => opt.label == el ) == undefined ) {
          // add it in
          new_options.push({ label: el, ind: new_options.length, marked: false });
        }
      });
      this.setState({ options: new_options });
    }
  }; // end componentDidUpdate

  /* Mark all provided options as selected (only the provided options).
   */
  selectAll(opts) {
    if ( !opts ) opts = this.state.options;
    var options = this.state.options;
    opts.forEach( el => {
      options[el.ind].marked = true; 
    });
    this.setState({ options: options });
  }; // end selectAll

  /* When a checkbox is pressed, make sure the option is marked in the
   * component's state.
   */
  handleCheckbox(ind,evt) {
    var options = this.state.options;
    options[ind].marked = !options[ind].marked;
    this.setState({ options: options });
  }; // end handleCheckbox

  /* Unmark all options globally.
   */
  clearAll() {
    var options = this.state.options;
    options.forEach( el => el.marked = false );
    this.setState({ options: options });
  }; // end clearAll

  /* Gather an array of option labels that have been selected.
   */
  getMarked() {
    var marked = [];
    this.state.options.forEach( el => {
      if ( el.marked ) marked.push(el.label);
    });
    return marked;
  }; // end hasMarked

  /* If the submit button is pressed when there are options, submit all the
   * marked options and then reset the component. If there are no options
   * call the unmount callback.
   */
  handleSubmit() {
    var marked = this.getMarked();
    if ( marked.length > 0 ) {
      this.props.onSubmit( marked );
      this.clearAll();
    } else {
      this.props.onUnmount();
    }
    this.setState({ select_all: true, search_text: '' });
  }; // end handleSubmit

  /* The select all button alternates between select all and clear all.
   * If select all, it will select all visible options (not ones that are
   * hidden). If clear all, it will clear all option globally. After performing
   * it's action it alternates itself.
   */
  handleSelectAll() {
    if ( this.state.select_all ) {
      this.selectAll( this.searchOptions() );
    } else {
      this.clearAll();
    }
    this.setState({ select_all: !this.state.select_all });
  }; // end handleSelectAll

  /* Searches through the array of options looking for matches against the
   * search term entered. Spaces within the search term are converted to
   * non-greedy wild cards to increase usability.
   */
  searchOptions() {
    if ( this.state.search_text != '' ) {
      return this.state.options.filter( el => {
        var s_text = this.state.search_text.replace(/ /g,'.*?');
        return el.label.search( new RegExp( s_text, 'gi' ) ) != -1
      });
    } else {
      return this.state.options;
    }
  }; // end searchOptions

  /* Render the list of options with fancy checkboxes next to them.
   */
  renderOptions() {
    return this.searchOptions().map( (el) => (
      <div key={el.label+el.ind} className='doors-popup-option'>
        <label className='doors-popup-label'>
          <input
            type='checkbox'
            className='doors-popup-checkbox' 
            checked={this.state.options[el.ind].marked}
            onChange={(evt) => this.handleCheckbox(el.ind,evt)}
          />
          <span className='doors-popup-checkmark'></span>
          {el.label}
        </label>
      </div>
    ))
  }; // end renderOptions

  /* Render the input for the user to add additional options to the list. New
   * options are added by default selected. The enter key needs to be pressed
   * before the new option will be added.
   */
  renderCustom() {
    return this.props.custom && (
      <div className='doors-popup-custom'>
        <input
          type='text'
          placeholder='custom (type then hit enter)'
          onKeyDown={ (evt) => {
            if ( evt.key == 'Enter' ) {
              var new_options = this.state.options;
              new_options.push({
                label: evt.target.value,
                ind: this.state.options.length,
                marked: true 
              });
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
      {/*
        Blocker (above) - to block any other input from the user until input 
        has been gathered. If the user clicks outside of the doors pop-up, 
        the blocker sets the alerting state variable to trigger an animation.
      */}

        {/* Doors Pop-up Main Body */}
        <div
          className={class_name}
          onClick={ (evt) => {
            evt.stopPropagation();
            evt.nativeEvent.stopImmediatePropagation();
          }}
        >

          {/* Title */}
          <h1 className='doors-popup-title'>{this.props.title}</h1>

          {/* Search Box */}
          <div className='doors-popup-search-container'>
            <div className='doors-popup-search-label'>Filter/Search:</div>
            <input
              autoFocus
              type='text'
              className='doors-popup-search'
              placeholder='filter list here'
              onChange={(evt) => this.setState({ search_text: evt.target.value })}
            />
          </div>

          {/* Print Options & Custom Input */}
          <div className='doors-popup-options'>
            {this.renderOptions()}
            {this.renderCustom()}
          </div>

          {/* Buttons */}
          <div className='doors-popup-submit-container'>
            {/* Select All / Unselect All Button */}
            <label 
              onClick={this.handleSelectAll}
              className='doors-popup-btn'
            >
              <div className='doors-popup-btnlabel'>
                {this.state.select_all ? 'Select All' : 'Unselect All'}
              </div>
              <i className='doors-popup-submit material-icons'>
                select_all
              </i>
            </label>
            {/* Submit / Cancel Button */}
            <label
              onClick={this.handleSubmit}
              className='doors-popup-btn'
            >
              <div className='doors-popup-btnlabel'>
                {this.getMarked().length > 0 ? 'Submit' : 'Cancel'}
              </div>
              <i className='doors-popup-submit material-icons'>
                {this.getMarked().length > 0 ? 'check' : 'cancel'}
              </i>
            </label>
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
