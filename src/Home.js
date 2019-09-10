import React, { Component } from "react";
import { Link,Route } from "react-router-dom";
import "./Home.css";


class Home extends Component {
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
                <Link to="/candidates/" className="link">
                    <h2>Candidates</h2>
                </Link>
            </div>
            <div className="home-issues-link">
                <Link to="/issues/" className="link">
                    <h2>Issues</h2>
                </Link>
            </div>
            <div className="home-form-link">
                <Link to="/form/" className="link">
                    <h2>Suggestion Form</h2>
                </Link>
            </div>


        </div>
      </div>
    );
  }
}

export default Home;