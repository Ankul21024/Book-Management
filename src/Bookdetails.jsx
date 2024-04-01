/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Bookdetail.css';
import Navbar from './Homepage/Navbar';

const BookDetails = ({ book }) => {
  if (!book) {
    return null; // Handle case when book is not provided
  }

  const {
    title,
    author,
    isbn,
    listPrice,
    prices,
    description,
  } = book;

  return (
    <>
      <Navbar />
      <div className="book-details">
        <h2 className="title">{title}</h2>
        <p className="Author">by {author}</p>
        <p className="isbn">ISBN: {isbn}</p>
        <p className="list-price">
          List Price: ${listPrice.toFixed(2)}
        </p>
        <table className="prices">
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {prices && prices.map((price, index) => (
              <tr key={index}>
                <td>{price.quantity}</td>
                <td>${price.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="description">{description}</p>
        <button className="add-to-cart">
          ADD TO CART
        </button>
      </div>
    </>
  );
};

export default BookDetails;
