import React from 'react';
import './index.css';

const work = () => {
  return (
    <div className="carousel-container">
      <h2>Insights</h2>
      <div className="carousel">
        <button className="carousel-button left">{'<'}</button>
        <div className="carousel-card">
          <div className="linkedin-logo">
            in
          </div>
        </div>
        <div className="carousel-card">
          <div className="linkedin-logo">in</div>
        </div>
        <div className="carousel-card">
          <div className="linkedin-logo">in</div>
        </div>
        <button className="carousel-button right">{'>'}</button>
      </div>
      <div className='carousel-end'>
        <div className='carousel-end-cart'>
          <p className='carousel-end-cart-para'>Our director has recieved the ‘Top AEC Industry Voice’  on LinkedIN</p>
          <p className='carousel-end-cart-date'>2024-06-01</p>
        </div>
        <div className='carousel-end-cart1'>
          <p className='carousel-end-cart-para'>Our director has recieved the ‘Top AEC Industry Voice’  on LinkedIN</p>
          <p className='carousel-end-cart-date'>2024-06-01</p>
        </div>
        <div className='carousel-end-cart2'>
          <p className='carousel-end-cart-para'>Our director has recieved the ‘Top AEC Industry Voice’  on LinkedIN</p>
          <p className='carousel-end-cart-date'>2024-06-01</p>
        </div>
      </div>
      <p className='home-footer'>© SPACIO TECHTONICS | all rights reserved</p>
    </div>
  );
};

export default work;
