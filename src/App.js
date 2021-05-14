import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

function App() {
  //ToDo: create each object's baseline values (water, fertilizer) and utilize useState hook to manage the object's state
  const [grow, setGrow] = useState({
    water: 0,
    fertilizer: 0,
    sunlight: 0
  });

  //Update values immutably, by passing a whole new object, so each aspect of the plant's input can act independantly. Idea is that the values will add up to a numeric value of 100. Initial thought is using .min and .max to establish loss and win conditions for each plant in
  const setWater = () => {
    setGrow({
      ...grow,
      water: grow.water + 10
    });
  };

  const setFertilizer = () => {
    setGrow({
      ...grow,
      fertilizer: grow.fertilizer + 10
    });
  };

// Sunlight needs to be added
  const setSunlight = () => {
    setGrow({
      ...grow,
      sunlight: grow.sunlight + 20
    })
  };

  const percentGrowth = `${grow.water + grow.fertilizer + grow.sunlight}`;

  return (
    <div className="App">
      <h1>Grow a Plant Outdoors!</h1>
      <span aria-hidden>🌱</span>
      <h2>Add Water</h2>
      <button onClick={setWater}>
        {grow.water} oz total
      </button>
      <h2>Add Fertilizer</h2>
      <button onClick={setFertilizer}>
        {grow.fertilizer} g total
      </button>
      <h2>Add Sunlight</h2>
      <button onClick={setSunlight}>
        {grow.sunlight} hours total
      </button>
      <h2>{percentGrowth} percent of growth to maturity!</h2>
    </div>
  );
}

export default App;
