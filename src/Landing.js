import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import Countdown from "./Countdown";
// import {Button} from 'react-bootstrap';
import Countapp from "./Countapp";

class Landing extends Component {
  render() {
    const currentDate = new Date();
    let year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 3
        ? currentDate.getFullYear() + 4
        : currentDate.getFullYear();
        if (year % 4 !== 0 ) {
          year += 4-(year%4)
        }
        console.log(currentDate.getFullYear())
        console.log(year)
    return (
      <div className="home-container">
        <div className="title">
          <h1>The Women of 2020</h1>
          <p>
            Welcome to The Women of 2020, a website that informs and keeps you
            updated on the female candidates running for the 2020 U.S. Presidential
            Election.
          </p>
        </div>
        <div className="home-links">
          <div className="home-candidate-link">
            <button class="btn">
              <Link to="/candidates/" className="link">
                <h2>Candidates</h2>
              </Link>
            </button>
          </div>
          <div className="home-issues-link">
            <button class="btn">
              <Link to="/issues/" className="link">
                <h2>Issues</h2>
              </Link>
            </button>
          </div>
          <div className="home-form-link">
            <button class="btn">
              <Link to="/form/" className="link">
                <h2>Suggestion Form</h2>
              </Link>
            </button>
          </div>
        </div>
        {/* <div className="Countapp">
          <h3 className="Countapp-title">
            2020 Presidential Election Countdown:
          </h3>
          <Countdown date={`${year}-11-3T00:00:00`} />
        </div> */}
        <footer>
          <h3 className="countdown-title">
            2020 Presidential Election:
          <Countdown date={`${year}-11-03T00:00:00`} />
          {/* <Countapp /> */}
          </h3>
        </footer>
      </div>
    );
  }
}

export default Landing;
