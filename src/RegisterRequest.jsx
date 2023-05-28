import React, { useState, useEffect } from 'react';

const RegisterRequest = ({ json }) => {
    useEffect(() => {
      const registerUser = async () => {
        try {
          const response = await fetch('https://pandax.onrender.com/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(json)
          });
  
          const data = await response.json();
          console.log(data); // Print the response to the console
        } catch (error) {
          console.error('Error:', error);
          setIsUsedUserName(true);
        }
      };
  
      registerUser();
    }, [json]);

    return (
        <div></div>
    );
  };

  export default RegisterRequest;