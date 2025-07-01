import React from 'react';

const socialLinks = [
  {
    href: 'https://github.com/yourusername',
    label: 'GitHub',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484..." />
      </svg>
    ),
  },
  {
    href: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761..." />
      </svg>
    ),
  },
  {
    href: 'https://twitter.com/yourusername',
    label: 'Twitter',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557a9.93 9.93..." />
      </svg>
    ),
  },
];

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

const Footer = () => (
  <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-20">
    <div className="container mx-auto px-4 py-10 grid gap-8 md:grid-cols-3 items-center">
      {/* Left Section */}
      <div className="text-center md:text-left space-y-2">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">DevPortfolio</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        <a
          href="mailto:your@email.com"
          className="text-sm text-blue-600 hover:underline dark:text-blue-400"
        >
          your@email.com
        </a>
      </div>

      {/* Center Navigation */}
      <nav className="flex justify-center gap-6 flex-wrap text-sm">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Right Social + Back to Top */}
      <div className="flex flex-col items-center md:items-end gap-4">
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-1 inline-flex items-center px-3 py-1.5 text-sm bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          ↑ Back to Top
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
