/**
 * Header Component
 * Main navigation header with search and cart
*/

'use client';

import { FiSearch } from 'react-icons/fi'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../ui/Button';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const classesItems = [
    { label: 'Modeling', href: '/classes/modeling' },
    { label: 'Acting', href: '/classes/acting' },
    { label: 'Life Skills', href: '/classes/life-skills' },
  ];

  const eventsItems = [
    { label: 'Upcoming Events', href: '/events/upcoming' },
    { label: 'Ongoing Events', href: '/events/ongoing' },
  ];

  const shopItems = [
    { label: 'Hoodie', href: '/shop/hoodie' },
    { label: 'Hair Bonnet', href: '/shop/hair-bonnet' },
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="w-full flex flex-col gap-4 p-2 bg-[#1F3F66]">
      {/* Top Search Bar */}


      <div className="px-16">
        <div className=" mx-auto flex items-center justify-between gap-4">
  
          <div className="flex items-center rounded-xl px-2 pb-2 pt-1  justify-center w-full bg-[#2C4F7A]">

      
            <div className=" flex items-center justify-center m-auto ">

              <FiSearch className="w-4 h-4 text-[#FFFFFF66]" />
            </div>
            
          <div className="w-full flex items-center justify-center  px-3 -mb-1.5">


            <input
              type="text"
              placeholder="Search for anything on our website"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full  rounded-lg text-[1.2em] bg-[#2C4F7A] text-[#FFFFFF66] placeholder-[#FFFFFF66] border-0 focus:outline-none"
              />
          {/* Search Button */}
          <div className=" ">

          <button className="border p-2 border-[#FFFFFF66] text-[#FFFFFF] rounded-2xl hover:bg-[#2C4F7A] transition-colors font-medium">
            Search
          </button>
          </div>
          </div>
              </div>
          
          
      
          {/* Cart Button */}
          <button className="p-2.5 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>
        </div>
      </div>


<hr />


      {/* Main Navigation */}
      <div className="px-16">
        <div className=" mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/Logo.svg" alt="Logo" width={50} height={50} />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 bg-[#2C4F7A] p-2 rounded-xl relative" onMouseLeave={handleMouseLeave}>
            <Link href="/about" className="text-white hover:text-[#E8E8E8] transition-colors text-lg font-medium">
              About Us
            </Link>
            
            {/* Classes Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('classes')}
                onMouseEnter={() => setOpenDropdown('classes')}
                className="text-white hover:text-[#E8E8E8] transition-colors text-lg font-medium flex items-center gap-1"
              >
                Classes
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'classes' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#2C4F7A] rounded-lg shadow-lg z-50 overflow-hidden">
                  {classesItems.map((item, index) => (
                    <React.Fragment key={item.href}>
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 text-white hover:bg-[#1F3F66] transition-colors ${
                          index === 0 ? 'bg-[#1F3F66]' : ''
                        }`}
                      >
                        {item.label}
                      </Link>
                      {index < classesItems.length - 1 && (
                        <hr className="border-[#FFFFFF33]" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>

            <Link href="/magazines" className="text-white hover:text-[#E8E8E8] transition-colors text-lg font-medium">
              Magazines
            </Link>
            
            {/* Discover Events Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('events')}
                onMouseEnter={() => setOpenDropdown('events')}
                className="text-white hover:text-[#E8E8E8] transition-colors text-lg font-medium flex items-center gap-1"
              >
                Discover Events
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'events' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#2C4F7A] rounded-lg shadow-lg z-50 overflow-hidden">
                  {eventsItems.map((item, index) => (
                    <React.Fragment key={item.href}>
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 text-white hover:bg-[#1F3F66] transition-colors ${
                          index === 0 ? 'bg-[#1F3F66]' : ''
                        }`}
                      >
                        {item.label}
                      </Link>
                      {index < eventsItems.length - 1 && (
                        <hr className="border-[#FFFFFF33]" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
            
            {/* Shop Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('shop')}
                onMouseEnter={() => setOpenDropdown('shop')}
                className="text-white hover:text-[#E8E8E8] transition-colors text-lg font-medium"
              >
                Shop
              </button>
              {openDropdown === 'shop' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#2C4F7A] rounded-lg shadow-lg z-50 overflow-hidden">
                  {shopItems.map((item, index) => (
                    <React.Fragment key={item.href}>
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 text-white hover:bg-[#1F3F66] transition-colors ${
                          index === 0 ? 'bg-[#1F3F66]' : ''
                        }`}
                      >
                        {item.label}
                      </Link>
                      {index < shopItems.length - 1 && (
                        <hr className="border-[#FFFFFF33]" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
            
            <Link href="/kids" className="text-white hover:text-[#E8E8E8] transition-colors text-lg font-medium">
              Kids
            </Link>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-white hover:text-[#E8E8E8] transition-colors text-sm font-medium">
              Sign in
            </Link>
            <Button variant="secondary" size="md" className="bg-white text-[#3491E8] hover:bg-[#E8E8E8] rounded-lg px-4 py-2 text-sm font-medium">
              Enroll your kid
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

