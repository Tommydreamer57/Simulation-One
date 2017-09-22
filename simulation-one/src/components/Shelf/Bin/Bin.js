import React, { Component } from 'react';
import axios from 'axios';
import './Bin.css';
const url = '/shelfie/';

export default class Bin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            id: '',
            name: '',
            price: ''
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
            .then(response => {
                this.setState({
                    edit: false,
                    name: response.data.name,
                    price: response.data.price
                })
            })
    }
    toggleEditOrSave() {
        this.state.edit ?
            this.save()
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
            <div className="bin_parent_container" >
                <div className='bins_child_container'>
                    <div className='bins_child_content'>
                        <div className='bins_photo'><img src='' alt='inventory' /></div>

                        <div className='bins_child_content_right'>
                            <div className='bins_data_container'>
                                <p className='bins_child_content_title p font_weight'>Name</p>
                                <p className='bins_child_content_data p font_weight'><input type="text" onChange={e => this.handleNameChange(e)} ></input></p>

                                <p className='bins_child_content_title font_weight'>Price</p>
                                <p className='bins_child_content_data p font_wight'><input type="text" value={this.state.price} onChange={e => this.handlePriceChange(e)} ></input></p>
                            </div>
                            <div className='bins_button_container'>
                                    <button className='bin_button font_weight grey-bgc' onClick={() => this.toggleEditOrSave()} >{this.state.edit ? "Save" : "Edit"}</button>
                                    <button className='bin_button font_weight grey-bgc' onClick={() => this.delete()} >Delete</button>
                            </div>
                </div>
                            </div>
                        </div>
                    </div>
                    )
    }
}
