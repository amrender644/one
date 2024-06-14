import React from 'react';
// import ContactForm from './ContactForm';
import './CSS/Home.css';
import ContactUsForm from './ContactUsForm';
import OurFeatures from './OurFeatures.js';

function Home() {
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
      <div>
        <OurFeatures/>
      </div> 
      {/* <div className="Services">
        <h2>Our Services</h2>
        <p>Services tagline --hint</p>
      </div>
      <div className="Services">
        <h2>Our Services</h2>
        <p>Services tagline --hint</p>
      </div> */}
    </div>
  );
}

export default Home;