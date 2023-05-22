// Import MainSwitch css
import './MainSwitch.css';
import React, { useState } from 'react';

const MainSwitch = () => {
  const [activeCase, setActiveCase] = useState('left');

  const switchLeft = () => {
    setActiveCase('left');
  };

  const switchRight = () => {
    setActiveCase('right');
  };

  return (
    <div className={`switch-button switch-button-case-${activeCase}`}>
      <span className="switch" />
      <button className={`left ${activeCase === 'left' ? 'active' : ''}`} onClick={switchLeft}>
        Fit-In
      </button>
      <button className={`right ${activeCase === 'right' ? 'active' : ''}`} onClick={switchRight}>
        Register
      </button>
    </div>
  );
};

export default MainSwitch;



