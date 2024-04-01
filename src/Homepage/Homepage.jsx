// eslint-disable-next-line no-unused-vars
import React from 'react';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';
import card4 from '../assets/card4.png';
import card5 from '../assets/card5.png';
import card6 from '../assets/card6.png';
import card7 from '../assets/card7.png';
import card8 from '../assets/card8.png';
import card9 from  '../assets/card9.png';
import card10  from '../assets/card10.png';
import './Home.css';
import Navbar from './Navbar';


// eslint-disable-next-line react/prop-types
function BookCard({ title, author, listPrice, lowPrice, image }) {
    const addToCart = () => {
        const userEmail = 'taskin@gmail.com'; // Replace this with the actual user's email
        fetch('http://localhost:5000/add-to-cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: userEmail,
                book: {
                    title,
                    author,
                    listPrice,
                    lowPrice,
                    image,
                },
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Book added to cart successfully');
                } else {
                    alert('Failed to add book to cart');
                }
            })
            .catch(error => {
                console.error('Error adding book to cart:', error);
                alert('Failed to add book to cart');
            });
    };

    return (
        <>
        <Navbar/>
        <div className="book-card">
            <img src={image} alt={title} />
            <div className="book-info">
                <h2>{title}</h2>
                <p>by {author}</p>
                <p>
                    List Price: ${listPrice} <br />
                    As low as: ${lowPrice}
                </p>
                <button onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
        </>
    );
}


const BookGrid = () => {
    const books = [
        {
            title: 'Leaves And Wonder',
            author: 'Laura Phantom',
            listPrice: 99.00,
            lowPrice: 80.00,
            image: card1,
        },
        {
            title: 'Dark Skies',
            author: 'Nancy Hoover',
            listPrice: 40.00,
            lowPrice: 20.00,
            image: card2,
        },
        {
            title: 'Vanish in the Sunset',
            author: 'Julian Button',
            listPrice: 55.00,
            lowPrice: 35.00,
            image: card3,
        },
        {
          title: 'Cotton candy',
          author: 'Abby Muscles',
          listPrice: 45.00,
          lowPrice: 30.00,
          image:card4,
        },
        {
          title: 'Rock in the Oceans',
          author: 'Ron parker',
          listPrice: 45.00,
          lowPrice: 30.00,
          image:card5,
        },
        {
          title: 'The Merchant Of Venis',
          author: 'William Shakespeare',
          listPrice: 450.00,
          lowPrice: 300.00,
          image:card6,
        },
        {
          title: 'Gitanjali',
          author: 'Rabindranath Tagore',
          listPrice: 250.00,
          lowPrice: 200.00,
          image:card7,
        },
        {
          title: 'The Story of My Experiments with Truth',
          author: 'Mahatma Gandhi',
          listPrice: 200.00,
          lowPrice: 175.00,
          image:card8,
        },
        {
            title: 'The Home and The World',
            author: 'Rabindranath Tagore',
            listPrice: 220.00,
            lowPrice: 195.00,
            image:card9,
        },
        {
            title: 'Runway Zero Eight',
            author: 'Arthur Hailey',
            listPrice: 120.00,
            lowPrice: 100.00,
            image:card10,
        },
    ];

    return (
        <div className="book-grid">
            {books.map((book) => (
                <BookCard key={book.title} {...book} />
            ))}
        </div>
    );
};

export default BookGrid;
