import React from 'react';
import './CSS/OurFeatures.css';
import Card1 from './Features Cards/Card1.js';

function OurFeatures() {

  return (   
      <div className='OurFeatures'>
        <h2>Our Features.</h2>
        <p>We can become your construction partner and scale your business through our scalable and elastic model.</p>
        <Card1 />
      </div>
  );
}

export default OurFeatures;