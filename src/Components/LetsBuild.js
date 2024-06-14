import React from 'react';
import './CSS/LetsBuild.css';
import ContactUsForm from './ContactUsForm';
import PackagesHorizontalScroll from './PackagesHorizontalScroll.js';
import ContactUsPopupDialog from './ContactUsPopupDialog';
import HorizontalCrousal from './HorizontalCrousal.js';
import Card1 from './Features Cards/Card1.js';
import OurFeatures from './OurFeatures.js';

function LetsBuild() {

  return (
    <div className="Home">
      <div className="Hero">
        <div className="HeroContent">
          <h2>Creatinng Homes, Building Legacies</h2>
          <p>From Concept to Creation, We Build Your Ideal Home. Our Expert Team Ensures Quality Craftsmanship and Personalized Service Every Step of the Way.</p>
          <p>Lets Make Your Dream Home a Reality.</p>
        </div>
        <div className='ContactUsForm'>
          <ContactUsForm />
        </div>
      </div>
      <div className="Packages">
        <h2>Packages</h2>
        <PackagesHorizontalScroll />
        <div className='ContactUsPopupDialog'>
          <p>Do you have any construction requirements?</p>
          <ContactUsPopupDialog />
        </div>
      </div>
      {/* Our Features. */}      
      <div>
        <OurFeatures/>
      </div> 
      {/* How It Works */}
      <div className='HowItWorks'>
        <h2>How It Works</h2>
        <p>We can become your construction partner and scale your business through our scalable and elastic model.</p>
        <div className='HorizontalCrousal'>
          <HorizontalCrousal />
        </div>
        <div className='ContactUsPopupDialog'>
          <p>Do you have any construction requirements?</p>
          <ContactUsPopupDialog />
        </div>
      </div>
    </div>
  );
}

export default LetsBuild;