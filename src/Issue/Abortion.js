import React, { Component } from "react";
import './Abortion.css';

class Abortion extends Component {
    render() {
        return (
            <div className="abortion">
                <div className="abortion-header">
                <h1>Abortion</h1>
                <p>Does the candidate believe in abortions being legal?</p>
                </div>
                <div className="abortion-categories">
                    <div className="sub-head">
                    <h2>For</h2>
                    </div>
                    <ul>
                        <li>
                            <h3>
                                <span>Tulsi Gabbard</span>
                            </h3>
                        </li>
                        <li>
                            <h3>
                                <span>Kirsten Gillibrand</span>
                            </h3>
                        </li>
                        <li>
                            <h3>
                                <span>Kamala Harris</span>
                            </h3>
                        </li>
                        <li>
                            <h3>
                                <span>Elizabeth Warren</span>
                            </h3>
                        </li>
                        <li>
                            <h3>
                                <span>Marianne Williamson</span>
                            </h3>
                        </li>
                    </ul>
                    <div className="sub-head">
                    <h2>Other</h2>
                    </div>
                    <ul>
                        <li>
                            <h3>
                                <span>Amy Klobuchar</span>
                            </h3>
                        </li>
                    </ul>
                    <div className="sub-head">
                    <h2>Undecided</h2>
                    </div>
                    <div className="sub-head">
                    <h2>Against</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Abortion;