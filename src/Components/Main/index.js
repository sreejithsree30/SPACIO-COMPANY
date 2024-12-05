import React from 'react';
import './index.css';

import logo from "../../Assets/favicon.ico"
import instagram from "../../Assets/instagram.svg"
import youtube from "../../Assets/youtube.svg"
import linkedin from "../../Assets/linkedin.svg"

import crossArrow from "../../Assets/cross-arrow.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Main = () => {
  return (
    <div className="App1">
      <div className='navbar-app-container'>
        <div className='navbar-app-cart'>
          <img src={logo} alt='icon' />
          <p>SPACIO <br />TECHTONICS™</p>
        </div>
        <ul className='navbar-app-list'>
          <li>Projects</li>
          <li>services</li>
          <li>careers</li>
          <li>contact</li>
          <li><FontAwesomeIcon icon={faBars} /></li>
        </ul>
      </div>
      <div className='hero-container'>
        <div className="hero-cart-container">
          <h2>Innovate with us</h2>
          <p>contact@spaciotechtonics.info</p>
          <p>+91 94863 19871</p>
          <p>If you’re looking for a career with us <a href="#apply">click here</a> to apply</p>
        </div>
      </div>
      <div className='footer-cart-container'>
        <div className="social">
          <p>GET SOCIAL</p>
          <img src={instagram} alt='icon' />
          <img src={youtube} alt='icon' />
          <img src={linkedin} alt='icon' />
        </div>
        <div className="contact">
          <div className='contact-cart'>
            <h2>Keep in touch</h2>
            <p>to get updates and get contacted by us</p>
          </div>
          <form>
            <input type="email" className='contact-input' placeholder="EMAIL ADDRESS" />
            <button type="submit" className='contact-button'>SIGN UP <img src={crossArrow} alt='arrow' /></button>
          </form>
        </div>
      </div>
      <p className='home-footer'>© SPACIO TECHTONICS | all rights reserved</p>
    </div>
  );
}

export default Main;
