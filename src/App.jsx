import './App.css'
import React, { Component } from 'react'

import Card from './components/Card'
import Header from './components/Header'
import BookInCart from './components/BookInCart'
import Footer from './components/Footer'
import BookModal from './components/BookModal'
import {books} from './data.jsx'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.CardsRender = this.CardsRender.bind(this)
    this.SelectGenreBooks = this.SelectGenreBooks.bind(this)
    this.SearchBook = this.SearchBook.bind(this)
    this.AddBookInCart = this.AddBookInCart.bind(this)
    this.DeleteBookInCart = this.DeleteBookInCart.bind(this)
    this.AddBookInCardOfBook = this.AddBookInCardOfBook.bind(this)
    this.SumPriceBooksInCart = this.SumPriceBooksInCart.bind(this)

    this.openBookModal = this.openBookModal.bind(this)
    this.closeBookModal = this.closeBookModal.bind(this)

    this.state = {
      books: books,
      allBookCards: [],
      bookCardsRender: [],
      booksInCart: [],
      selectedBook: null,
      isModalOpen: false
    }
  }

  componentDidMount() {
    this.CardsRender()
  }

  CardsRender() {
    const allBooksCards = this.state.books.map((item, id) => (
      <Card
        key={id}
        book={item}
        AddBookInCardOfBook={this.AddBookInCardOfBook}
        onOpenDetails={this.openBookModal} /* клик по карточке откроет модалку */
      />
    ))
    this.setState({ allBookCards: allBooksCards, bookCardsRender: allBooksCards })
  }

  openBookModal(book) {
    this.setState({ selectedBook: book, isModalOpen: true })
  }

  closeBookModal() {
    this.setState({ isModalOpen: false, selectedBook: null })
  }

  SelectGenreBooks(genre) {
    if (genre == 'все') {
      this.setState({ bookCardsRender: this.state.allBookCards })
    } else {
      const allBooksOfGenre = this.state.allBookCards.filter(item => item.props.book.type == genre)
      this.setState({ bookCardsRender: allBooksOfGenre })
    }
  }

  SearchBook(even) {
    const searchName = even.target.value.toLowerCase().trim()
    if (searchName != '') {
      const books = this.state.allBookCards.filter((elem) => elem.props.book.name.toLowerCase().search(searchName) != -1)
      this.setState({ bookCardsRender: books })
    } else {
      this.setState({ bookCardsRender: this.state.allBookCards })
    }
  }

  AddBookInCardOfBook(book) {
    let allBooksInCart = [...this.state.booksInCart]
    let indicator = 0

    if (allBooksInCart.length == 0) {
      this.setState({
        booksInCart: [
          ...this.state.booksInCart,
          <BookInCart
            key={0}
            book={book}
            count={1}
            AddBookInCart={this.AddBookInCart}
            DeleteBookInCart={this.DeleteBookInCart}
          />
        ]
      })
    } else {
      allBooksInCart.map((item, index) => {
        if (item.props.book.name == book.name) {
          const countBook = item.props.count + 1
          allBooksInCart[index] =
            <BookInCart
              key={index}
              book={book}
              count={countBook}
              AddBookInCart={this.AddBookInCart}
              DeleteBookInCart={this.DeleteBookInCart}
            />
          indicator = 1
        }
      })

      if (indicator == 0) {
        allBooksInCart.push(
          <BookInCart
            key={allBooksInCart.length}
            book={book}
            count={1}
            AddBookInCart={this.AddBookInCart}
            DeleteBookInCart={this.DeleteBookInCart}
          />
        )
      }
      this.setState({ booksInCart: allBooksInCart })
    }
  }

  AddBookInCart(book) {
    let allBooksInCart = [...this.state.booksInCart]

    allBooksInCart.map((item, index) => {
      if (item.props.book == book) {
        const countBook = item.props.count + 1
        allBooksInCart[index] =
          <BookInCart
            key={index}
            book={book}
            count={countBook}
            AddBookInCart={this.AddBookInCart}
            DeleteBookInCart={this.DeleteBookInCart}
          />
      }
    })
    this.setState({ booksInCart: allBooksInCart })
  }

  DeleteBookInCart(book) {
    let allBooksInCart = [...this.state.booksInCart]

    allBooksInCart.map((item, index) => {
      if (item.props.book == book) {
        const countBook = item.props.count - 1
        if (countBook > 0) {
          allBooksInCart[index] =
            <BookInCart
              key={index}
              book={book}
              count={countBook}
              AddBookInCart={this.AddBookInCart}
              DeleteBookInCart={this.DeleteBookInCart}
            />
        } else {
          allBooksInCart.splice(index, 1)
        }
      }
    })
    this.setState({ booksInCart: allBooksInCart })
  }

  SumPriceBooksInCart() {
    let sum = 0
    if (this.state.booksInCart.length != 0) {
      this.state.booksInCart.map(item => {
        sum = sum + (item.props.book.price * item.props.count)
      })
    }
    return sum
  }

  render() {
    return (
      <div className='container'>
        <Header
          books={this.state.books}
          booksInCart={this.state.booksInCart}
          SelectGenreBooks={this.SelectGenreBooks}
          SearchBook={this.SearchBook}
          SumPriceBooksInCart={this.SumPriceBooksInCart()}
        />

        <div className='renderBooks'>
          {this.state.bookCardsRender}
        </div>

        <Footer />

        <BookModal
          open={this.state.isModalOpen}
          book={this.state.selectedBook}
          onClose={this.closeBookModal}
          onAddToCart={this.AddBookInCardOfBook}
        />
      </div>
    )
  }
}
