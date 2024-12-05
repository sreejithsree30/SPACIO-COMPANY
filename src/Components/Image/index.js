import React from 'react';
import './index.css';

function Image() {
  return (
    <div className="container">
      <div className="carousel">
        <div className="arrow left-arrow">{'<'}</div>
        <div className="image-container">
          {/* <img src="path-to-your-image.jpg" alt="Architectural Facade" className="image" /> */}
          <div className="text-overlay">
            <h1>Exceptional facades delivered</h1>
          </div>
        </div>
        <div className="arrow right-arrow">{'>'}</div>
      </div>
      <div className="footer1">
        <p>© SPACIO TECHTONICS | all rights reserved</p>
      </div>
    </div>
  );
}

export default Image;
