import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function App() {
  //ToDo: create each object's baseline values (water, fertilizer) and utilize useState hook to manage the object's state

  //Update values immutably, by passing a whole new object, so each aspect of the plant's input can act independantly

  
  return (
    <div className="App">
      <h1>Grow a Plant Outdoors!</h1>
      <span aria-hidden>🌱</span>
    </div>
  );
}

export default App;
