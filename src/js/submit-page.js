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

import css from '../css/submit-page.css';

import backend from './notes-gen.js';
import CopyToClipboard from 'react-copy-to-clipboard';
import TransitionContainer from './transition-container.js';

class SubmitPage extends React.Component {

  constructor(props) {
    super(props);
  }; // end constructor

  render() {
    var class_name = 'submit-page';
    if ( this.props.mounted ) {
      var work_notes = backend.processUIOutput( this.props.sections );
    }
    return (
      <TransitionContainer
        mounted={this.props.mounted}
        className={class_name}
        transition={this.props.transition}
      >
        <h1>Your Work Notes:</h1>
        <p>{work_notes}</p>
        <div className='submit-page-options'>
          <div className='submit-page-clear' onClick={this.props.onClear}>
            <i className='material-icons'>delete_forever</i>
          </div>
          <CopyToClipboard text={work_notes}>
            <div className='submit-page-copy'>
              <i className='material-icons'>save</i>
            </div>
          </CopyToClipboard>
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
