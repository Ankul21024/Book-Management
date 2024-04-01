import {   Route, Routes } from 'react-router-dom';
import './App.css';
import BookGrid from './Homepage/Homepage';
import Register from './Authentication/Register';
import Login from './Authentication/Login';
import BookDetails from './Bookdetails';


function App() {
  return (
    <>
     
  
      <Routes>
      <Route path="/" element={<BookGrid />} />
        <Route path="/BookGrid" element={<BookGrid />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={< Login />} />
      <Route path="/BookGrid" element={<manage order/>}/>
      <Route path="/Bookdetails" element={<BookDetails/>}/>
      
    </Routes>
    </>
    
   
  );
}

export default App;
