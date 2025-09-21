
import React from 'react';

interface LogoProps {
  className?: string;
  textColor?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'h-10', textColor = 'text-dark' }) => {
  return (
    <div className="flex items-center gap-3">
      <img src="/logo.png" alt="Logo" className={className} />
      <span className={`font-bold text-xl ${textColor}`}>chatlilo</span>
    </div>
  );
};

export default Logo;
