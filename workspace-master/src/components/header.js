import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo1.png'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Skills', path: '#' },
    { title: 'Work', path: '#' },
    { title: 'Introduce', path: '/register' },
    { title: 'Login', path: '/login' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 shadow-sm z-50">

      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
        <img
  className="w-52 h-52 object-contain"
  src={logo}
  alt="Logo"
  height={120}
  width={120}
/>


        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.path}
              className="text-gray-100 font-thin hover:text-red-400 font-large transition-colors cursor-pointer"
            >
              {item.title}
            </NavLink>
          ))}
        </div>

        {/* Sign In Button & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          <button className="bg-blue-900 opacity-100 hover:bg-blue-700 text-white font-thin px-6 py-2 rounded-sm font-large shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-150 hidden md:block">
            Sign in
          </button>
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-none text-white bg-none transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-200 md:hidden ${
            isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={toggleMenu}
        />

        {/* Mobile Navigation Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-blue-950 shadow-2xl transform transition-transform duration-200 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6 space-y-6">
            <div className="flex justify-end">
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Mobile Menu Items */}
            <div className="space-y-4">
              {menuItems.map((item) => (
                <NavLink
                  key={item.title}
                  to={item.path}
                  className="block py-2 text-gray-100 hover:text-red-400 font-medium font-thin transition-colors"
                  onClick={toggleMenu}
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;