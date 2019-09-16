// equivalent to show page from audubon lab

// import React, { Component } from "react";
// import candidates from "./data/w-candidate-data.json";

// class Candidate extends Component {
//   render() {
//     console.log(candidates)
//     let chosenCandidate = this.props.candidates.filter(
//       candidate => candidate.name === this.props.match.params.candidate
//     );
//     let runningPresent;
//     if (chosenCandidate[0].stillRunning === false) {
//       runningPresent = "This candidate is no longer running for President";
//     } else {
//       runningPresent = "This candidate is still in the Presidential Race"
//     }
//     return (
//       <div className="candidatePageContainer">
//         <h2>{chosenCandidate[0].name}</h2>
//         <h3 className="state">({chosenCandidate[0].state})</h3>
//         <img src={chosenCandidate[0].imageUrl} alt={chosenCandidate.name}></img>
//         <h3>Status: {runningPresent}</h3>
//         <a href={chosenCandidate[0].website}>Learn More</a>
//       </div>
//     );
//   }
// }

// export default Candidate;