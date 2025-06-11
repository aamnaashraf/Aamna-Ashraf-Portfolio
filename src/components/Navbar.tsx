'use client';

import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { Menu, X, Github, Linkedin, Twitter, Facebook } from 'lucide-react';

const navItems = [
  { name: 'HOME', href: '#' },
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside or on a nav item
 useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
      setIsOpen(false);
    }
  };

  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [isOpen]);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#0c0d0e] px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo and Social Icons */}
        <div className="flex items-center space-x-4">
          <div className="text-white font-bold text-xl tracking-wide">
            AAMNA <span className="text-indigo-400">ASHRAF</span>
          </div>

          {/* Mobile Social Icons to the right of name */}
          <div className="md:hidden flex items-center ml-9 space-x-4">
            <a
              href="https://github.com/aamnaashraf"
              target="_blank"
              className="text-white hover:text-purple-400 transition duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/aamna-ashraf-rajput-552a20280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="text-white hover:text-purple-400 transition duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.facebook.com/AamnAashraff"
              target="_blank"
              className="text-white hover:text-purple-400 transition duration-300"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Desktop Nav Centered */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="bg-[#0d1333] border border-purple-600 rounded-full px-6 py-2 space-x-4 text-sm font-medium flex transition-all duration-700 ease-in-out shadow-md hover:shadow-purple-500/40 hover:border-purple-400">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={clsx(
                    'px-3 py-1 rounded-full text-white transition-all duration-300',
                    'hover:bg-purple-600/20 hover:text-purple-400'
                  )}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Social Icons (Right Side) */}
        <div className="hidden md:flex space-x-4 text-white items-center">
          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-purple-400 transition duration-300"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="hover:text-purple-400 transition duration-300"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-purple-400 transition duration-300"
          >
            <Twitter size={18} />
          </a>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <div className={clsx(
        "md:hidden fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-[#0d1333] border-l border-purple-600 shadow-lg z-40 p-6 pt-20 transition-all duration-300 ease-in-out transform",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <ul className="space-y-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  'block px-4 py-3 rounded-lg text-white transition-all duration-300 text-center',
                  'hover:bg-purple-600/20 hover:text-purple-400'
                )}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        
        {/* Close button at bottom */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center px-6 py-2 rounded-full bg-purple-600/20 text-purple-400 border border-purple-500 hover:bg-purple-600/30 transition-all"
          >
            <X size={18} className="mr-2" />
            Close Menu
          </button>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
}

