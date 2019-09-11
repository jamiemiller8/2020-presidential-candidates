import React, { Component } from "react";
import {Link} from "react-router-dom";

class Issues extends Component {
    render() {
        return (
            <div className="issues-container">
                <div className="issue1">
                    <Link to="/issues/:issue/">

                    </Link>
                </div>
            </div>
        )
    }
}

export default Issues;