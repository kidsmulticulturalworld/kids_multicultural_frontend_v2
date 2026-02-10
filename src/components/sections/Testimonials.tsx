/**
 * Testimonials Section
 * Parent testimonials carousel
 */

'use client';

import React, { useState } from 'react';
import Cloud from '../ui/Cloud';
import Button from '../ui/Button';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Array<{
    type: 'image' | 'text';
    src?: string;
    text?: string;
    color?: string;
    stars?: number;
  }> = [
    {
      type: 'image',
      src: '/images/testimonial-1.jpg',
    },
    {
      type: 'image',
      src: '/images/testimonial-2.jpg',
    },
    {
      type: 'image',
      src: '/images/testimonial-3.jpg',
    },
    {
      type: 'text',
      text: "She used to be shy. Now she's hosting events at her school. Thank you KMW!",
      color: 'bg-[#3491E8]/20',
      stars: 5,
    },
    {
      type: 'image',
      src: '/images/testimonial-4.jpg',
    },
    {
      type: 'text',
      text: "She used to be shy. Now she's hosting events at her school. Thank you KMW!",
      color: 'bg-orange-200',
      stars: 5,
    },
    {
      type: 'text',
      text: "She used to be shy. Now she's hosting events at her school. Thank you KMW!",
      color: 'bg-green-200',
      stars: 5,
    },
    {
      type: 'image',
      src: '/images/testimonial-5.jpg',
    },
    {
      type: 'image',
      src: '/images/testimonial-6.jpg',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-white relative">
      <Cloud position="top" color="#E8E8E8" size="large" />
      
      {/* Decorative Icons */}
      <div className="absolute top-20 right-20 w-12 h-12 opacity-20">
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      <div className="absolute bottom-20 left-20 w-10 h-10 opacity-20">
        <svg viewBox="0 0 24 24" fill="currentColor" className="text-red-400">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl cherry-bomb-one-regular text-center mb-4">
          What <span className="text-[#3491E8]">Parents Are Saying</span>
        </h2>
        <p className="text-center text-[#777777] max-w-3xl mx-auto mb-12 text-lg">
          Hear real-life impact stories from parents whose children have grown in confidence, creativity, and cultural awareness through Kids Multicultural World.
        </p>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  {testimonial.type === 'image' ? (
                    <div className="aspect-[4/3] bg-gradient-to-br from-[#3491E8]/20 to-[#2C4F7A]/20 rounded-lg flex items-center justify-center">
                      <span className="text-6xl">👶</span>
                    </div>
                  ) : (
                    <div className={`${testimonial.color} p-8 rounded-lg h-full flex flex-col justify-between`}>
                      <div>
                        {testimonial.stars && (
                          <div className="flex gap-1 mb-4">
                            {Array.from({ length: testimonial.stars }).map((_, i) => (
                              <span key={i} className="text-yellow-400 text-2xl">★</span>
                            ))}
                          </div>
                        )}
                        <p className="text-[#777777] text-lg mb-6">
                          {testimonial.text}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Learn More
                      </Button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-[#E8E8E8] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-[#E8E8E8] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <Cloud position="bottom" color="#E8E8E8" size="large" />
    </section>
  );
};

export default Testimonials;

