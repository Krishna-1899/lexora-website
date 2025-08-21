import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import WhoWeAre from './components/pages/WhoWeAre';
import Contact from './components/pages/Contact';
import CX1ProductPage from './components/pages/CX1ProductPage';
import CX2ProductPage from './components/pages/CX2ProductPage';
import VX1ProductPage from './components/pages/VX1ProductPage';
import LX4ProductPage from './components/pages/VX2ProductPage';
import EX5ProductPage from './components/pages/EX5ProductPage';
import PUA100ProductPage from './components/pages/PUA100ProductPage';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lx-1" element={<CX1ProductPage />} />
        <Route path="/lx-2" element={<CX2ProductPage />} />
        <Route path="/lx-3" element={<VX1ProductPage />} />
        <Route path="/lx-4" element={<LX4ProductPage />} />
        <Route path="/pu-l29" element={<PUA100ProductPage />} />
        {/* Add more routes here as needed */}
      </Routes>
      
      {/* Floating WhatsApp Button - appears on all pages */}
      <FloatingWhatsApp />
    </Router>
  );
}

export default App;
