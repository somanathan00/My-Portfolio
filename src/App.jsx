import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import { About } from './components/About/About'
import MyWork from './components/MyWork/MyWork'
import Contact from './components/Contact/Contact'


function App() {
  
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <MyWork/>
    <Contact/>
    
    </>
  )
}

export default App
