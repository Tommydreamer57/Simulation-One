import React from 'react';
import './Navbar.css';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <ul className="Navbar" >
            <li className="logo-wrapper"><Link to="/shelfie/" ><img src={logo} alt='logo' /></Link></li>
            <li className="nav-shelf">Shelf</li>
            <li className="nav-bin">Bin</li>
        </ul>
    )
}
