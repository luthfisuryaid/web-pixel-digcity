import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DigCityLogo from '../assets/images/digcity-logo'; // Menggunakan logo yang telah kita buat

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b-4 border-digcity-orange">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <DigCityLogo className="h-16 w-auto mr-2" />
            <span className="font-pixel text-digcity-orange text-xl hidden md:block">DIGCITY</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="font-pixel text-digcity-teal hover:text-digcity-orange transition-colors duration-300">
              HOME
            </Link>
            <Link to="/about" className="font-pixel text-digcity-teal hover:text-digcity-orange transition-colors duration-300">
              ABOUT
            </Link>
            <Link to="/activities" className="font-pixel text-digcity-teal hover:text-digcity-orange transition-colors duration-300">
              ACTIVITIES
            </Link>
            <Link to="/contact" className="font-pixel text-digcity-teal hover:text-digcity-orange transition-colors duration-300">
              CONTACT
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden pixel-border p-2 bg-digcity-yellow text-black"
          >
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black mb-1"></div>
            <div className="w-6 h-0.5 bg-black"></div>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white pixel-border p-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-pixel text-digcity-teal hover:text-digcity-orange transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link 
                to="/about" 
                className="font-pixel text-digcity-teal hover:text-digcity-orange transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                ABOUT
              </Link>
              <Link 
                to="/activities" 
                className="font-pixel text-digcity-teal hover:text-digcity-orange transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                ACTIVITIES
              </Link>
              <Link 
                to="/contact" 
                className="font-pixel text-digcity-teal hover:text-digcity-orange transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
