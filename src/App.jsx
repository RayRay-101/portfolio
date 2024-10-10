import React from 'react'
import Home from './sections/Home'
import Navbar from './sections/Navbar'
import Portfolio from './sections/Portfolio'
import About from './sections/About'
import Contact from './sections/Contact'
import Resume from './sections/Resume'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import ScrollToTop from './sections/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App