/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import BookGrid from './Homepage/Homepage';
import Register from './Authentication/Register';
import Login from './Authentication/Login';
import BookDetails from './Bookdetails';
import ManageOrder from './manage_order'; 
import Cart from './cart'; 
import ProductCard from './ProductCard'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<BookGrid />} />
      <Route path="/BookGrid" element={<BookGrid />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/ManageOrder" element={<ManageOrder />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/ProductCard" element={<ProductCard />} />
      <Route path="/Bookdetails" element={<BookDetails />} />
    </Routes>
  );
}

export default App;
