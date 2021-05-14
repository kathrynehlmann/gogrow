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

// add water fertilizer and sunlight to get total plant growth
  const percentGrowth = `${grow.water + grow.fertilizer + grow.sunlight}`;

// use a Ternary operator to check if the values evaluate to at least 100 to declare a winner
  const winner = `${(grow.water + grow.fertilizer + grow.sunlight) >= 100 ? 'Congrats! You have won!' : ' '}`

// Need to have the user be able to lose for each one of the inputs for the plant.

//the plant can drown, the water lose condition
 const maxWater = `${grow.water <= 30 + (percentGrowth > 90) ? ' ' : 'Oh no! Your plant has too much water and drown'}`

//the plant can burn, the fertilizer lose condition

//the plant can wilt, the sunlight lose condition




// use a Ternary operator to check if the values evaluate to at least 100 to give the player the option to start a new game
  const newGame = `${percentGrowth >= 110 ? 'Would you like to play again?' : ' '}`

// refresh the page for a new game
  const refreshPage = () => {
    window.location.reload();
  }


  return (
    <div className="App">
      <h1>Grow a Plant</h1>
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
      <h2>{percentGrowth} percent of growth to maturity</h2>
      <h4>{winner}</h4>
      <h4>{maxWater}</h4>
      <h4>{newGame}</h4>
      <button onClick={refreshPage}>
        Start a New Game
      </button>
    </div>
  );
}

export default App;
