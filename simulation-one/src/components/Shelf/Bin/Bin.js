import React, { Component } from 'react';
import './Bin.css';

export default class Bin extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="Bin" >
                <div className="bin-name">
                    <h1>Name</h1>
                    <input type="text" placeholder="Name" ></input>
                </div>
                <div className="bin-price">
                    <h1>Price</h1>
                    <input type="text" value="$0" ></input>
                </div>
                <button onClick="" >+ Add to Inventory</button>
            </div>
        )
    }
}
