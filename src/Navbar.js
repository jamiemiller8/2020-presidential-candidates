import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
        return (
            <div className='navigation'>
                <div className='nav-grid'>
                    <div className='nav-menu'>
                        <header className='nav-header'>The Women of 2020</header>
                        <div className='nav-menu-items'>
                            <Link className='nav-link' to='/landing/'>
                                <ul>Home</ul>
                            </Link>
                            <Link className='nav-link' to='/candidates/'>
                                <ul>Candidates</ul>
                            </Link>
                            <Link className='nav-link' to='/issues/'>
                                <ul>Issues</ul>
                            </Link>
                            <Link className='nav-link' to='/form'>
                                <ul>Suggestion Form</ul>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default Navbar;