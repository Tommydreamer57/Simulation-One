import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Landing extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <ul className="shelf-list">
                <NavLink to="/shelfie/A" className="shelf-button" >Shelf A</NavLink>
                <NavLink to="/shelfie/B" className="shelf-button" >Shelf B</NavLink>
                <NavLink to="/shelfie/C" className="shelf-button" >Shelf C</NavLink>
                <NavLink to="/shelfie/D" className="shelf-button" >Shelf D</NavLink>
            </ul>
        )
    }
}