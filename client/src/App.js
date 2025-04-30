import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';

// Import pages
import Home from './pages/Home';
import About from './pages/About';
import Activities from './pages/Activities';
import Contact from './pages/Contact';

// Import components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PixelIsland from './components/PixelIsland';

function App() {
  return (
    <div className="App relative overflow-hidden bg-gradient-to-b from-digcity-blue/20 to-digcity-teal/20 min-h-screen">
      {/* Pixel art background elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <PixelIsland className="absolute -bottom-16 -left-16 w-64 h-64 opacity-50" />
        <PixelIsland className="absolute top-1/4 -right-16 w-48 h-48 opacity-50" />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
