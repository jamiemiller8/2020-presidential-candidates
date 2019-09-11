import React, { Component } from "react";
import { Link} from "react-router-dom";
import "./Landing.css"

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
        </div>
      );
    }
  }
  
  export default Landing;