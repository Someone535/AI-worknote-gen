/** transition-container.js - A container that enables transition animation
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

import css from '../css/transition-container.css'

class TransitionContainer extends React.Component {

  constructor(props) {
    super(props);
    this.unMountStyle = this.unMountStyle.bind(this);
    this.mountStyle = this.mountStyle.bind(this);
    this.transitionEnd = this.transitionEnd.bind(this);

    var class_name = this.generateClass('default');

    this.state = {
      show: this.props.mounted,
      style_class: class_name,
    };
  }; // end constructor

  /* Creates the class for the transition container containing details about
   * the transition effect passed as a prop as well as the current state of the
   * container (loading, unloading, default) and adds on the additional
   * className provided in the props.
   */
  generateClass(suffix) {
    var class_name = 'transition-container transition-container-'+suffix;
    if ( this.props.transition ) class_name += '-' + this.props.transition;
    if ( this.props.className ) class_name += ' ' + this.props.className;
    return class_name;
  }; // end generateClass

  /* Switch component to the unloading state by applying the unload class
   */
  unMountStyle() {
    this.setState({ style_class: this.generateClass('unload') });
  }; // end unMountStyle

  /* Switch component to the loading state by applying the load class
   */
  mountStyle() {
    this.setState({ style_class: this.generateClass('load') });
  }; // end unMountStyle
  
  /* Checks for changes in the props to see if the parent has marked this item
   * to be unmounted or mounted.
   */
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
  
  /* Set the initial style when the component is first loaded.
   */
  componentDidMount() {
    if ( this.props.mounted ) {
      setTimeout( this.mountStyle, 10 );
    } else {
      this.unMountStyle();
    }
  }; // end componentDidMount
  
  /* Only when the transition effects are finished, mark the component to be
   * hidden and call the onUnmount callback if it has been provided;
   */
  transitionEnd() {
    if ( !this.props.mounted ) {
      this.setState({ show: false });
      if( this.props.onUnmount ) this.props.onUnmount();
    }
  }; // end transitionEnd

  /* Only render the component and it's children when the state.show value is
   * set to be true.
   */
  render() {
    return this.state.show && (
      <div 
        className={this.state.style_class}
        onClick={this.props.onClick}
        onTransitionEnd={this.transitionEnd}
      >
        {this.props.children}
      </div>
    );
  }; // end render
};

TransitionContainer.defaultProps = {
  transition: null,
  className: null,
  onClick: () => 1,
  onUnmount: null,
};

export default TransitionContainer;
