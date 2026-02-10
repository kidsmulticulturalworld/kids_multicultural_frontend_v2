/**
 * Impact Section
 * Shows statistics and gallery of kids
 */

import React from 'react';
import Cloud from '../ui/Cloud';
import Button from '../ui/Button';

const Impact = () => {
  const galleryImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    alt: `Impact image ${i + 1}`,
  }));

  return (
    <section className="py-16 bg-[#3491E8]/10 relative overflow-hidden">
      <Cloud position="top" color="white" size="large" />
      
      {/* Decorative Stars */}
      <div className="absolute top-10 left-10 w-16 h-16 opacity-20">
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#2C4F7A]">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 w-16 h-16 opacity-20">
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-[#2C4F7A]">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl cherry-bomb-one-regular text-center mb-4">
          Impacted Over <span className="text-[#3491E8]">38,000 Kids Globally</span>
        </h2>
        <p className="text-center text-[#777777] max-w-3xl mx-auto mb-12 text-lg">
          Our mission is to inspire a new generation — one star at a time, every day.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="aspect-square bg-gradient-to-br from-[#3491E8]/30 to-[#2C4F7A]/30 rounded-lg flex items-center justify-center hover:scale-105 transition-transform"
            >
              <span className="text-4xl">👶</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" size="lg">
            View Kids Gallery
          </Button>
        </div>
      </div>

      <Cloud position="bottom" color="white" size="large" />
    </section>
  );
};

export default Impact;

