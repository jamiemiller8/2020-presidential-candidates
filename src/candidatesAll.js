// equivalent of the home page from the audubon lab

import React, { Component } from "react";
import './candidatesAll.css';
import {Link} from 'react-router-dom'; 
import candidates from './data/w-candidate-data.json'

class AllCandidates extends Component {
    constructor() {
        super()
        this.state = {
            candidates:candidates
        }

        
    }
    render() {
        let allCandidates = this.state.candidates.map(candidate => {
            return (
                <div className="candidatesListContainer" key={candidate.name}>
                    <Link to={`/home/candidates/${candidate.name}`}>
                        <img src={candidate.imageUrl} alt={candidate.name}></img>
                    </Link>
                </div>
            )
        })
        return(
            <div>
                <h2>test</h2>
                {allCandidates}

            </div>
        )
    
    }
}

export default AllCandidates;