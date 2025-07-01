// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiUser } from 'react-icons/fi';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Check scroll position for navbar style
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = ['home', 'services', 'experience', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && 
            element.offsetTop + element.offsetHeight > scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'Experience', to: 'experience' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Contact', to: 'contact' }
  ];

  return (

    <header className={`fixed w-full z-50 transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 ">
        <div className="flex justify-between items-center">
          {/* Logo - Left side */}
          <Link 
            to="home" 
            smooth={true} 
            className="text-2xl font-bold cursor-pointer flex items-center"
          >
            <span className={`mr-2 transition-colors ${
              scrolled ? 'text-indigo-600' : 'text-primary dark:text-gray-900'
            }`}>
              <FiUser size={24} />
            </span>
            <span className={`transition-colors ${
              scrolled ? 'text-gray-900 dark:text-white' : 'text-black dark:text-gray-900'
            }`}>
              DevFolio
            </span>
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <div className={`flex space-x-1 rounded-full p-1 transition-all ${
              scrolled 
                ? 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-inner' 
                : 'bg-transparent'
            }`}>
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  className={`px-4 py-2 rounded-full cursor-pointer text-sm font-medium transition-all ${
                    activeSection === item.to
                      ? 'bg-indigo-600 text-white'
                      : scrolled
                        ? 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                        : 'text-black/90 hover:bg-white/20 dark:text-gray-900/90 dark:hover:bg-gray-900/20'
                  }`}
                  activeClass="active"
                  spy={true}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Right side elements */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {/* Mobile Navigation Toggle */}
            <button
              className={`md:hidden text-2xl focus:outline-none transition-colors ${
                scrolled ? 'text-gray-900 dark:text-white' : 'text-white dark:text-gray-900'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className={`md:hidden mt-4 rounded-lg overflow-hidden transition-all ${
            scrolled 
              ? 'bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-lg' 
              : 'bg-white/80 dark:bg-gray-800/80 backdrop-blur-md'
          }`}>
            <div className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  className={`px-6 py-3 cursor-pointer font-medium transition-colors ${
                    activeSection === item.to
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;