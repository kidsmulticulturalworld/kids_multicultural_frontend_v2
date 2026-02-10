/**
 * Hero Section Component
 * Main hero section with background image and CTA
 */

'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg-image.svg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#2C4F7A]/90"></div>
      </div>

      {/* Decorative Icons */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Butterfly */}
        <div className="absolute top-20 left-10 w-12 h-12 opacity-30">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-white">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-2 12v-1h4v1c0 .74-.4 1.4-1 1.75V17h-2v-1.25c-.6-.35-1-1.01-1-1.75zm1-9.93c-3.94.49-7 3.85-7 7.93 0 1.67.69 3.18 1.81 4.26C6.5 16.5 7 15.5 7 14.5c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1-.5 2-1.19 2.76C17.31 16.18 18 14.67 18 13c0-4.08-3.06-7.44-7-7.93z"/>
          </svg>
        </div>
        {/* Camera */}
        <div className="absolute top-32 right-20 w-10 h-10 opacity-30">
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.52 1.21 2.69 2.72 2.97v1.52c-2.1-.2-3.57-1.04-3.57-2.81 0-1.68 1.21-2.85 2.72-2.97V5H9.1v1.69c1.38.32 2.49 1.3 2.49 2.81 0 1.52-1.11 2.49-2.49 2.81v1.52c1.9.2 3.57 1.04 3.57 2.81 0 1.68-1.67 2.61-3.57 2.81V19h1.71v-1.52c1.38-.32 2.49-1.3 2.49-2.81 0-1.52-1.11-2.49-2.49-2.81V10.14z"/>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-6xl lg:text-7xl cherry-bomb-one-regular mb-6 leading-tight">
          Raising <span className="text-[#3491E8]">Global Stars</span>.
          <br />
          Rooted in <span className="text-[#3491E8]">Culture</span>.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          KMW is an international youth academy celebrating diversity through fashion, media, and the arts — helping kids grow in confidence, culture, and creativity.
        </p>
        <Button variant="primary" size="lg" className="bg-[#3491E8] hover:bg-[#2C4F7A]">
          Register your kid
        </Button>
      </div>

      {/* Bottom Children Images */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center gap-8 px-4">
        <div className="w-32 h-40 md:w-40 md:h-48 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent rounded-t-full"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-24 md:w-32 md:h-32 bg-[#3491E8]/20 rounded-full"></div>
        </div>
        <div className="w-32 h-40 md:w-40 md:h-48 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent rounded-t-full"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-24 md:w-32 md:h-32 bg-[#3491E8]/20 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

