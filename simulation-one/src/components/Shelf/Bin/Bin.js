import React, { Component } from 'react';
import './Bin.css';
const url = '/shelfie/'

export default class Bin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            id: '',
            name: '',
            price: '',
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
    save() {
        axios.put(url + this.state.id)
            .then(response => response.data)
            .then(this.setState({
                edit: false,
                name: response.data.name,
                price: response.data.price
            }))
    }
    toggleEditOrSave() {
        this.state.edit ?
            save()
            :
            this.setState({
                edit: true
            })
    }
    delete() {
        axios.delete(url + this.state.id)
    }
    render() {
        return (
            <div className="Bin" >
                <div className="bin-name">
                    <h1>Name</h1>
                    <input type="text" placeholder="Name" onChange={e => this.handleNameChange(e)} ></input>
                </div>
                <div className="bin-price">
                    <h1>Price</h1>
                    <input type="text" value={this.state.price} onChange={e => this.handlePriceChange(e)} ></input>
                </div>
                <button onClick={() => this.toggleEditOrSave()} >{this.state.edit ? "Save" : "Edit"}</button>
                <button onClick={() => this.delete()} >Delete</button>
            </div>
        )
    }
}
