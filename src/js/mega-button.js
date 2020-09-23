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

import css from '../css/mega-button.css'

class MegaButton extends React.Component {

  constructor(props) {
    super(props);
    this.unMountStyle = this.unMountStyle.bind(this);
    this.mountStyle = this.mountStyle.bind(this);
    this.transitionEnd = this.transitionEnd.bind(this);

    var class_name = 'mega-btn-default';
    if ( this.props.transition ) class_name += '-' + this.props.transition;

    this.state = {
      show: this.props.mounted,
      style_class: class_name,
    };
  }; // end constructor

  unMountStyle() {
    var class_name = 'mega-btn-unload';
    if ( this.props.transition ) class_name += '-' + this.props.transition;
    this.setState({ style_class: class_name });
  }; // end unMountStyle
  mountStyle() {
    var class_name = 'mega-btn-load';
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

  render() {
    var class_name = 'mega-button ' + this.state.style_class;
    var subtitles = [];
    this.props.subtitles.forEach( (el,ind) => {
      subtitles.push( 
        <div className='mega-button-subtitle' key={el+'-'+ind}>{el}</div>
      );
    });
    return this.state.show && (
      <div
        className={class_name} 
        onClick={this.props.onClick} 
        onTransitionEnd={this.transitionEnd}
      >
        <div className='mega-button-title'>{this.props.title}</div>
        <div className='mega-button-subcontainer'>
          {subtitles}
        </div>
      </div>
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
