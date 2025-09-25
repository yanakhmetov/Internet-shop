import React, { Component } from 'react'

import ListOfGenre from './ListOfGenre'
import Search from './Search'

import cartIcon from '../assets/cart.svg'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOfGenreDisplay: false,
      cartOfBooksDisplay: false
    }
    this.ShowListOfGenre = this.ShowListOfGenre.bind(this)
    this.ShowCartOfBooks = this.ShowCartOfBooks.bind(this)
  }

  ShowListOfGenre() {
    this.setState(({ listOfGenreDisplay }) => ({ listOfGenreDisplay: !listOfGenreDisplay }))
  }
  ShowCartOfBooks() {
    this.setState(({ cartOfBooksDisplay }) => ({ cartOfBooksDisplay: !cartOfBooksDisplay }))
  }

  render() {
    return (
      <div className='header'>
        <div className='logoAndMenu'>
          <img
            src="https://grizly.club/uploads/posts/2023-08/1692305236_grizly-club-p-kartinki-znachok-knigi-bez-fona-23.png"
            className='logo'
            alt="logo"
          />
          <div className='parrentListOfGenre menu'>
            <ListOfGenre
              display={this.state.listOfGenreDisplay ? "listOfGenre" : "listOfGenreNone"}
              books={this.props.books}
              SelectGenreBooks={this.props.SelectGenreBooks}
              ShowListOfGenre={this.ShowListOfGenre}
            />
            <div className='itemMenu' onClick={this.ShowListOfGenre}>жанр</div>
            {/* <div className='itemMenu'>контакты</div> */}
          </div>
        </div>

        <div className='searchAndCart'>
          <Search books={this.props.books} SearchBook={this.props.SearchBook} />

          <div className='cart'>
            <img
              src={cartIcon}
              alt="Корзина"
              className='FaCartPlusHeader'
              onClick={this.ShowCartOfBooks}
            />
            <div className={this.state.cartOfBooksDisplay ? "cartBooks" : "cartBooksNone"}>
              {this.props.booksInCart}
              <div className='resultBooksInCart'>
                <p className='sumAllBooksInCart'>итого: {this.props.SumPriceBooksInCart} р.</p>
                <button className='orderBooks'>Заказать</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
