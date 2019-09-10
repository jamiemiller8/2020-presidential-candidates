import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
// import candidates from './data/w-candidate-data.json'

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);

