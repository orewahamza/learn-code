import React from 'react';

const Logo = ({ size = 40, className = "" }) => {
  return (
    <div 
      className={`relative flex items-center justify-center overflow-hidden rounded-[24%] bg-[#000000] shadow-lg border border-white/5 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg 
        viewBox="0 0 512 512" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-[70%] h-[70%]"
      >
        {/* L - Bold Red */}
        <path 
          d="M120 120V392H312" 
          stroke="#EF4444" 
          strokeWidth="75" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* / - Bold White */}
        <path 
          d="M210 440L300 72" 
          stroke="white" 
          strokeWidth="50" 
          strokeLinecap="round" 
        />
        
        {/* C - Bold Red */}
        <path 
          d="M440 180C420 120 320 120 280 256C240 392 350 440 440 380" 
          stroke="#EF4444" 
          strokeWidth="70" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default Logo;
