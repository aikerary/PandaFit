import React, { useState, useEffect } from "react";
import "./css/Dashboard.css";
import Chart from './Chart';

const Dashboard = (props) => {
  const userId = props.userId;
  const userName = props.userName;
  const [weight, setWeight] = useState("");
  const [weightData, setWeightData] = useState([]);
  const [dateData, setDateData] = useState([]);

  function obtenerFechasYPesos(elemento) {
    const fechas = [];
    const pesos = [];
    
    for (let i = 0; i < elemento.length; i++) {
      const medida = elemento[i];
      const fecha = medida.date_of_measure;
      const peso = medida.weight;
      fechas.push(fecha);
      pesos.push(peso);
    }
    
    return { fechas, pesos };
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!weight) return;
    try {
      const data = {
        user_id: userId,
        weight: parseFloat(weight),
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
        console.log(result);
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
          const { fechas, pesos } = obtenerFechasYPesos(result);
          setWeightData(pesos);
          setDateData(fechas);
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
      <Chart data={weightData} xaxis={dateData} />
    </div>
  );
};

export default Dashboard;
