import React, { useState, useRef, useEffect } from 'react';
import './CSS/Collapsible.css'; // Assuming a separate CSS file for styling

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
    } else {
      contentRef.current.style.maxHeight = '0';
    }
  }, [isOpen]);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible-container">
      <div className="collapsible-header" onClick={toggleCollapsible}>
        <span className="collapsible-icon">{isOpen ? '-' : '+'}</span>
        <span className="collapsible-title">{title}</span>
      </div>
      <div
        className="collapsible-content"
        style={{
          maxHeight: isOpen ? contentRef.current.scrollHeight : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease, visibility 0.3s ease',
          padding: isOpen ? '16px' : '0',
          backgroundColor: isOpen ? '#fff' : 'transparent',
          border: isOpen ? '1px solid #e0e0e0' : 'none',
          borderRadius: '4px',
          boxShadow: isOpen ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
        }}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapsible;
