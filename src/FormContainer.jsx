import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import MainSwitch from './MainSwitch';

const FormContainer = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [activeCase, setActiveCase] = useState('left');
  useEffect(() => {
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    // Add event listeners to the buttons
    left.addEventListener('click', () => {
        setShowLoginForm(true);
        setActiveCase('left');
        }
    );
    right.addEventListener('click', () => {
        setShowLoginForm(false);
        setActiveCase('right');
        }
    );
  }, [showLoginForm]);

  return (
    // Use main switch component here
    <div>
        <MainSwitch />
      {showLoginForm ? <LoginForm /> : <RegistrationForm />}
    </div>
  );
};

export default FormContainer;

