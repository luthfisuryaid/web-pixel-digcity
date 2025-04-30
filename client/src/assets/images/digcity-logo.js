import React from 'react';

const DigCityLogo = ({ className }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 800 800" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ imageRendering: 'pixelated' }}
    >
      {/* Logo Elements - Yellow Arrow */}
      <path d="M280,300 L400,400 L280,500 L320,400 Z" fill="#FFCD00"/>
      
      {/* Logo Elements - Blue Arrow with Dot */}
      <path d="M520,300 L400,400 L520,500 L480,400 Z" fill="#00B7E5"/>
      <circle cx="430" cy="470" r="25" fill="#008999"/>
      
      {/* Pixel Dots */}
      <circle cx="240" cy="400" r="15" fill="#FF9D00"/>
      <circle cx="560" cy="400" r="15" fill="#FF9D00"/>
    </svg>
  );
};

export default DigCityLogo;
