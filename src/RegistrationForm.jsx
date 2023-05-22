import React, { useState } from 'react';
import './css/Form.css';

const RegistrationForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    console.log('User Name:', userName);
    console.log('Password:', password);
    console.log('Repeat Password:', repeatPassword);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <div>
        <img src={require('./assets/pandaicon.svg').default} alt="panda" />
      </div>
      <h2>Create an Account</h2>
      <p>Join the Panda community today!</p>
      <input
        type="text"
        placeholder="User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Repeat Password"
        value={repeatPassword}
        onChange={(e) => setRepeatPassword(e.target.value)}
      />
      <input type="submit" value="Register" />
    </form>
  );
};

export default RegistrationForm;
