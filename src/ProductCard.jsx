/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
function ProductCard({ cart }) {
    return (
        <div>
            {cart.map((product, index) => (
                <div className="product-card" key={index}>
                    <img src={product.image} alt={product.title} />
                    <div className="product-info">
                        <h2>{product.title}</h2>
                        <p>by {product.author}</p>
                        <p>List Price: ${product.listPrice}</p>
                        <p>Low Price: ${product.lowPrice}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductCard;
