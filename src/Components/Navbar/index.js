import React from 'react';
import './index.css'; 

import logo from '../../Assets/favicon.ico';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <h6 className="navbar-title">SPACIO TECHTONICS</h6>
      </div>
      <div className='navbar-left-cart'>
        <ul>
            <li>our work</li>
            <li>why us?</li>
            <li><button className='navbar-button'>BOOK AN APPOINTMENT</button></li>
            <li><FontAwesomeIcon icon={faBars} /></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
