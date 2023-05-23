import React, { useState, useEffect } from 'react';
import './css/Form.css';

const LoginForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isGoodPassword, setIsGoodPassword] = useState(true);
  const [isGoodUserName, setIsGoodUserName] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('User Name:', userName);
    console.log('Password:', password);
  };

  useEffect(() => {
    if (password.length === 0) {
      setIsGoodPassword(true);
    }
    if (password.length>0 && password.length >= 8) {
      setIsGoodPassword(true);
    }
    if (password.length >0 && password.length < 8) {
      setIsGoodPassword(false);
    }
  }, [password]);

  // Do the same for userName
  useEffect(() => {
    if (userName.length === 0) {
      setIsGoodUserName(true);
    }
    if (userName.length>0 && userName.length >= 5) {
      setIsGoodUserName(true);
    }
    if (userName.length >0 && userName.length < 5) {
      setIsGoodUserName(false);
    }
  }, [userName]);

  return (
    <form className="login" onSubmit={handleSubmit}>
    <div>
      <img src={require('./assets/pandaicon.svg').default} alt="panda"/>
    </div>
      <h2>Welcome, Panda!</h2>
      <p>It's time to fit in!</p>
      {/* If it's good password set a div that has the class error password with the class active */}
      <div className={`error-password ${!isGoodPassword ? 'on' : 'off'}`}>
        Password must be at least 8 characters
      </div>
      {/* Do the same but with error username */}
      <div className={`error-username ${!isGoodUserName ? 'on' : 'off'}`}>
        Username must be at least 5 characters
      </div>
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

