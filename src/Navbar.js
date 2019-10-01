import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="topnav">
            <a className="active" href="/" id="nav-link">Home</a>
            <a href="/candidates/" id="nav-link">Candidates</a>
            <a href="/issues/" id="nav-link">Issues</a>
            <a href="/form" id="nav-link">Suggestion Form</a>
        </div>
    )
}

export default Navbar;