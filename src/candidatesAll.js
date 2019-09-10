// equivalent of the home page from the audubon lab

import React, { Component } from "react";
import "./candidatesAll.css";
import { Link } from "react-router-dom";
import candidates from "./data/w-candidate-data.json";

class AllCandidates extends Component {
  constructor() {
    super();
    this.state = {
      candidatesList: candidates
    };
  }
  render() {
    console.log(this.state.candidatesList);
    let allCandidates = this.state.candidatesList.map(candidate => {
      return (
        <Link to={`/home/candidates/${candidate.name}`}>
          <div className="candidate-item">
            <img src={candidate.imageUrl}></img>
            <h4>{candidate.name}</h4>
          </div>
        </Link>
      );
    });
    return (
      <div>
        <h2>test</h2>
        <div className="candidatesListContainer">{allCandidates}</div>
      </div>
    );
  }
}

export default AllCandidates;
