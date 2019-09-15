import React, { Component } from "react";

class GunControl extends Component {
    constructor() {
        super()
    }
    render() {
        let forDiv = '';
        let againstDiv = '';
        let otherDiv = '';
        let undecidedDiv = '';
        
        
        let allCandidates = this.props.candidates.map(candidate => {
            if (candidate.issues != undefined) {
                if (candidate.issues.gunControl != undefined) {
                    switch (candidate.issues.gunControl) {
                        case "For": forDiv += candidate.name + "<br/>"
                        break;
                        case "Against": againstDiv += candidate.name + "<br/>"
                        break;
                        case "Other": otherDiv += candidate.name + "<br/>" 
                        break;
                        case "Undecided":  undecidedDiv += candidate.name + "<br/>" 
                        Default: forDiv += ''; //do nothing.
                        break;
                    }
                }
            }
        })
        return (
            <div className="gunControl">
                <h1>Gun Control</h1>
                <p>Does the candidate believe that the federal government should ban assault weapons?</p>
                <div className="issuesContainer">
                    <div>
                        <h2>For</h2>
                        <div dangerouslySetInnerHTML={{__html: forDiv}}></div>
                    </div>
                    <div>
                        <h2>Against</h2>
                        <div dangerouslySetInnerHTML={{__html: againstDiv}}></div>
                    </div>
                    <div>
                        <h2>Other</h2>
                        <div dangerouslySetInnerHTML={{__html: otherDiv}}></div>
                    </div>
                    <div>
                        <h2>Undecided</h2>
                        <div dangerouslySetInnerHTML={{__html: undecidedDiv}}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GunControl;