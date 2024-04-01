/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// ManageOrder.js
import React, { useState, useEffect } from 'react';
import './manage.css';
import Navbar from './Homepage/Navbar';

function ProductCard({ title, author, price, image }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <div className="info">
        <h3>{title}</h3>
        <p>by {author}</p>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}

function ManageOrder() {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/get-cart-products')
      .then((response) => response.json())
      .then((data) => {
        setCartProducts(data.cartProducts);
      })
      .catch((error) => {
        console.error('Error fetching cart products:', error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="manage-order">
        <h2>Manage Order</h2>
        <div className="product-list">
          {cartProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ManageOrder;
