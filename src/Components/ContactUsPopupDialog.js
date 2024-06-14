import React, { useState } from 'react';
import ContactUsForm from './ContactUsForm'; // Assuming ContactForm.js is in the same directory
import './CSS/ContactUsPopupDialog.css'; // Import the CSS file for styling

const ContactUsPopupDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Disable scrolling when dialog is open
  };

  const closeDialog = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // Enable scrolling when dialog is closed
  };

  return (
    <div className="popup-container">
      <button onClick={openDialog} className="open-btn">Book Free Consultation </button>
      {isOpen && (
        <div className="popup-overlay" onClick={closeDialog}>
          <div className="popup-dialog" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeDialog}>X</span>
            <ContactUsForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUsPopupDialog;
