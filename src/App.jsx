import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <div>
       <Navbar />
       <Hero />
       <About />
       <Services />
       <Education />
       <Contact />
    </div>
  )
}
