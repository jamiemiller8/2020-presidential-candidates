import React, { Component } from "react";

class Show extends Component {
    render() {
        let chosenCandidate = this.props.candidates.filter (
            candidate => candidate.name === this.props.match.params.candidate
        )
        let runningPresent;
        if (chosenCandidate[0].stillRunning === false) {
            runningPresent = "This candidate is no longer running for President";
        } else {
            runningPresent = "This candidate is still in the race";
        }
        return (
            <div className="candidatesShowContainer">
                <h2>{chosenCandidate[0].name}</h2>
                <h3 className="state">({chosenCandidate[0].state})</h3>
                <img src={chosenCandidate[0].image} alt={chosenCandidate.name}></img>
                <p>Status: {runningPresent}</p>
                <a href={chosenCandidate[0].website}>Learn More</a>
            </div>
        )
    }
}
export default Show;