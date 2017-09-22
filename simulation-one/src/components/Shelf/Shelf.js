import React, { Component } from 'react';
import './Shelf.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default class Shelf extends Component {
    constructor(props) {
        super(props)
        this.shelf = this.props.match.params.shelf;
        this.state = {
            bins: [1, 2, 3, 4]
        }
    }

    componentDidMount() {
        console.log(this.shelf)
        axios.get(`api/product/${this.shelf}`).then(response => console.log(response.data))
    }

    render() {
        return (
            <ul className="shelf-list">
                {
                    this.state.bins.map((item, i) => {
                        return (
                            <NavLink to={`/shelfie/${this.shelf}/${item}`} className="shelf-button" >Bin {item}</NavLink>
                        )
                    })
                }
            </ul>
        )
    }
}
