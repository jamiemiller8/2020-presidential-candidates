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
          </h3>
          {/* <iframe src="http://free.timeanddate.com/countdown/i6xng2fa/n263/cf111/cm0/cu4/ct0/cs0/ca0/cr0/ss0/cac000/cpc000/pc4056a1/tc4056a1/fs100/szw320/szh135/tat2020%20Presidential%20Election/tac000/tptTime%20since%20Event%20started%20in/tpc000/mac000/mpc000/iso2020-11-03T00:00:00" allowTransparency="true" frameborder="0" width="330" height="135"></iframe> */}
          <Countdown date={`${year}-11-03T00:00:00`} />
          {/* <Countapp /> */}
        </footer>
      </div>
    );
  }
}

export default Landing;
