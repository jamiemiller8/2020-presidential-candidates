import React from 'react';
import './App.css';
import { Route } from "react-router-dom"
import Home from './Home'
// import candidates from './data/w-candidate-data.json'

function App() {
  return (
    <div className="App">
      <Route path='/home/' component = {Home}/>
    </div>
  );
}

export default App;
