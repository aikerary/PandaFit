import React, { useState } from 'react';
import './Form.css';

const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('User Name:', userName);
    console.log('Password:', password);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
    <div>
      <img src={require('./assets/pandaicon.svg').default} alt="panda"/>
    </div>
      <h2>Welcome, Panda!</h2>
      <p>It's time to fit in!</p>
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
      <input type="submit" value="Fit In" />
      <div className="links">
        <a href="#">Forgot password</a>
      </div>
    </form>
  );
};

export default LoginForm;

