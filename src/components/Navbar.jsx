import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiUser } from 'react-icons/fi';
import { Link } from 'react-scroll';
import ThemeToggle from './ThemeToggle';
import styles from '../assets/css/navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'services', 'experience', 'portfolio', 'contact'];
      const scrollPos = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
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
    <header className="fixed top-4 left-0 w-full z-50 px-4">
      <div className={`max-w-7xl mx-auto ${styles.custom_nav} ${scrolled ? 'shadow-md dark:shadow-gray-700' : ''}`}>
        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          className="text-lg font-bold flex items-center cursor-pointer"
        >
          <FiUser className="mr-2 text-indigo-600 dark:text-white" />
          <span className="text-gray-900 dark:text-white">DevFolio</span>
        </Link>

        {/* Desktop Center Nav */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex space-x-4 items-center">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                spy={true}
                activeClass="active"
                className={`text-sm font-medium cursor-pointer px-3 py-2 rounded-full transition-all duration-300 ease-in-out ${
                  activeSection === item.to
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>

        {/* Right: Toggle + Menu */}
        <div className="flex items-center space-x-4 md:ml-4">
          <ThemeToggle />
          <button
            className="md:hidden text-xl text-gray-800 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 bg-white dark:bg-gray-800 shadow-lg rounded-xl mx-4 p-4 space-y-2 text-center">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              spy={true}
              activeClass="active"
              onClick={() => setIsOpen(false)}
              className={`block font-medium rounded-md py-2 transition-all duration-300 ease-in-out ${
                activeSection === item.to
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
