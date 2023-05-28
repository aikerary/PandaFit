import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import "./css/Form.css";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isGoodPassword, setIsGoodPassword] = useState(true);
  const [isGoodUserName, setIsGoodUserName] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNotZeroLength = userName.length > 0 && password.length > 0;
    if (isGoodPassword && isGoodUserName && isNotZeroLength) {
      const loginJSON = {
        username: userName,
        password: password,
      };

      const LoginRequest = async () => {
        try {
          const response = await fetch("https://pandax.onrender.com/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loginJSON),
          });

          const data = await response.json();
          console.log(data); // Imprimir la respuesta en la consola
          // Manejar la respuesta exitosa aquí
          // If the response have the property error
          // Get the userId from the response
          setUserId(data.userid);
          if (!data.hasOwnProperty("error")) {
            animation();
            setIsLogged(true);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      }
      LoginRequest();
    }
  };
  
  const animation = () => {
    // Get a class name named forms
    const forms = document.querySelector(".forms");
    // Remove the class name named on from the forms
    forms.classList.remove("on");
    // Add a class name named off to the forms
    forms.classList.add("off");
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

  useEffect(() => {
    if (isLogged) {
      console.log("Logged");
      const button= document.querySelector(".switch-button");
      button.classList.remove("on");
      button.classList.add("off");
    }
  }, [isLogged]);

  if (isLogged) {
    return <Dashboard userId={userId} userName={userName} />;
  }


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
