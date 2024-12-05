import React from 'react';
import './index.css';

import logo from "../../Assets/favicon.ico"

import phone from "../../Assets/phone.svg"

const Footer = () => {
  return (
    <div>
    <footer className="footer">
      <div className="footer-section">
        <div className="logo">
          <img src={logo} alt="SPACIO TECHTONICS Logo" />
          <p>SPACIO <br />TECHTONICS™</p>
        </div>
        <p className='footer-left-para'>© SPACIO TECHTONICS | all rights reserved</p>
      </div>
      <div className="footer-section">
        <div className="company-links">
          <p>Company Links</p>
          <ul className='company-links-cart'>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-conditions">Terms & Conditions</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-section">
        <div className="call-us">
          <p>CALL US</p>
          <img className='cell-icon' src={phone} alt="Phone Icon" />
        </div>
      </div>
    </footer>
    <div className="footer-bottom">
      <p>Terms & Support</p>
      <p>Designed with Canva</p>
    </div>
  </div>
  );
};

export default Footer;
