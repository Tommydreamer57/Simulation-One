import React from 'react';
import './Navbar.css';
import logo from '../../logo.svg';

export default function Navbar(props) {
    return (
        <ul className="Navbar" >
            <li className="logo-wrapper"><img src={logo} alt='logo' /></li>
            <li className="nav-shelf">Shelf</li>
            <li className="nav-bin">Bin</li>
        </ul>
    )
}
