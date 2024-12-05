import React from 'react';
import Navbar from '../Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import './index.css';

const Home = () => {
  return (
    <div className='home-main-container'>
      <Navbar />
      <div className="home-container">
        <div className="home-container-cart">
          <h3>
            Simplifying <span className="home-span-headone">facades</span> from
            <span className="home-span-headtwo"> conception to construction</span> using custom-programmed
            digital tools
          </h3>
          <button className="home-button">BOOK AN APPOINTMENT <FontAwesomeIcon icon={faArrowRight} /></button>
        </div>
      </div>
      <p className='home-footer'>© SPACIO TECHTONICS | all rights reserved</p>
    </div>
  );
};

export default Home;
