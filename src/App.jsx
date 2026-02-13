import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your pages
import Home_page from './pages/Home_page';
import About_me from './pages/About_me';
import Projects from './pages/Projects';
import CV from './pages/CV';
import Contact from './pages/Contact';


function App() {
  return (
    /* basename tells React to ignore the repo name in the URL for routing purposes */
    <Router basename="/Doyoung_An-portfolio">
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home_page />} />

        {/* Updated path to 'about_me' to match component and avoid space errors */}
        <Route path="/about_me" element={<About_me />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/CV" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;