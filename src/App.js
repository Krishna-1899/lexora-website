import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import WhoWeAre from './components/pages/WhoWeAre';
import Contact from './components/pages/Contact';
import Catalog from './components/pages/Catalog';
import LX1ProductPage from './components/pages/LX1ProductPage';
import LX2ProductPage from './components/pages/LX2ProductPage';
import LX3ProductPage from './components/pages/LX3ProductPage';
import LX4ProductPage from './components/pages/LX4ProductPage';
import BlockJointMortarProductPage from './components/pages/BlockJointMortar';
import PUL29ProductPage from './components/pages/PUL29ProductPage';
import LX3WhiteProductPage from './components/pages/LX3WhiteProductPage';
import LX4WhiteProductPage from './components/pages/LX4WhiteProductPage';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';
import ScrollToTop from './components/ui/ScrollToTop';
import EpoxyGroutProductPage from './components/pages/EpoxyGrout';
import './App.css';
import GroutAdmix from './components/pages/GroutAdmix';
import TileGroutProductPage from './components/pages/TileGrout';
import SBRLatexPage from './components/pages/SBRLatex';
import TileCleanerPage from './components/pages/TileCleaner';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/lx-1" element={<LX1ProductPage />} />
        <Route path="/lx-2" element={<LX2ProductPage />} />
        <Route path="/lx-3" element={<LX3ProductPage />} />
        <Route path="/lx-4" element={<LX4ProductPage />} />
        <Route path="/lx-3-white" element={<LX3WhiteProductPage />} />
        <Route path="/lx-4-white" element={<LX4WhiteProductPage />} />
        <Route path="/pu-l29" element={<PUL29ProductPage />} />
        <Route path="/block-jointing-mortar" element={<BlockJointMortarProductPage />} />
        <Route path="/epoxy-grout" element={<EpoxyGroutProductPage />} />
        <Route path="/grout-admix" element={<GroutAdmix/>} />
        <Route path="/tile-grout" element={<TileGroutProductPage/>} />
        <Route path="/sbr-latex" element={<SBRLatexPage/>}/> 
        <Route path="/tile-cleaner" element={<TileCleanerPage/>}/> 
        {/* Add more routes here as needed */}
      </Routes>
      
      {/* Floating WhatsApp Button - appears on all pages */}
      <FloatingWhatsApp />
    </Router>
  );
}

export default App;
