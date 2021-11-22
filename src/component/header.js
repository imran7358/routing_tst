import React from 'react'
import { Link } from 'react-router-dom';

const Header = () =>{
    return(
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li >
                <Link to="/About">About</Link>
            </li>
            <li >
                <Link to="/Contact">About</Link>
            </li>
        </ul>
    )
}

export default Header