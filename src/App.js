import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav'
import Home from './pages/Home';
import Hero from './Components/Hero';
import Burgers from './Components/Burgers';
import Cart from './pages/Cart';

function App() {
  return (
  <div className='px-8'>
    <Router>
      <Nav />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      
    </Router>
  </div>
  

  
  );
}

export default App;
