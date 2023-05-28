import React, { useState, useEffect } from "react";
import "./css/Form.css";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isGoodPassword, setIsGoodPassword] = useState(true);
  const [isGoodUserName, setIsGoodUserName] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNotZeroLength = userName.length > 0 && password.length > 0;
    if (isGoodPassword && isGoodUserName && isNotZeroLength) {
      animation();
    }
  };


  const LoginJSON = {
    username: 'john.doe',
    password: 'secretpassword',
  };

  const loginJSON2 = {
    username: 'aiker',
    password: 'secretpassword',
  };

  const LoginRequest = ({ json }) => {
    useEffect(() => {
      const loginUser = async () => {
        try {
          const response = await fetch('https://pandax.onrender.com/login', {
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
        }
      };
  
      loginUser();
    }, [json]);
  };

  // LoginRequest({ json: LoginJSON });
  LoginRequest({ json: loginJSON2 });
  
  

  const animation = () => {
    // Get a class name named forms
    const forms = document.querySelector(".forms");
    // Get a class named panning
    const panning = document.querySelector(".panning");
    // Remove the class name named on from the forms
    forms.classList.remove("on");
    // Add a class name named off to the forms
    forms.classList.add("off");
    // Remove the class name named off from the panning
    panning.classList.remove("off");
    // Add a class name named on to the panning
    panning.classList.add("on");
  };

  useEffect(() => {
    if (password.length === 0) {
      setIsGoodPassword(true);
    }
    if (password.length > 0 && password.length >= 8) {
      setIsGoodPassword(true);
    }
    if (password.length > 0 && password.length < 8) {
      setIsGoodPassword(false);
    }
  }, [password]);

  // Do the same for userName
  useEffect(() => {
    if (userName.length === 0) {
      setIsGoodUserName(true);
    }
    if (userName.length > 0 && userName.length >= 5) {
      setIsGoodUserName(true);
    }
    if (userName.length > 0 && userName.length < 5) {
      setIsGoodUserName(false);
    }
  }, [userName]);

  return (
    <form className="login" onSubmit={handleSubmit}>
      <div>
        <img src={require("./assets/pandaicon.svg").default} alt="panda" />
      </div>
      <h2>Welcome, Panda!</h2>
      <p>It's time to fit in!</p>
      {/* If it's good password set a div that has the class error password with the class active */}
      <div className={`error-password ${!isGoodPassword ? "on" : "off"}`}>
        Password must be at least 8 characters
      </div>
      {/* Do the same but with error username */}
      <div className={`error-username ${!isGoodUserName ? "on" : "off"}`}>
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
