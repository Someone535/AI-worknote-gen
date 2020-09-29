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

class SubmitPage extends React.Component {

  constructor(props) {
    super(props);
    this.unMountStyle = this.unMountStyle.bind(this);
    this.mountStyle = this.mountStyle.bind(this);
    this.transitionEnd = this.transitionEnd.bind(this);

    var class_name = 'submit-page-default';
    if ( this.props.direction ) class_name += '-' + this.props.direction;

    this.state = {
      show: this.props.mounted,
      style_class: class_name,
    };
  }; // end constructor

  unMountStyle() {
    var class_name = 'submit-page-unload';
    if ( this.props.direction ) class_name += '-' + this.props.direction;
    this.setState({ style_class: class_name });
  }; // end unMountStyle
  mountStyle() {
    var class_name = 'submit-page-load';
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
    var class_name = 'submit-page ' + this.state.style_class;
    if ( this.state.show ) {
      var output_tree = backend.buildOutputTree( this.props.leaves );
      var work_notes = backend.collapseOutputTree( output_tree );
    }
    return this.state.show && (
      <div className={class_name} onTransitionEnd={this.transitionEnd}>
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
      </div>
    );
  }; // end render

}; // end SubmitPage

SubmitPage.defaultProps = {
  leaves: [],
  unmount: () => 1,
};

export default SubmitPage;
