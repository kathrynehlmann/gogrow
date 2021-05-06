import React, { useState } from 'react';
import './App.css';

function App() {
  //ToDo: create each object's baseline values (water, fertilizer) and utilize useState hook to manage the object's state
  const [grow, setGrow] = useState({
    water: 0,
    fertilizer: 0
  });

  //Update values immutably, by passing a whole new object, so each aspect of the plant's input can act independantly. Idea is that the values will add up to a numeric value of 100. Initial thought is using .min and .max to establish loss and win conditions for each plant input. Jess: Actually I need to limit the quanitity that the user can input, ideally within a range established in the state.
  const setWater = () => {
    setGrow({
      water: grow.water + 25,
      fertilizer: grow.fertilizer
    });

  // Lodash has a _range
  };

  const setFertilizer = () => {
    setGrow({
      water: grow.water,
      fertilizer: grow.fertilizer + 25
    });
  };

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
      <h2> {+grow.water+grow.fertilizer} days to maturity!</h2>
    </div>
  );
}

export default App;
