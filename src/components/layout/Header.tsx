'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPhone, FaHome } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className={`flex items-center space-x-3 group ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
          >
            <div className="relative h-[3.6rem] flex items-center">
              <FaHome 
                className={`text-[2.8rem] ${
                  isScrolled ? 'text-primary' : 'text-white'
                } group-hover:opacity-0 transition-opacity duration-300`} 
              />
              <FaHome 
                className="text-[2.8rem] text-secondary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110" 
              />
            </div>
            <div className="flex flex-col h-[3.6rem] justify-center">
              <span className="text-2xl font-bold tracking-tight leading-none font-heading">
                Denver
              </span>
              <span className={`text-2xl font-extrabold tracking-widest leading-none ${
                isScrolled ? 'text-secondary' : 'text-secondary'
              }`}>
                ROOFING
              </span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`${
                isScrolled ? 'text-primary' : 'text-white'
              } hover:text-secondary transition-colors`}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`${
                isScrolled ? 'text-primary' : 'text-white'
              } hover:text-secondary transition-colors`}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className={`${
                isScrolled ? 'text-primary' : 'text-white'
              } hover:text-secondary transition-colors`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`${
                isScrolled ? 'text-primary' : 'text-white'
              } hover:text-secondary transition-colors`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <a
            href="tel:+13035550123"
            className="flex items-center space-x-2 bg-secondary hover:bg-secondary-dark text-white px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <FaPhone className="text-lg" />
            <span className="hidden md:inline">Call Now</span>
            <span className="font-bold">(303) 555-0123</span>
          </a>

          {/* Mobile Menu Button */}
          <button className={`md:hidden ${isScrolled ? 'text-primary' : 'text-white'} hover:text-secondary`}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 