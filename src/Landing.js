import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./Landing.css"
// import {Button} from 'react-bootstrap';

class Landing extends Component {
    render() {
      return (
        <div className="home-container">
          <div className="title">
            <h1>The Women of 2020</h1>
            <p>
              Welcome to The Women of 2020, a website that informs and keeps you
              updated on the female candidates running for the 2020 Presidential
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
          <footer>
          {/* <iframe src="http://free.timeanddate.com/countdown/i6xng2fa/n263/cf111/cm0/cu4/ct0/cs0/ca0/cr0/ss0/cac000/cpc000/pc4056a1/tc4056a1/fs100/szw320/szh135/tat2020%20Presidential%20Election/tac000/tptTime%20since%20Event%20started%20in/tpc000/mac000/mpc000/iso2020-11-03T00:00:00" allowTransparency="true" frameborder="0" width="330" height="135"></iframe> */}
          <div class="container">
            <div class="well">
              <div class="counter" id="clockdiv">
                <span class="title">2020 Presidential Election</span>
                <div class="sq">
                  <span class="days bord">417</span> <span class="smalltext">Days</span>
                </div>
                <div class="sq">
                  <span class="hours bord">8</span> <span class="smalltext">Hours</span>
                </div>
                <div class="sq">
                  <span class="minutes bord">41</span> <span class="smalltext">Mins</span>
                </div>
                <div class="sq">
                  <span class="seconds bord">45</span> <span class="smalltext">Secs</span>
                </div>
              </div>
            </div>
          </div>
          </footer>
        </div>
      );
    }
  }
  
  export default Landing;