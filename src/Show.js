import React, { Component } from "react";
import "./Show.css";

class Show extends Component {
  render() {
    let chosenCandidate = this.props.candidates.filter(
      candidate => candidate.name === this.props.match.params.candidate
    );
    let runningPresent;
    let disabledClass;
    if (chosenCandidate[0].stillRunning === false) {
      runningPresent = "This candidate is no longer running for President";
      disabledClass = "disabled";
    } else {
      runningPresent = "This candidate is still in the race";
      disabledClass = "";
    }
    return (
      <div className="candidatesShowContainer">
        <h1>{chosenCandidate[0].name}</h1>
        <h3 className="position-state">
          {chosenCandidate[0].currentTitle} from {chosenCandidate[0].state}
        </h3>
        <img class={"show-image " + disabledClass} src={chosenCandidate[0].image} alt={chosenCandidate.name}></img>
        <p>Status: {runningPresent}</p>
        <p>{chosenCandidate[0].description}</p>
        <button  id="show-btn" class="btn">
          <div className="learn-more-btn">
            <a target="_blank" href={chosenCandidate[0].website}>Learn More</a>
          </div>
        </button>
      </div>
    );
  }
}
export default Show;
