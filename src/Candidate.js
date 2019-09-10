// equivalent to show page from audubon lab 

import React, { Component } from "react";

class Candidate extends Component {
    render() {
        let chosenCandidate = this.props.candidates.filter (
            candidate => candidate.name === this.props.match.params.candidate 
        )
        let runningPresent;
        if (chosenCandidate[0].stillRunning === false) {
            runningPresent = "No longer running for President";
        } else {
            runningPresent = chosenCandidate[0].stillRunning;
        }
    return (
        <div className="candidatePageContainer">
        <h2>{chosenCandidate[0].name}</h2>
        <h3 className="state">({chosenCandidate[0].state})</h3>
        <img src={chosenCandidate[0].imageUrl} alt={chosenCandidate.name}></img>
        <h3>Still Running: {runningPresent}</h3>
        <a href={chosenCandidate[0].website}>earn More about the Candidate</a>
    )
}
}