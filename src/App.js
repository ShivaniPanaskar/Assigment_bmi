import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBMI] = useState();
  const [message, setMessage] = useState();
  function heightHandler(e) {
    console.log(e.target.value);
    setHeight(e.target.value);
  }

  function weightHandler(e) {
    setWeight(e.target.value);
  }

  function bmiCalculator(weight, height) {
    let result = Math.floor((weight / (height * height)) * 703);
    if (result > 30) {
      let message = "You should lose your weight";
      setMessage(message);
    }
    setBMI(result);
  }
  return (
    <div>
      <h2 className="title">BMI Calculator</h2>
      <label>Enter your Height in cm:</label>
      <input type="text" value={height} onChange={heightHandler} />
      <br />
      <label>Enter your Weight in kg:</label>
      <input type="text" value={weight} onChange={weightHandler} />
      <br />
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          bmiCalculator(height, weight);
        }}
      >
        Submit
      </button>
      <p>{`Your BMI is ${bmi}`}</p>
      <p>{message}</p>
      <p></p>
    </div>
  );
};

export default App;
