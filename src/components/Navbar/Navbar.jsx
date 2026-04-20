import React, { useState } from 'react';
import { Search, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Default active tab 'Home' set kiya hai
  const [activeTab, setActiveTab] = useState('Home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Our Services', href: '#service', hasDropdown: true },
    { name: 'Courses', href: '#course' },
    { name: 'Internship', href: '#course' },
    { name: 'About us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="w-full bg-white sticky top-0 z-500 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between py-4">
        
        {/* 1. Logo Section */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-end gap-0.5">
            <div className="w-1.5 h-4 bg-blue-500 rounded-full"></div>
            <div className="w-1.5 h-8 bg-blue-600 rounded-full"></div>
            <div className="w-1.5 h-6 bg-blue-400 rounded-full"></div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl md:text-2xl font-bold text-blue-600 tracking-tight text-nowrap">AkZ It </span>
            <span className="text-[10px] text-blue-400 uppercase tracking-widest font-semibold italic">
             Solution
            </span>
          </div>
        </div>

        {/* 2. Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8 text-gray-600 font-medium text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveTab(link.name)} // Click par active state change hogi
              className={`flex items-center gap-1 transition-all duration-300 pb-1 border-b-2 ${
                activeTab === link.name 
                ? 'text-blue-600 border-blue-600' // Active Styles
                : 'text-gray-600 border-transparent hover:text-blue-500' // Inactive Styles
              }`}
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={14} />}
            </a>
          ))}
        </div>

        {/* 3. Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-3 md:gap-4">
          <button className="p-2 text-gray-600 hover:bg-blue-50 rounded-full transition-all">
            <Search size={20} />
          </button>
          
          <button className=" cursor-pointer hidden sm:block bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md active:scale-95 text-sm">
            Contact Us
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-all"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Side Menu (Overlay) */}
      <div className={`
        absolute top-full left-0 w-full bg-white shadow-xl z-60 border-t
        lg:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}
      `}>
        <div className="flex flex-col px-6 py-8 space-y-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-lg font-semibold tracking-wide transition-colors ${
                activeTab === link.name ? 'text-blue-600' : 'text-gray-700 hover:text-blue-500'
              }`}
              onClick={() => {
                setActiveTab(link.name);
                setIsOpen(false);
              }}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-100">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;