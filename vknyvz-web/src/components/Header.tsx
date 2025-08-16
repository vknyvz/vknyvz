'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <nav className="hidden md:flex space-x-6">
        {['home', 'skills', 'work', 'contact'].map((route) => (
          <Link
            key={route}
            href={route === 'home' ? '/' : `/${route}`}
            className="hover:text-terminal-green transition"
          >
            {route.charAt(0).toUpperCase() + route.slice(1)}
          </Link>
        ))}
      </nav>

      <div className="md:hidden relative">
        <button 
          onClick={toggleMenu}
          className="terminal-green focus:outline-none"
          aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 border border-terminal-green mobile-background rounded-md shadow-lg py-1 z-50">
            {['home', 'skills', 'work', 'contact'].map((route) => (
              <Link
                key={route}
                href={route === 'home' ? '/' : `/${route}`}
                className="block px-4 py-2 hover:text-terminal-green transition-colors duration-200"
              >
                {route.charAt(0).toUpperCase() + route.slice(1)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}