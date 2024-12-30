import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const menuItems = [
    { 
      title: 'Products',
      path: '#',
      dropdownItems: ['Analytics', 'Marketing', 'Commerce', 'Insights']
    },
    { 
      title: 'Solutions',
      path: '#',
      dropdownItems: ['Enterprise', 'Small Business', 'Startup', 'Agency']
    },
    { 
      title: 'Resources',
      path: '#',
      dropdownItems: ['Blog', 'Case Studies', 'Documentation', 'API']
    },
    { 
      title: 'Developers',
      path: '#',
      dropdownItems: ['API Reference', 'Status', 'GitHub', 'Documentation']
    },
    { 
      title: 'Pricing',
      path: '#'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset';
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/10 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <NavLink to="/" className="flex items-center space-x-2">
              <img src="/api/placeholder/40/40" alt="Logo" className="h-10 w-10" />
              <span className="text-white font-bold text-xl">Logo</span>
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                <motion.button
                  className="text-gray-300 hover:text-white flex items-center space-x-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setActiveDropdown(item.title)}
                >
                  <span>{item.title}</span>
                  {item.dropdownItems && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </motion.button>

                {/* Dropdown Menu */}
                {item.dropdownItems && (
                  <AnimatePresence>
                    {activeDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white/10 backdrop-blur-lg ring-1 ring-black ring-opacity-5"
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="py-2">
                          {item.dropdownItems.map((dropdownItem) => (
                            <motion.a
                              key={dropdownItem}
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-blue-500/20 hover:text-white"
                              whileHover={{ x: 5 }}
                            >
                              {dropdownItem}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            {/* Search and Profile */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-300 hover:text-white"
              >
                <Search className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2"
              >
                <User className="w-4 h-4" />
                <span>Sign In</span>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-300 hover:text-white"
            onClick={toggleMenu}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={toggleMenu}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-64 bg-gray-900 md:hidden"
            >
              <div className="p-4 space-y-4">
                {menuItems.map((item) => (
                  <motion.div
                    key={item.title}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <NavLink
                      to={item.path}
                      className="block text-gray-300 hover:text-white py-2"
                      onClick={toggleMenu}
                    >
                      {item.title}
                    </NavLink>
                  </motion.div>
                ))}
                <motion.button
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center justify-center space-x-2"
                >
                  <User className="w-4 h-4" />
                  <span>Sign In</span>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;