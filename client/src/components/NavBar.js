import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className="NavBar">
            <ul>
                <li><Link to="/"> Index </Link></li>
                <li><Link to="/register"> Register </Link></li>
                <li><Link to="/login"> Login </Link></li>
                <li><Link to="/post"> Post </Link></li>
            </ul>
        </nav>
    )
}

export default NavBar
