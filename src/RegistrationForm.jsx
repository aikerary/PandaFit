import React, { useState, useEffect } from 'react';
import './css/Form.css';

const RegistrationForm = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isGoodPassword, setIsGoodPassword] = useState(true);
  const [isGoodUserName, setIsGoodUserName] = useState(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    console.log('User Name:', userName);
    console.log('Password:', password);
    console.log('Repeat Password:', repeatPassword);
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

  useEffect(() => {
    if (repeatPassword.length === 0) {
      setIsPasswordMatch(true);
    }
    if (repeatPassword.length > 0 && repeatPassword === password) {
      setIsPasswordMatch(true);
    }
    if (repeatPassword.length > 0 && repeatPassword !== password) {
      setIsPasswordMatch(false);
    }
  }, [repeatPassword, password]);
  
  return (
    <form className="login" onSubmit={handleSubmit}>
      <div>
        <img src={require('./assets/pandaicon.svg').default} alt="panda" />
      </div>
      <h2>Create an Account</h2>
      <p>Join the Panda community today!</p>
      {/* If it's good password set a div that has the class error password with the class active */}
      <div className={`error-password ${!isGoodPassword ? 'on' : 'off'}`}>
        Password must be at least 8 characters
      </div>
      {/* Do the same but with error username */}
      <div className={`error-username ${!isGoodUserName ? 'on' : 'off'}`}>
        Username must be at least 5 characters
      </div>
      <div className={`error-password-match ${!isPasswordMatch ? 'on' : 'off'}`}>
        Passwords must match
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
