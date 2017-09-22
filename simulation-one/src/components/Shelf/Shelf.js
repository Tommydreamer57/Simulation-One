import React, { Component } from 'react';
import './Shelf.css';
import { NavLink } from 'react-router-dom';

export default class Shelf extends Component {
    constructor(props) {
        super(props)
        this.shelf = this.props.match.params.shelf;
    }

    componentDidMount() {
//        axios.get(this.shelf, )
    }

    render() {
        return (
            <ul className="shelf-list">
                <NavLink to={`/shelfie/${this.shelf}`} className="shelf-button" ></NavLink>
                <NavLink to={`/shelfie/${this.shelf}`} className="shelf-button" ></NavLink>
                <NavLink to={`/shelfie/${this.shelf}`} className="shelf-button" ></NavLink>
                <NavLink to={`/shelfie/${this.shelf}`} className="shelf-button" ></NavLink>
            </ul>
        )
    }
}
