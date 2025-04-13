import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import { About } from './components/About/About';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/Contact/Contact';
import Certifications from './components/Certifications/Certifications';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MyWork />
      <Certifications />
      <Contact />
    </>
  );
}

export default App;
