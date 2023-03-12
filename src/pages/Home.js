import React from 'react'
import Hero from '../Components/Hero';
import Burgers from '../Components/Burgers';
import Nav from '../Components/Nav';
function Home() {
    return (
      <div>
        <Nav />
        <Hero />
        <Burgers />
        
      </div>
    );
  }
  
  export default Home;