import React, { Component } from "react";
import './Home.css';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor() {
        super()

    }
    render() {
        let allCandidates = this.props.candidates.map(candidate => {
            //add an if statement where the runningPresent = false, then return grey scale pic
            //then, the return statement below will be the "else return" 
            let runningPresent;
            let disabledClass;
            if (candidate.stillRunning === false) {
              disabledClass = "disabled";
            } else {
              runningPresent = "This candidate is still in the race";
              disabledClass = "";
            }
            return (
                <div className="candidatesHomeContainer" key={candidate.name}>
                   <Link to={`/candidates/${candidate.name}`}>
                       <img className={"home-image " + disabledClass} src={candidate.image}></img>
                       <h4>{candidate.name}</h4>
                    </Link> 
                </div>
            )
        })
        return (
            <div className="candidatesHome">
                <h2>The Candidates</h2>
                <div className="candidatesListContainer">{allCandidates}</div>
            </div>
        )
    }
}
export default Home;