import React from 'react';
import './App.css';
import { Route } from "react-router-dom"
import Home from './Home'
import AllCandidates from "./candidatesAll";
// import candidates from './data/w-candidate-data.json'
import Candidate from "./Candidate";

function App() {
  return (
    <div className="App">
      <Route exact path='/home/' component = {Home}/>
      <Route exact path ='/candidates/' component={AllCandidates}/>
      <Route exact path = '/candidates/{candidate.name}' component={Candidate}/>
    </div>
  );
}

export default App;
