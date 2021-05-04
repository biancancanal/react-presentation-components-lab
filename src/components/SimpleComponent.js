// Code SimpleComponent Here

import React, { Component } from 'react'

export default class SimpleComponent extends Component {
    constructor() {
        super()
        this.state = {
            mood: "happy"
        }
    }
    
    handleClick = () => {
        //callback to div click event 
    }

    render() {
        return (
            <div onClick={this.state.mood}>
            </div>
        )
    }
}

