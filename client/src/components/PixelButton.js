import React from 'react';
import { motion } from 'framer-motion';

/**
 * PixelButton Component - Tombol bergaya pixel art
 * @param {Object} props - Component props
 * @param {string} props.children - Teks tombol
 * @param {string} props.className - Kelas CSS tambahan
 * @param {string} props.color - Warna tombol (orange, yellow, blue, teal)
 * @param {Function} props.onClick - Fungsi yang dipanggil saat tombol diklik
 * @param {string} props.type - Tipe tombol (button, submit, reset)
 * @param {boolean} props.disabled - Status disabled tombol
 */
const PixelButton = ({ 
  children, 
  className = '', 
  color = 'orange',
  onClick, 
  type = 'button',
  disabled = false
}) => {
  // Map color options to tailwind classes
  const colorClasses = {
    orange: 'bg-digcity-orange text-white hover:bg-digcity-yellow hover:text-black',
    yellow: 'bg-digcity-yellow text-black hover:bg-digcity-orange hover:text-white',
    blue: 'bg-digcity-blue text-white hover:bg-digcity-teal hover:text-white',
    teal: 'bg-digcity-teal text-white hover:bg-digcity-blue hover:text-white',
  };
  
  const baseClasses = 'font-pixel px-6 py-3 transition duration-300 border-2 border-b-4 border-r-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-none focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${colorClasses[color]} ${className}`}
      whileTap={{ scale: 0.95 }}
      whileHover={{ y: -3 }}
    >
      {children}
    </motion.button>
  );
};

export default PixelButton;
