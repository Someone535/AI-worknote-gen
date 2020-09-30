/** mega-button.js - A large block type button with subtitles and animation
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

import css from '../css/mega-button.css'

class MegaButton extends React.Component {

  constructor(props) {
    super(props);
  }; // end constructor

  render() {
    var subtitles = [];
    this.props.subtitles.forEach( (el,ind) => {
      subtitles.push( 
        <div className='mega-button-subtitle' key={el+'-'+ind}>{el}</div>
      );
    });
    return (
      <TransitionContainer
        className='mega-button'
        mounted={this.props.mounted}
        onClick={this.props.onClick} 
        transition={this.props.transition}
      >
        <div className='mega-button-title'>{this.props.title}</div>
        <div className='mega-button-subcontainer'>{subtitles}</div>
      </TransitionContainer>
    );
  }; // end render

}; // end MegaButton

MegaButton.defaultProps = {
  onClick: () => 1,
  title: '',
  subtitle: [],
  transition: null
};

export default MegaButton;
