import React, { useState } from 'react';
import { Menu, X, Home, Info, Mail, Globe, Newspaper } from 'lucide-react';

const NavigationMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[10rem] bg-[#eee] text-black font-medium border border-black shadow-lg">
      {/* Menu Button at Top */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-between w-full h-12 px-3 border-b border-black hover:bg-red-300 transition-colors"
        >
          <span className="text-2xl">Menu</span>
          <span className="flex h-full items-center justify-center border-l border-black w-12">
            {open ? <X size={24} /> : <Menu size={24} />}
          </span>
        </button>

        {/* Dropdown Content - Opens upwards */}
        {open && (
          <div className="absolute bottom-full left-0 right-0 flex flex-col divide-y divide-black border border-black bg-[#eee] animate-fadeIn">
            <a href="#home" className="flex items-center gap-3 h-12 px-3 hover:bg-red-300">
              <Home size={18} /> Home
            </a>
            <a href="#about" className="flex items-center gap-3 h-12 px-3 hover:bg-red-300">
              <Info size={18} /> About
            </a>
            <a href="#latest" className="flex items-center gap-3 h-12 px-3 hover:bg-red-300">
              <Newspaper size={18} /> Latest
            </a>
            <a href="#contact" className="flex items-center gap-3 h-12 px-3 hover:bg-red-300">
              <Mail size={18} /> Contact
            </a>
            <a href="#global" className="flex items-center gap-3 h-12 px-3 hover:bg-red-300">
              <Globe size={18} /> Choose Global Chapter
            </a>
          </div>
        )}
      </div>

      {/* Declare Now Button at Bottom */}
      <a
        href="/#declaration"
        className="flex h-12 px-3 text-2xl items-center hover:bg-red-300 transition-colors"
      >
        Declare Now
      </a>
    </div>
  );
};

export default NavigationMenu;