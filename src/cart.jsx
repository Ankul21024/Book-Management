// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../src/Homepage/Navbar';
// eslint-disable-next-line no-unused-vars
import ProductCard from './ProductCard';

function Cart() {
    const userData = {
        "_id": { "$oid": "6608f89256a919a187cd1999" },
        "email": "taskin@gmail.com",
        "password": "121212",
        "lastLogin": { "$date": "2024-03-31T05:47:00.643Z" },
        "cart": [
            {
                "title": "Leaves And Wonder",
                "author": "Laura Phantom",
                "listPrice": 99,
                "lowPrice": 80,
                "image": "/src/assets/card1.png"
            },
            {
                "title": "Dark Skies",
                "author": "Nancy Hoover",
                "listPrice": 40,
                "lowPrice": 20,
                "image": "/src/assets/card2.png"
            },
            {
                "title": "Vanish in the Sunset",
                "author": "Julian Button",
                "listPrice": 55,
                "lowPrice": 35,
                "image": "/src/assets/card3.png"
            },
            {
                "title": "Leaves And Wonder",
                "author": "Laura Phantom",
                "listPrice": 99,
                "lowPrice": 80,
                "image": "/src/assets/card1.png"
            },
            {
                "title": "Dark Skies",
                "author": "Nancy Hoover",
                "listPrice": 40,
                "lowPrice": 20,
                "image": "/src/assets/card2.png"
            },
            {
                "title": "Vanish in the Sunset",
                "author": "Julian Button",
                "listPrice": 55,
                "lowPrice": 35,
                "image": "/src/assets/card3.png"
            },
        ]
    };

    return (
        <div>
            <Navbar userEmail={userData.email} />
            <div className="book-grid">
                {userData.cart.map((product, index) => (
                    <div className="book-card" key={index}>
                        <img src={product.image} alt={product.title} />
                        <div className="book-info">
                            <h2>{product.title}</h2>
                            <p>by {product.author}</p>
                            <p>List Price: ${product.listPrice}</p>
                            <p>Low Price: ${product.lowPrice}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;
