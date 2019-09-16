import React from 'react'
// import {Link} from 'react-router-dom'
import './Navbar.css'

// function Navbar() {
//         return (
//             <div className='navigation'>
//                     <div className='nav-menu'>
//                         <header className='nav-header'>The Women of 2020</header>
//                         <div className='nav-menu-items'>
//                             <Link className='nav-link' to='/landing/'>
//                                 <ul className="nav-ul">Home</ul>
//                             </Link>
//                             <Link className='nav-link' to='/candidates/'>
//                                 <ul className="nav-ul">Candidates</ul>
//                             </Link>
//                             <Link className='nav-link' to='/issues/'>
//                                 <ul className="nav-ul">Issues</ul>
//                             </Link>
//                             <Link className='nav-link' to='/form'>
//                                 <ul className="nav-ul">Suggestion Form</ul>
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//         )
//     }

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