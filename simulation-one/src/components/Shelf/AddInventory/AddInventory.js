import React, { Component } from 'react';
import axios from 'axios';
import './AddInventory.css';
const url = '/shelfie/';

export default class AddInventory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: 0
        }
    }
    handleNameChange(e) {
        this.setState({
            name: e.target.value
        })
    }
    handlePriceChange(e) {
        this.setState({
            price: e.target.value
        })
    }
    addToInventory() {
        axios.post(url, this.state.name, this.state.price).then(response => response.data)
    }
    render() {
        return (
            <div className="AddInventory" >
                    <div className="add-bin-name">
                        <h1>Name</h1>
                        <input type="text" onChange={e => this.handleNameChange(e)} ></input>
                    </div>
                    <div className="bin-price">
                        <h1>Price</h1>
                        <input type="text" value={`this.state.price`} onChange={e => this.handlePriceChange(e)} ></input>
                    </div>
                    <button onClick={() => this.addToInventory()} >+ Add to Inventory</button>
            </div>
        )
    }
}
