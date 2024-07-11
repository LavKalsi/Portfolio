// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomeScreen from './components/HomeScreen';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Resume from './components/Resume';
import About from './components/About';
import Certificate from './components/Certificates';
import Experience from './components/Experience';
import CertificateDetail from './components/CertificateDetail';
import AndroidAppDetail from './components/AndroidAppDetail'; // Added import for AndroidAppDetail

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/Portfolio" element={
            <>
              <HomeScreen />
              <About />
              <Education />
              <Skills />
              <Experience />
              <Projects />
              <Certificate />
              <Contact />
            </>
          } />
          <Route path="/resume" element={<Resume />} />
          <Route path="/experience/:id" element={<CertificateDetail />} />
          <Route path="/android-app-detail" element={<AndroidAppDetail />} /> {/* Added Route for AndroidAppDetail */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
