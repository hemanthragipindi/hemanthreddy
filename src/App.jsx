import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Experience from './components/Experience'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
