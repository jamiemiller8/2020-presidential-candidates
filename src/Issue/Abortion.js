import React, { Component } from "react";
import './Abortion.css';

class Abortion extends Component {
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
                if (candidate.issues.abortion != undefined) {
                    switch (candidate.issues.abortion) {
                        case "For": forDiv += candidate.name + "<br/>"
                        break;
                        case "Against": againstDiv += candidate.name + "<br/>"
                        break;
                        case "Other": otherDiv += candidate.name + "<br/>" //add to other div.
                        break;
                        case "Undecided":  undecidedDiv += candidate.name + "<br/>" //add to undecided div.
                        Default: forDiv += ''; //do nothing.
                        break;
                    }
                     
                }
                // if (candidate.issues.immigration != undefined) {
                //     if (candidate.issues.immigration == "For") {
                //         //do this.
                //     }
                // }
            }
        })
        return (
            <div className="candidatesHome">
                <h2>The Candidates</h2>
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
        



        // return (
        //     <div className="abortion">
        //         <div className="abortion-header">
        //         <h1>Abortion</h1>
        //         <p>Does the candidate believe in abortions being legal?</p>
        //         </div>
        //         <div className="abortion-categories">
        //             <div className="sub-head">
        //             <h2>For</h2>
        //             </div>
        //             <ul>
        //                 <li>
        //                     <h3>
        //                         <span>Tulsi Gabbard</span>
        //                     </h3>
        //                 </li>
        //                 <li>
        //                     <h3>
        //                         <span>Kirsten Gillibrand</span>
        //                     </h3>
        //                 </li>
        //                 <li>
        //                     <h3>
        //                         <span>Kamala Harris</span>
        //                     </h3>
        //                 </li>
        //                 <li>
        //                     <h3>
        //                         <span>Elizabeth Warren</span>
        //                     </h3>
        //                 </li>
        //                 <li>
        //                     <h3>
        //                         <span>Marianne Williamson</span>
        //                     </h3>
        //                 </li>
        //             </ul>
        //             <div className="sub-head">
        //             <h2>Other</h2>
        //             </div>
        //             <ul>
        //                 <li>
        //                     <h3>
        //                         <span>Amy Klobuchar</span>
        //                     </h3>
        //                 </li>
        //             </ul>
        //             <div className="sub-head">
        //             <h2>Undecided</h2>
        //             </div>
        //             <div className="sub-head">
        //             <h2>Against</h2>
        //             </div>
        //         </div>
        //     </div>
        // )
    }
}

export default Abortion;