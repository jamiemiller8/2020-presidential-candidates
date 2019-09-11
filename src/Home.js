// import React, { Component } from "react";
// import { Link, Route } from "react-router-dom";
// import "./Home.css";

// class Home extends Component {
//   render() {
//     return (
//       <div className="home-container">
//         <div className="title">
//           <h1>The Women of 2020</h1>
//           <p>
//             Welcome to The Women of 2020, a website that informs and keeps you
//             updated on the female candidates running for the 2020 Presidential
//             Election.
//           </p>
//         </div>
//         <div className="home-links">
//           <div className="home-candidate-link">
//             <button class="btn">
//               <Link to="/candidates/" className="link">
//                 <h2>Candidates</h2>
//               </Link>
//             </button>
//           </div>
//           <div className="home-issues-link">
//             <button class="btn">
//               <Link to="/issues/" className="link">
//                 <h2>Issues</h2>
//               </Link>
//             </button>
//           </div>
//           <div className="home-form-link">
//             <button class="btn">
//               <Link to="/form/" className="link">
//                 <h2>Suggestion Form</h2>
//               </Link>
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Home;

import React, { Component } from "react";
import './Home.css';
import {Link} from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let allCandidates = this.props.candidates.map(candidate => {
            return (
                <div className="candidatesHomeContainer" key={candidate.name}>
                   <Link to={`/candidates/${candidate.name}`}>
                       <img src={candidate.image} alt={candidate.name}></img>
                    </Link> 
                </div>
            )
        })
        return (
            <div className="candidatesHome">
                <h2>Candidates</h2>
                {/* <Link to="/form/">
                    Submit an edit request
                </Link> */}
                {allCandidates}
            </div>
        )
    }
}
export default Home;