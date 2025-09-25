import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <input id='search' type='text' onInput={this.props.SearchBook} placeholder='Поиск'/>            
        )
    }
}



