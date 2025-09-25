import React, { Component } from 'react'

export default class ListOfGenre extends Component {
    constructor(props) {
        super(props)

        this.CreateListGenresBooks = this.CreateListGenresBooks.bind(this)

        this.state = {
            listOfGenre: []
        }
    }

    componentDidMount() {
        this.CreateListGenresBooks()
    }

    CreateListGenresBooks() {
        var allListOfGenres = []
        this.props.books.map(item => allListOfGenres.push(item.type))
        allListOfGenres = [... new Set(allListOfGenres)]
        this.setState({ listOfGenre: allListOfGenres.map((item, id) => <li className='itemGenre' key={id} onClick={() => this.props.SelectGenreBooks(item)}> {item} </li>) })
    }

    render() {
        return (
            <ul className={this.props.display} onClick={() => this.props.ShowListOfGenre()}>
                <li className='itemGenre' key='all' onClick={() => this.props.SelectGenreBooks('все')}>все</li>
                {this.state.listOfGenre}
            </ul>
        )
    }
}
