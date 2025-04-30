import React from 'react';

const PixelIsland = ({ className }) => {
  return (
    <div className={`${className} pixel-island`}>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        style={{ imageRendering: 'pixelated' }}
      >
        {/* Sky background */}
        <rect width="100" height="60" fill="#87CEEB" />
        
        {/* Sun */}
        <rect x="70" y="10" width="10" height="10" fill="#FFCD00" />
        <rect x="80" y="10" width="10" height="10" fill="#FFCD00" />
        <rect x="70" y="20" width="10" height="10" fill="#FFCD00" />
        <rect x="80" y="20" width="10" height="10" fill="#FFCD00" />
        
        {/* Water */}
        <rect width="100" height="40" y="60" fill="#00B7E5" />
        
        {/* Island base */}
        <rect x="10" y="50" width="80" height="10" fill="#008999" />
        <rect x="20" y="60" width="60" height="10" fill="#008999" />
        <rect x="30" y="70" width="40" height="10" fill="#008999" />
        
        {/* Green top of island */}
        <rect x="20" y="40" width="60" height="10" fill="#4CAF50" />
        <rect x="30" y="30" width="40" height="10" fill="#4CAF50" />
        
        {/* Buildings - Digital city theme */}
        <rect x="35" y="20" width="10" height="10" fill="#FF9D00" />
        <rect x="45" y="10" width="10" height="20" fill="#FFCD00" />
        <rect x="55" y="20" width="10" height="10" fill="#FF9D00" />
        
        {/* Windows */}
        <rect x="37" y="22" width="2" height="2" fill="#FFFFFF" />
        <rect x="41" y="22" width="2" height="2" fill="#FFFFFF" />
        <rect x="37" y="26" width="2" height="2" fill="#FFFFFF" />
        <rect x="41" y="26" width="2" height="2" fill="#FFFFFF" />
        
        <rect x="47" y="12" width="2" height="2" fill="#FFFFFF" />
        <rect x="51" y="12" width="2" height="2" fill="#FFFFFF" />
        <rect x="47" y="16" width="2" height="2" fill="#FFFFFF" />
        <rect x="51" y="16" width="2" height="2" fill="#FFFFFF" />
        <rect x="47" y="20" width="2" height="2" fill="#FFFFFF" />
        <rect x="51" y="20" width="2" height="2" fill="#FFFFFF" />
        <rect x="47" y="24" width="2" height="2" fill="#FFFFFF" />
        <rect x="51" y="24" width="2" height="2" fill="#FFFFFF" />
        
        <rect x="57" y="22" width="2" height="2" fill="#FFFFFF" />
        <rect x="61" y="22" width="2" height="2" fill="#FFFFFF" />
        <rect x="57" y="26" width="2" height="2" fill="#FFFFFF" />
        <rect x="61" y="26" width="2" height="2" fill="#FFFFFF" />
      </svg>
    </div>
  );
};

export default PixelIsland;
