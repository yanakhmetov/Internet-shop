import React, { Component } from 'react'

export default class BookInCart extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={this.props.count != 0 ? 'bookInCartVisible' : 'bookInCartNone'}>
        <p className='nameBookInCart'>{this.props.book.name}</p>
        <p className='priceBookInCart'>{this.props.book.price * this.props.count} р.</p>
        <div className='changeBlockBooksInCart'>
          <button className='changeAmountBookInCart' onClick={() => this.props.DeleteBookInCart(this.props.book)}>-</button>
          <p className='sumOneBookInCart'>{this.props.count}</p>
          <button className='changeAmountBookInCart' onClick={() => this.props.AddBookInCart(this.props.book)}>+</button>
        </div>
      </div>
    )
  }
}
