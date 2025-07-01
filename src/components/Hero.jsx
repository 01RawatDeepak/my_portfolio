// src/components/Hero.jsx
import React from 'react';
// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
              Hello. I'm <span className="text-indigo-600 dark:text-indigo-400">John Doe</span>.
            </h1>
            <h2 className="text-2xl md:text-3xl mt-4 text-gray-600 dark:text-gray-300">
              A <span className="font-semibold text-gray-800 dark:text-white">Software Developer</span><br />
              Specializing in <span className="font-semibold text-gray-800 dark:text-white">React & Node.js</span>
            </h2>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="portfolio"
                smooth={true}
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-indigo-500/30 text-center"
              >
                VIEW WORKS
              </Link>
              <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors text-center">
                Download CV
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-indigo-100 dark:bg-indigo-900/20 rounded-2xl aspect-square max-w-md mx-auto overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              {/* Developer illustration or photo */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-400 to-purple-500">
                <div className="text-center p-8">
                  <div className="text-8xl mb-4">👨‍💻</div>
                  <h3 className="text-xl font-bold text-white">Full Stack Developer</h3>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-pink-600/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;