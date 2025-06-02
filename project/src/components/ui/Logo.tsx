import React from 'react';
import { Plane } from 'lucide-react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', light = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <Plane 
        className={`h-6 w-6 mr-2 ${light ? 'text-white' : 'text-primary-500'}`} 
        strokeWidth={2.5} 
      />
      <span className={`font-bold text-xl ${light ? 'text-white' : 'text-gray-900'}`}>
        Travel<span className="text-primary-500">Explorer</span>
      </span>
    </div>
  );
};

export default Logo;