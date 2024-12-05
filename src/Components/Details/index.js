

import React from 'react'; 

import map from "../../Assets/map.png"

import crossArrow from "../../Assets/cross-arrow.svg"

import "./index.css"


const Details = () =>{
  return (
    <div className="App">
      <div className="App-header">
        <div className='app-left-container'>
          <h1>Our Presence</h1>
          <p className='app-left-para'>We have our footprint throughout India and have work going on in the leading cities of India -</p>
          <ul>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Hyderabad</li>
            <li>Bengaluru</li>
            <li>Coimbatore</li>
            <li>Chennai</li>
          </ul>
          <div className="stats">
            <div className="stat">
              <h2 className='stat-head'>100000</h2>
              <div className='stat-cart'>
                <p className='stat-para'>SQFT. OF FACADE<br /> BUILT SO FAR</p>
                <img src={crossArrow} alt='arrow' />
              </div>
            </div>
            <div className="stat">
              <h2 className='stat-head'>6+</h2>
              <div className='stat-cart'>
              <p className='stat-para'>cities with <br />active projects</p>
              <img src={crossArrow} alt='arrow'/>
              </div>
            </div>
            <div className="stat">
              <h2 className='stat-head'>6+</h2>
              <div className='stat-cart'>
                <p className='stat-para'>cities with <br />active projects</p>
                <img src={crossArrow} alt='arrow' />
              </div>
              
            </div>
          </div>
        </div>
        <div className="map">
          <img src={map} alt="Map of India with project locations" />
        </div>
      </div>
      <p className='home-footer'>© SPACIO TECHTONICS | all rights reserved</p>
    </div>
  );

}

export default Details