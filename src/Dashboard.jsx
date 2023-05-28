import React, { useState, useEffect } from "react";
import "./css/Dashboard.css";

const Dashboard = (props) => {
    const userId = props.userId;
    const userName = props.userName;

    return (
        <div className="dashboard">
          <ul className="navbar">
          <li className="nav-item">
            <img src={require("./assets/pandaicon.svg").default} alt="panda" />
            </li>
            <li className="nav-item">
              <h1>Welcome, {userName}!</h1>
            </li>
          </ul>
        </div>
      );
};

export default Dashboard;