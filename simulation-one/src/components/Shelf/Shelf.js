import React, { Component } from 'react';
import './Shelf.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default class Shelf extends Component {
    constructor(props) {
        super(props)
        this.shelf = this.props.match.params.shelf;
        this.state = {
            bins: []
        }
    }

    componentDidMount() {
        console.log(this.shelf)
        axios.get(`api/product/${this.shelf}`).then(response => console.log(response.data))
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
