import React, { Component } from 'react'

import addIcon from '../assets/add-to-cart.svg'

export default class Card extends Component {
  render() {
    const { book, onOpenDetails, AddBookInCardOfBook } = this.props

    return (
      <div className='card' onClick={() => onOpenDetails && onOpenDetails(book)}>
        <div className='imgSize'>
          <img src={book.image} alt={book.name} />
        </div>

        <h1 className='nameBook'>{book.name}</h1>
        <div className='typeBook'>{book.type}</div>

        <div className='byuBook'>
          <h3>Цена: {book.price} руб.</h3>
          <div
            className='styleFaCartPlus'
            onClick={(e) => { e.stopPropagation(); AddBookInCardOfBook(book) }}
          >
            <img src={addIcon} alt="Добавить в корзину" className='FaCartPlus' />
          </div>
        </div>
      </div>
    )
  }
}
