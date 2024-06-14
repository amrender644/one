import React, { useRef } from 'react';
import './CSS/HorizontalScroll.css'; // Import the CSS file for styling
import './CSS/PackagesTitles.css';
import StandardPackagesCollapsableView from './PackagesCollections/StandardPackagesCollapsableView';
import PremiumPackagesCollapsableView from './PackagesCollections/PremiumPackagesCollapsableView';
import DeluxPackagesCollapsableView from './PackagesCollections/DeluxPackagesCollapsableView';
import LuxuryPackagesCollapsableView from './PackagesCollections/LuxuryPackagesCollapsableView';

const PackagesHorizontalScroll = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -window.innerWidth * 0.9, // Adjust the scroll distance for small devices
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: window.innerWidth * 0.9, // Adjust the scroll distance for small devices
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="horizontal-scroll-container">
      <div className="horizontal-scroll-wrapper" ref={scrollRef}>
        <button className="scroll-button left" onClick={scrollLeft}>{'<'}</button>
        <div className="horizontal-scroll-item" >
          <div className="customDiv">
            <h3>Standard</h3>
          </div>
          <div>
            <StandardPackagesCollapsableView />
          </div>
        </div>
        <div className="horizontal-scroll-item" >
          <div className="customDiv">
            <h3>Premium</h3>
          </div>
          <PremiumPackagesCollapsableView />
        </div>
        <div className="horizontal-scroll-item" >
          <div className="customDiv">
            <h3>Delux</h3>
          </div>
          <DeluxPackagesCollapsableView />
        </div>
        <div className="horizontal-scroll-item">
          <div className="customDiv">
            <h3>Luxury</h3>
          </div>
          <LuxuryPackagesCollapsableView />
        </div>
        <button className="scroll-button right" onClick={scrollRight}>{'>'}</button>
      </div>
      <div style={{ textAlign: 'end', marginRight: '15%', marginTop: '30px' }}>
          <p>*T&C Apply</p>
        </div>
    </div>
  );
};

export default PackagesHorizontalScroll;
