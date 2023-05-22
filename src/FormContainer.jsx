import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const FormContainer = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  useEffect(() => {
    const switchButton = document.querySelector('.switch-button');

    const handleSwitchButtonClick = () => {
      setShowLoginForm(!showLoginForm);
    };

    switchButton.addEventListener('click', handleSwitchButtonClick);

    return () => {
      switchButton.removeEventListener('click', handleSwitchButtonClick);
    };
  }, [showLoginForm]);

  return (
    <div>
      {showLoginForm ? <LoginForm /> : <RegistrationForm />}
    </div>
  );
};

export default FormContainer;

