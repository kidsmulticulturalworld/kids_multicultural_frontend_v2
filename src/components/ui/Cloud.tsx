/**
 * Cloud Component
 * Reusable cloud decoration with customizable colors and positions
 */

import React from 'react';

interface CloudProps {
  className?: string;
  color?: string;
  position?: 'top' | 'bottom' | 'both';
  size?: 'small' | 'medium' | 'large';
}

const Cloud: React.FC<CloudProps> = ({
  className = '',
  color = '#2C4F7A',
  position = 'both',
  size = 'medium',
}) => {
  const sizeClasses = {
    small: 'h-8',
    medium: 'h-12',
    large: 'h-16',
  };

  const cloudPath = `M0,20 Q10,0 20,10 T40,10 Q50,0 60,10 T80,10 Q90,0 100,20 T100,40 Q90,60 80,50 T60,50 Q50,60 40,50 T20,50 Q10,60 0,40 Z`;

  return (
    <div className={`cloud-container ${className}`}>
      {(position === 'top' || position === 'both') && (
        <div className={`absolute top-0 left-0 right-0 overflow-hidden ${sizeClasses[size]}`}>
          <svg
            viewBox="0 0 100 60"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d={cloudPath}
              fill={color}
              opacity="0.8"
            />
          </svg>
        </div>
      )}
      {(position === 'bottom' || position === 'both') && (
        <div className={`absolute bottom-0 left-0 right-0 overflow-hidden ${sizeClasses[size]}`}>
          <svg
            viewBox="0 0 100 60"
            className="w-full h-full rotate-180"
            preserveAspectRatio="none"
          >
            <path
              d={cloudPath}
              fill={color}
              opacity="0.8"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Cloud;

