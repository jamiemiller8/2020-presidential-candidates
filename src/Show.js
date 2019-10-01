import React, { Component } from "react";
import "./Show.css";

//This file represents the individual candidate page, once the user clicks on one of the names 

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
        <div className="candidate-video">
        <iframe className="video" width="560" height="315" src={chosenCandidate[0].socialMedia.youtube} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <button  id="show-btn" class="btn">
          <div className="learn-more-btn">
            <a target="_blank" rel="noopener noreferrer" href={chosenCandidate[0].website}>Learn More</a>
          </div>
        </button>
      </div>
    );
  }
}
export default Show;
