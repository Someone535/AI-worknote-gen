/** welcome.js - A component that displays the welcome message and cookie details
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
import Logo from '../images/AI_NEW_LOGO.jpg';

import css from '../css/welcome.css';

class Welcome extends React.Component {

  constructor(props) {
    super(props);
  }; // end constructor

  render() {

    var class_name = 'welcome';
    var message = 'We use cookies!';

    var licence_url = 'https://www.gnu.org/licenses/gpl-3.0.en.html';

    return (
      <TransitionContainer 
        mounted={this.props.mounted}
        className={class_name} 
        transition={this.props.transition}
      >
        {/* Headings */}
        <img className='welcome-logo' src={Logo}></img>
        <div className='welcome-title'>Work Note Generator</div>

        {/* Main Welcome Text */}
        <div className='welcome-message'>
          <p>Welcome!</p>
          <p>
            We use cookies around here, but only so we can remember not to 
            display this message to you more than once. If you would like to 
            disable this cookie, please do so through your browser settings.
          </p>
          <p>
            We also may save a copy of your work notes at the end for the 
            purpose of learning what solutions can be applied to which 
            problems/faults.  This will allow us to provide helpful hints to 
            future technicians. But be assured, we do not record any 
            identifying details about yourself or your device.
          </p>
        </div>
        {/* Continue Button */}
        <div className='welcome-options'>
          <div className='welcome-cancel welcome-opt' onClick={this.props.onSubmit}>
            <span>Continue</span>
            <i className='material-icons'>check</i>
          </div>
        </div>
        <div className='spacer'></div>

        {/* Licence Text */}
        <div className='welcome-licence'>
          <p>
            Copyright 2020 by Auto Ingress Pty Ltd<br />
            Released under the <a href={licence_url} target='_blank'>
            GNU General Public License</a>
          </p>
          <p>
            The Auto Ingress Work Note Generator is distributed in the hope 
            that it will be useful, but WITHOUT ANY WARRANTY; without even 
            the implied warranty of MERCHANTABILITY or FITNESS FOR A 
            PARTICULAR PURPOSE.  See the GNU General Public License for 
            more details.
          </p>
        </div>
      </TransitionContainer>
    );
  }; // end render

}; // end Welcome

Welcome.defaultProps = {
  onSubmit: () => 1,
  transition: 'growdown'
};

export default Welcome;
