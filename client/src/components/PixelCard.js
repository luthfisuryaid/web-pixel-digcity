import React from 'react';
import { motion } from 'framer-motion';

/**
 * PixelCard Component - Card bergaya pixel art
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Content card
 * @param {string} props.className - Kelas CSS tambahan
 * @param {string} props.color - Warna border (orange, yellow, blue, teal, white)
 * @param {boolean} props.hoverable - Apakah card memiliki efek hover
 * @param {boolean} props.animate - Apakah card memiliki animasi
 */
const PixelCard = ({ 
  children, 
  className = '', 
  color = 'white',
  hoverable = false,
  animate = false 
}) => {
  // Map color options to tailwind classes for border
  const colorClasses = {
    orange: 'border-digcity-orange',
    yellow: 'border-digcity-yellow',
    blue: 'border-digcity-blue',
    teal: 'border-digcity-teal',
    white: 'border-black'
  };
  
  const hoverClasses = hoverable ? 'hover:translate-y-[-5px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] cursor-pointer' : '';
  
  const baseClasses = 'bg-white p-6 border-2 border-b-4 border-r-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] transition duration-300';
  
  return animate ? (
    <motion.div
      className={`${baseClasses} ${colorClasses[color]} ${hoverClasses} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  ) : (
    <div className={`${baseClasses} ${colorClasses[color]} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};

export default PixelCard;
