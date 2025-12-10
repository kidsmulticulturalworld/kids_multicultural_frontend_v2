/**
 * Explore Our World Section
 * Tabbed interface for Magazines, Classes, Events, Shop
 */

'use client';

import React, { useState } from 'react';
import Button from '../ui/Button';

const ExploreWorld = () => {
  const [activeTab, setActiveTab] = useState('magazines');

  const tabs = [
    { id: 'magazines', label: 'Magazines' },
    { id: 'classes', label: 'Classes' },
    { id: 'events', label: 'Events' },
    { id: 'shop', label: 'Shop' },
  ];

  const tabContent = {
    magazines: {
      title: 'Magazine',
      description: 'Dive into vibrant stories, learn new cultures, and be inspired by diverse young minds and their crown-worthy Capes. Learn and celebrate the world — one page at a time.',
      button1: 'View all magazines',
      button2: 'Subscribe now',
      images: ['/images/magazine-1.jpg', '/images/magazine-2.jpg', '/images/magazine-3.jpg'],
    },
    classes: {
      title: 'Classes',
      description: 'Join our diverse range of classes designed to help kids explore their talents and cultural heritage.',
      button1: 'View all classes',
      button2: 'Enroll now',
      images: ['/images/class-1.jpg', '/images/class-2.jpg', '/images/class-3.jpg'],
    },
    events: {
      title: 'Events',
      description: 'Discover exciting events and celebrations that bring together kids from around the world.',
      button1: 'View all events',
      button2: 'Register now',
      images: ['/images/event-1.jpg', '/images/event-2.jpg', '/images/event-3.jpg'],
    },
    shop: {
      title: 'Shop',
      description: 'Browse our collection of cultural merchandise and support the KMW community.',
      button1: 'View all products',
      button2: 'Shop now',
      images: ['/images/shop-1.jpg', '/images/shop-2.jpg', '/images/shop-3.jpg'],
    },
  };

  const content = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl cherry-bomb-one-regular text-center mb-4">
          Explore <span className="text-[#3491E8]">Our World</span>
        </h2>
        <p className="text-center text-[#777777] max-w-3xl mx-auto mb-12 text-lg">
          Dive into a universe of color, culture, and creativity. From hands-on classes to global celebrations.
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-[#E8E8E8]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-[#3491E8] border-b-2 border-[#3491E8]'
                    : 'text-[#777777] hover:text-[#3491E8]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl cherry-bomb-one-regular text-[#2C4F7A] mb-4">
                {content.title}
              </h3>
              <p className="text-[#777777] mb-6 leading-relaxed">
                {content.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">{content.button1}</Button>
                <Button variant="outline">{content.button2}</Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {content.images.map((img, index) => (
                <div
                  key={index}
                  className="aspect-[3/4] bg-gradient-to-br from-[#3491E8]/20 to-[#2C4F7A]/20 rounded-lg flex items-center justify-center"
                >
                  <span className="text-2xl">📚</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreWorld;

