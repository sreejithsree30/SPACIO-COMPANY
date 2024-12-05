import React from 'react';
import './index.css';

import marble from "../../Assets/marble.png"
import image from '../../Assets/image1.png';

const LatestWork = () => {
  return (
    <div className="latest-work">
      <div className='latest-head-cart'>
        <h2>Latest Work</h2>
        <div className="view-all">
          <a href="/view-all">VIEW ALL</a>
        </div>
      </div>
      <div className="work-gallery">
        <div className="work-item">
          <img className='marble' src={marble} alt="Marbled, Delhi" />
          <p>MARBLED, DELHI</p>
        </div>
        <div className="work-item">
          <img className='hospice' src={image} alt="Hospice, Coimbatore" />
          <p>HOSPICE, COIMBATORE</p>
        </div>
      </div>
      <footer>
        <p>© SPACIO TECHTONICS | all rights reserved</p>
      </footer>
    </div>
  );
};

export default LatestWork;