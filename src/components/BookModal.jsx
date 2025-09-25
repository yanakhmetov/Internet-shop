import React, { Component } from 'react'

export default class BookModal1 extends Component {
  render() {
    const { open, book, onClose, onAddToCart } = this.props
    if (!open || !book) return null

    return (
      <div className="modalOverlay" onClick={onClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="modalClose" onClick={onClose} aria-label="Закрыть">×</button>

          <div className="modalBody">
            <div className="modalImage">
              <img src={book.image} alt={book.name} />
            </div>

            <div className="modalInfo">
              <h2 className="modalTitle">{book.name}</h2>
              <p className="modalDesc">{book.annotation}</p>

              <div className="modalBuy">
                <div className="modalPrice">Цена: {book.price} р.</div>
                <button
                  className="modalAddBtn"
                  onClick={() => onAddToCart && onAddToCart(book)}
                >
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
