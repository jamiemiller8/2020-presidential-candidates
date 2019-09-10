// equivalent of the home page from the audubon lab

import React, { Component } from "react";
import './candidatesAll.css';
import {Link} from 'react-router-dom'; 

class AllCandidates extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let allCandidates = this.props.candidates.map(candidate => {
            return (
                <div className="candidatesListContainer" key={candidate.name}>
                    
                </div>
            )
        })
    }
}