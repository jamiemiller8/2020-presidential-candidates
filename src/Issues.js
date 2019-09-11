import React, { Component } from "react";
import {Link} from "react-router-dom";
import './Issues.css';

class Issues extends Component {
    render() {
        return (
            <div className="issues-container">
                <div className="issues-title">
                    <h1>Issues</h1>
                </div>
                <div className="issues-list">
                <div className="issue1">
                    <Link to="/issues/:issue/"> 
                        <img class="issue-image" src="https://static.scientificamerican.com/sciam/cache/file/1B9377D3-BFA7-480D-8EFFCF13EA7E195D_source.jpg?w=590&h=800&48A88A85-876E-4490-A428E52BC0CE8A9A"></img>
                        <h3>Abortion</h3>
                    </Link>
                </div>
                <div className="issue2">
                    <Link to="/issues/:issue/">
                        <img class="issue-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT44XZzI9c_orR2TYfOCdYUs0EaenTwjQPQNkZredZI-6QhD_AppA"></img>
                        <h3>Immigration</h3>
                    </Link>
                </div>
                <div className="issue3">
                    <Link to="/issues/:issue/">
                        <img class="issue-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPMeE2z3qBP3ku1QQY5Y3fbzjjVqDeEvA4gSFBQxvshafJIMurA"></img>
                        <h3>Criminal Justice</h3>
                    </Link>
                </div>
                <div className="issue4">
                    <Link to="/issues/:issue/">
                        <img class="issue-image" src="https://clipartix.com/wp-content/uploads/2018/03/cartoon-money-2018-43.jpg"></img>
                        <h3>Minimum Wage</h3>
                    </Link>
                </div>
                <div className="issue5">
                    <Link to="/issues/:issue/">
                        <img class="issue-image" src="https://images-na.ssl-images-amazon.com/images/I/31nGqnlqhlL._SX425_.jpg"></img>
                        <h3>Gun Control</h3>
                    </Link>
                </div>
                <div className="issue6">
                    <Link to="/issues/:issue/">
                        <img class="issue-image" src="https://png.pngtree.com/element_our/20190529/ourlarge/pngtree-cartoon-military-tank-illustration-image_1215123.jpg"></img>
                        <h3>Military</h3>
                    </Link>
                </div>
                </div>
            </div>
        )
    }
}

export default Issues;