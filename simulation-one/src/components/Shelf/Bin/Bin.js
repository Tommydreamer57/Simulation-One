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
                <div className='bins_header_container'>
                    <div className='bins_header_logo_container dark-red-bgc'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAAAXNSR0IArs4c6QAABKJJREFUeAHVnLtPFFEUxncNARsfnRU24INKpaKg0UILNBT8JVQkVms0hlhb+C/QGBIwGE20UwsjHY8EQ4JGLEgELYBEXb9vmQvj7MzO3Jlz7r1zkm/v7My995zz23nceew0G46s3W5fgatRaCTSEMpz0NlIKBo/I+2h/AytQivQcrPZXEepbk0tDwBwGn3fg+5At6FBqIp9QeNX0EtoEYAOqnTmrC1A3ICeQj8gLWPf9HHdWWK2jhDcGPQacm30OWYbr1p9BHMVeuGaQoq/Rcailmhex3DeB92HDqBQjLEwpr68+EWXw+FlaBkK1T4hMB7V9A2OJqDdUEnE4mKME6pE4GAG+hNzGvokY51RgYKOH4aefY/4HolCgaPZHs7qsuhxESinilRCnaL1Cnbnpdo1/HJyRx909qQuq0JKnBwnDYj/DDWFogPD0K0ZFF0YNYPiBkZNoLiFETgUPzACheIXRmBQwoARCJSwYHiGEiYMT1DChuEYSj1gOIKiCwPD8ZsmEclSaZivAgOxXurkjolB6BBSudyGfiXPkrVgjCDO79DFBj4mIVroULRhkMEkgTzgVGShQnEBgwhaBDIfwTBFaFBcwWD+8wTyzpCIlaFAcQmD6b8nkJUYiPikbyiuYTD3VQLZjlNITPuC4gMGU98mkP0EhORX11B8wWDe+wTChPPMFRSfMMjgkEB28mhEy7Wh+IbBNHcIZJNTBU0TitxNpOj8AzmZEWjB9NqbvCO3a3H+0o+6z9G7+DAfz4z9togjtyphoNJb6EJu5ZMKuwSycfK90JQalELeC1QqCYM9bxBImccdg4VSAQaBrBHIGqdKWHBQKsIggnXuVIehKqa2o7X5kZCA7Q40Lefhjk8s2UpbajHPKxTEKQFjizC4ydDeHBWlP71tPoSBqG2PJmmJdhgYIItpNSznOYciCIOpLhzni44HID4uLWFONh8EKrGZmHyZe+eBms4agkHRIejMHROqNqG+phAGQpTYTEymcxED873Bo82owSVUqqwpiI1HxW9CMZpu+LeVbsPSJVNDqBSFgpgI46tQbKabpW4S0RzUGDe1BEsRKIhHAwbTHM8EwgWoIL2W0GklKGivBSN77TCUIuca/3AoBUURBnM8Gpma5LNKVGxBGmYFBQForRnMrZWVf9d8VO6HPrKVghWCAr+aMJgbhwfFDQ2GoD1Iw3pCgUNNGMyJ/wi1NzScgv5CGpYKBY40YTCXKXsSsRboYFqDRtTnf1AwTxMGXU7HUis/iY40/x7SgeIAxmx5AiktHUDpdQcR7iuZLAzDByFx89Hap1TKOKMxY5XZTAyEZAkH3NFqHX0y8io1mzFW24Emk8/6Dkc8JGuNU0pln2jE2ModWrOSzpsPhxy8cUSrMcxHt6WMsTAmu0FXXrI2y+Gch0qNE0J0a2WModi5iU2CZesiGF468AGGPnufwpdNSqIdguOVt2eQ1DVadNVl7Js+0q90VUhE84UqvGjLF6rchW5BEi9U4a0C3iFY6LoGipkSpgYkGRx+TW7ffM8HX2nBFxXw+3noTCQUjV+R+EQCb8LzvjNvtX4AANub8mhmb/8Asov1hwQSlWQAAAAASUVORK5CYII=' alt='logo' className='logo' /></div>
                    <div className='bins_header_shelf_container light-red-bgc text'><span>SHELF</span></div>
                    <div className='bin_header_bin_container darl-pink-bgc text '><span>BIN</span></div>
                </div>
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
                                    <button onClick={() => this.toggleEditOrSave()} >{this.state.edit ? "Save" : "Edit"}</button>
                                    <button onClick={() => this.delete()} >Delete</button>
                            </div>
                </div>
                            </div>
                        </div>
                    </div>
                    )
    }
}
