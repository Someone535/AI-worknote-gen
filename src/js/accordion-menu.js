/** accordion-menu.js - An accordion type menu with animation in and out
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

import css from '../css/accordion-menu.css'

class AccordionMenu extends React.Component {

  constructor(props) {
    super(props);
    this.unMountStyle = this.unMountStyle.bind(this);
    this.mountStyle = this.mountStyle.bind(this);
    this.transitionEnd = this.transitionEnd.bind(this);

    var class_name = 'accordion-menu-default';
    if ( this.props.transition ) class_name += '-' + this.props.transition;

    this.state = {
      show: this.props.mounted,
      style_class: class_name,
      expanded_child: null,
    };
  }; // end constructor

  unMountStyle() {
    var class_name = 'accordion-menu-unload';
    if ( this.props.transition ) class_name += '-' + this.props.transition;
    this.setState({ style_class: class_name });
  }; // end unMountStyle
  mountStyle() {
    var class_name = 'accordion-menu-load';
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

  getNode(tree,path) {
    var out = tree;
    path.forEach( el => out = out.nodes[el] );
    return out;
  }; // end getNode

  expandChild(key) {
    if ( this.state.expanded_child == key )
      this.setState({ expanded_child: null });
    else
      this.setState({ expanded_child: key });
  }; // end expandChild

  render() {
    var class_name = 'accordion-menu ' + this.state.style_class;
    class_name += ' depth'+this.props.depth;
    if ( this.props.expanded ) class_name += ' accordion-menu-expanded';
    var node = this.getNode(this.props.tree,this.props.path);
    var children = node.nodes && Object.keys( node.nodes ).map( (key) => (
        <AccordionMenu
          key={key}
          tree={this.props.tree}
          expanded={key == this.state.expanded_child}
          mounted={this.props.expanded}
          onClick={this.props.onClick} 
          path={[ ...this.props.path, key ]}
          expandChild={ () => this.expandChild(key) }
          depth={Number(this.props.depth)+1}
        />
    ));
    var title = this.props.path.length > 0 && (
      <div
        className={'accordion-title'+(!node.nodes ? ' accordion-leaf' : '')}
        onClick={() => {
          this.props.onClick( this.props.path );
          this.props.expandChild();
        }}
      >{node.label}</div>
    );
    return this.state.show && (
      <div
        className={class_name} 
        data-path={this.props.path}
        onTransitionEnd={this.transitionEnd}
      >
        {title}
        {children}
      </div>
    );
  }; // end render

}; // end AccordionMenu

AccordionMenu.defaultProps = {
  onClick: () => 1,
  expandChild: () => 1,
  tree: {},
  transition: null,
  mounted: true,
  expanded_child: null,
  expanded: false,
  path: [],
  depth: 0,
};

export default AccordionMenu;
