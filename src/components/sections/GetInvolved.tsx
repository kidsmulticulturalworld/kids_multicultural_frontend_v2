/**
 * Get Involved Section
 * Two cards for registration and support
 */

import React from 'react';
import Cloud from '../ui/Cloud';
import Button from '../ui/Button';

const GetInvolved = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 relative overflow-hidden">
      <Cloud position="top" color="white" size="large" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl cherry-bomb-one-regular text-center mb-4 text-white">
          Get Involved
        </h2>
        <p className="text-center text-white/90 max-w-3xl mx-auto mb-12 text-lg">
          We invite you to empower children through culture, creativity, and community. Whether you're a volunteer, donor, educator, or supporter — there's a place for you at Kids Multicultural World.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Register Your Child Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-video bg-gradient-to-br from-[#3491E8]/30 to-[#2C4F7A]/30 flex items-center justify-center">
              <span className="text-6xl">👶</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl cherry-bomb-one-regular text-[#2C4F7A] mb-4">
                Register Your Child
              </h3>
              <p className="text-[#777777] mb-6">
                Now enrolling for our new programs.
              </p>
              <Button variant="primary" className="w-full">
                Register now
              </Button>
            </div>
          </div>

          {/* Support Our Work Card */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-video bg-gradient-to-br from-[#3491E8]/30 to-[#2C4F7A]/30 flex items-center justify-center">
              <span className="text-6xl">🇺🇸</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl cherry-bomb-one-regular text-[#2C4F7A] mb-4">
                Support our work
              </h3>
              <p className="text-[#777777] mb-6">
                Help us reach around the world.
              </p>
              <Button variant="primary" className="w-full">
                View ways
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Cloud position="bottom" color="white" size="large" />
    </section>
  );
};

export default GetInvolved;

