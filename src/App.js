import React from 'react';
import './App.css';
import Nav from './Components/Nav'
import Hero from './Components/Hero';
import Burgers from './Components/Burgers';
function App() {
  return (
    <div className='px-8'>
     <Nav /> 
     <Hero /> 
     <Burgers />
     </div>
  
  );
}

export default App;
