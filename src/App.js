import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import WhoWeAre from './components/pages/WhoWeAre';
import Contact from './components/pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add more routes here as needed */}
      </Routes>
    </Router>
  );
}

export default App;
