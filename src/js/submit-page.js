/** submit-page.js - The page responsible for displaying the final work notes
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
import axios from 'axios';

import css from '../css/submit-page.css';

import backend from './notes-gen.js';
import CopyToClipboard from 'react-copy-to-clipboard';
import TransitionContainer from './transition-container.js';

class SubmitPage extends React.Component {

  constructor(props) {
    super(props);
    this.onTextChange = this.onTextChange.bind(this);
    this.handleCopy = this.handleCopy.bind(this);

    this.state = {
      text: this.buildNotes(),
      firstLoad: true,
    };
  }; // end constructor

  /* Convert a section to a string so that it can be compared with other
   * sections.
   */
  stringifySection(section) {
    return section.label + section.leaves.map( l => l.code + l.data.join('') )
                                         .join('');
  }; // end stringifySection

  /* If new notes have been added, rebuild the work notes overriding any
   * manual changes made by the user.
   */
  componentDidUpdate(prevProps, prevState) {
    var prev_sect = prevProps.sections
                              .map( sect => this.stringifySection(sect) )
                              .join('');
    var new_sect = this.props.sections
                              .map( sect => this.stringifySection(sect) )
                              .join('');
    if ( prev_sect != new_sect ) {
      this.setState({ text: this.buildNotes() });
    }
  }; // end componentDidUpdate

  /* Keeps the start variable for the work notes text box up to date.
   */
  onTextChange(evt) {
    this.setState({ text: evt.target.value });
  }; // end onTextChange

  /* Builds out the work notes after first re-ordering the sections to place
   * the first paragraph at the start and the last paragraph at the end.
   */
  buildNotes() {
    var new_sections = [ this.props.sections[0] ];
    if ( this.props.sections.length > 2 ) {
      new_sections.push( ...this.props.sections.slice(2) );
    }
    new_sections.push( this.props.sections[1] );
    return backend.processUIOutput( new_sections );
  }; // end buildNotes

  /* Callback to the server to provide a copy of the work notes for storage.
   * Not yet being used, but shortly in the future we will want to collect
   * statistics about the types of issues found and their resolutions.
   */
  handleCopy() {
    /*axios.post('/copytext', {
      full_notes: this.buildNotes(),
      real_notes: this.state.text
    });*/
  }; // end handleCopy

  render() {
    var class_name = 'submit-page';
    var work_notes = this.state.text;
    return (
      <TransitionContainer
        mounted={this.props.mounted}
        className={class_name}
        transition={this.props.transition}
      >
        {/* Title Block */}
        <h1>Your Work Notes:</h1>
        <p>(edit notes below)</p>

        {/* Work Notes (editable) */}
        <textarea onChange={this.onTextChange} value={work_notes} />

        {/* Buttons */}
        <div className='submit-page-options'>
          {/* Delete and Restart */}
          <div className='submit-page-clear' onClick={this.props.onClear}>
            <i className='material-icons'>delete_forever</i>
          </div>
          {/* Copy Notes to Clipboard */}
          <div onClick={this.handleCopy}>
            <CopyToClipboard text={work_notes}>
              <div className='submit-page-copy'>
                <i className='material-icons'>save</i>
              </div>
            </CopyToClipboard>
          </div>
          {/* Go Back and Continue Adding Notes */}
          <div className='submit-page-cancel' onClick={this.props.onUnmount}>
            <i className='material-icons'>arrow_back</i>
          </div>
        </div>
      </TransitionContainer>
    );
  }; // end render

}; // end SubmitPage

SubmitPage.defaultProps = {
  sections: [],
  unmount: () => 1,
  transition: 'growup',
};

export default SubmitPage;
