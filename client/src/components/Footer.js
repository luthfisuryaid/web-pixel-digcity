import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t-4 border-digcity-orange py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-pixel text-digcity-orange text-lg mb-4">DIGCITY</h3>
            <p className="text-gray-700 mb-4">
              Digital Business Student Society, wadah bagi mahasiswa Bisnis Digital untuk mengembangkan potensi dan berkarya.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-pixel text-digcity-orange text-lg mb-4">LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-digcity-teal hover:text-digcity-orange transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-digcity-teal hover:text-digcity-orange transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-digcity-teal hover:text-digcity-orange transition-colors duration-300">
                  Activities
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-digcity-teal hover:text-digcity-orange transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Divisions */}
          <div>
            <h3 className="font-pixel text-digcity-orange text-lg mb-4">DIVISIONS</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-digcity-teal">CMI (Creative Media Information)</span>
              </li>
              <li>
                <span className="text-digcity-teal">ECRAV (Economy Creative)</span>
              </li>
              <li>
                <span className="text-digcity-teal">POD (People Organizing and Development)</span>
              </li>
              <li>
                <span className="text-digcity-teal">PR (Public Relation)</span>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-pixel text-digcity-orange text-lg mb-4">CONTACT</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-digcity-teal mr-2">📍</span>
                <span>Universitas Ibn Khaldun Bogor</span>
              </li>
              <li className="flex items-start">
                <span className="text-digcity-teal mr-2">📧</span>
                <a href="mailto:digcity@example.com" className="text-digcity-teal hover:text-digcity-orange">
                  digcity@example.com
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-digcity-teal mr-2">📱</span>
                <a href="https://instagram.com/digcity" target="_blank" rel="noopener noreferrer" className="text-digcity-teal hover:text-digcity-orange">
                  @digcity
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-600 font-pixel">
            © {new Date().getFullYear()} DIGCITY. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-digcity-teal hover:text-digcity-orange transition-colors duration-300">
              <span className="text-2xl">📷</span>
            </a>
            <a href="#" className="text-digcity-teal hover:text-digcity-orange transition-colors duration-300">
              <span className="text-2xl">🐦</span>
            </a>
            <a href="#" className="text-digcity-teal hover:text-digcity-orange transition-colors duration-300">
              <span className="text-2xl">📱</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
