/**
 * Press/Partners Section
 * Displays media outlet logos
 */

import React from 'react';

const PressPartners = () => {
  const partners = [
    { name: 'CBS 2', logo: 'O2' },
    { name: 'The Los Angeles Tribune', logo: 'LAT' },
    { name: 'WGN Radio', logo: 'WR' },
    { name: 'ABC7 Chicago', logo: 'ABC7' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 w-full border border-[#E8E8E8] rounded-lg hover:border-[#3491E8] transition-colors"
            >
              <span className="text-[#777777] font-semibold text-lg">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressPartners;

