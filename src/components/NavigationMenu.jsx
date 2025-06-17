import React, { useState } from 'react';
import { Menu, X, Home, Info, Mail, Globe, Newspaper } from 'lucide-react';

const NavigationMenu = () => {
  const [isWidthExpanded, setIsWidthExpanded] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const openMenu = () => {
    setIsWidthExpanded(true);
    setTimeout(() => setIsDropdownVisible(true), 300); // wait for width animation
  };

  const closeMenu = () => {
    setIsDropdownVisible(false);
    setTimeout(() => setIsWidthExpanded(false), 300); // wait for dropdown collapse
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 text-black font-medium w-full sm:w-auto px-4 sm:px-0">
      <div
        className={`overflow-hidden bg-[#eee] border border-black shadow-lg transition-all duration-300 ease-in-out ${
          isWidthExpanded ? 'w-full sm:w-[24rem]' : 'w-full sm:w-[14rem]'
        }`}
      >
        {/* Dropdown - slides up after width expands */}
        <div
          className={`transition-all duration-300 ease-in-out text-xl overflow-hidden ${
            isDropdownVisible
              ? 'max-h-[600px] opacity-100 translate-y-0'
              : 'max-h-0 opacity-0 -translate-y-2'
          }`}
        >
          {/* Dropdown Header */}
          <div
            onClick={closeMenu}
            className="flex items-center justify-between cursor-pointer h-12 px-3 hover:bg-[#FF5630] border-b border-black"
          >
            <span className="text-2xl">Menu</span>
            <button
              className="flex h-full items-center justify-center border-l border-black w-12"
            >
              <X size={24} />
            </button>
          </div>

          {/* Links */}
          <a href="/" className="flex items-center gap-3 h-12 px-3 border-b border-black hover:underline">
            <Home size={24} /> Home
          </a>
          <a href="#about" className="flex items-center gap-3 h-12 px-3 border-b border-black hover:underline">
            <Info size={24} /> About
          </a>
          <a href="#latest" className="flex items-center gap-3 h-12 px-3 border-b border-black hover:underline">
            <Newspaper size={24} /> Latest
          </a>
          <a href="#contact" className="flex items-center gap-3 h-12 px-3 border-b border-black hover:underline">
            <Mail size={24} /> Contact
          </a>
          <a href="#global" className="flex items-center gap-3 h-12 px-3 border-b border-black hover:underline">
            <Globe size={24} /> Choose Global Chapter
          </a>
        </div>

        {/* Closed State */}
        {!isWidthExpanded && (
          <button
            onClick={openMenu}
            className="flex items-center justify-between w-full h-12 cursor-pointer hover:bg-[#FF5630] px-3 border-b border-black"
          >
            <span className="text-2xl">Menu</span>
            <span className="flex h-full items-center justify-center border-l border-black w-12">
              <Menu size={24} />
            </span>
          </button>
        )}

        {/* Always visible - Declare Now */}
        <a
          href="#declaration"
          className="text-2xl h-12 px-3 flex items-center hover:bg-[#FF5630] transition-colors"
        >
          Declare Now
        </a>
      </div>
    </div>
  );
};

export default NavigationMenu;
