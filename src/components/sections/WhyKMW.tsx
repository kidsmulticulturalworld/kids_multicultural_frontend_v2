/**
 * Why Kids Multicultural World Section
 * Features cards with benefits
 */

import React from 'react';
import Cloud from '../ui/Cloud';

const WhyKMW = () => {
  const benefits = [
    {
      title: 'Real World Exposure',
      description: 'Kids get real-world experience in fashion, media, and arts',
      image: '/images/benefit-1.jpg', // Placeholder
    },
    {
      title: 'Real World Experience',
      description: 'Hands-on learning opportunities in diverse cultural settings',
      image: '/images/benefit-2.jpg', // Placeholder
    },
    {
      title: 'Trusted by Families',
      description: 'Loved and trusted by thousands of families worldwide',
      image: '/images/benefit-3.jpg', // Placeholder
    },
    {
      title: 'Grow and Celebrated',
      description: 'Every child is celebrated for their unique talents and culture',
      image: '/images/benefit-4.jpg', // Placeholder
    },
  ];

  return (
    <section className="py-16 bg-white relative">
      <Cloud position="top" color="#E8E8E8" size="large" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl cherry-bomb-one-regular text-center mb-4">
          Why <span className="text-[#3491E8]">Kids Multicultural World</span>?
        </h2>
        <p className="text-center text-[#777777] max-w-3xl mx-auto mb-12 text-lg">
          Because embracing cultural diversity, fashion, and media can equip kids with exposure, experience, and education. At KMW, we don't just teach — we ignite a lifelong love for diversity and creativity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square bg-gradient-to-br from-[#3491E8]/20 to-[#2C4F7A]/20 flex items-center justify-center">
                <div className="w-24 h-24 bg-[#3491E8]/30 rounded-full flex items-center justify-center">
                  <span className="text-4xl">👶</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl cherry-bomb-one-regular text-[#2C4F7A] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#777777] text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Cloud position="bottom" color="#E8E8E8" size="large" />
    </section>
  );
};

export default WhyKMW;

