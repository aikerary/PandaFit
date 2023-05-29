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
  useEffect(() => {
    const getWeight = async () => {
      try {
        const response = await fetch(
          `https://pandax.onrender.com/weight/${userId}`
        );
        if (response.ok) {
          const result = await response.json();
          console.log(result);
          if (result.weight) {
            setWeight(result.weight);
          }
        } else {
          console.log("Error:", response.status);
        }
      } catch (error) {
        console.log("Error getting weight data:", error);
      }
    };
    getWeight();
  }, []);
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
        <h1>Welcome to your dashboard</h1>
        <form className="weightForm" onSubmit={handleSubmit}>
          <input
            min={0}
            type="number"
            id="weightInput"
            placeholder="Introduce your weight in kg"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <button className="weightButton" type="submit">Submit</button>
        </form>
        <hr></hr>
      </div>
    );
};

export default Dashboard;