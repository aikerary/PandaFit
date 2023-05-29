import React, { useState, useEffect } from "react";
import "./css/Dashboard.css";

const Dashboard = (props) => {
  const userId = props.userId;
  const userName = props.userName;
  const [weight, setWeight] = useState(""); // Agrega el estado "weight" y su función de actualización

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que se recargue la página al enviar el formulario
    if (!weight) return; // Si el peso está vacío, no hace nada
    try {
      const data = {
        user_id: userId,
        weight: parseFloat(weight), // Convierte el peso a un número de punto flotante
      };

      const response = await fetch("https://pandax.onrender.com/weight", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result); // Muestra la respuesta del servidor
        // Actualiza el estado "weight" con el nuevo valor ingresado
        setWeight("");
      } else {
        console.log("Error:", response.status);
      }
    } catch (error) {
      console.log("Error inserting weight data:", error);
    }
  };
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
        <hr></hr>
        <form className="weightForm" onSubmit={handleSubmit}>
          <label htmlFor="weightInput">Weight:</label>
          <input
            type="number"
            id="weightInput"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
};

export default Dashboard;