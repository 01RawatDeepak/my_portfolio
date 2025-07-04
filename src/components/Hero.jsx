// src/components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import heroImg from "../assets/hero/hero02.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-purple-800 to-purple-900 text-white px-4">
      <div className="container  mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 py-20 px-4 z-10">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Hello. I'm{" "}
            <span className="text-yellow-400">Deepak Singh Rawat</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-purple-200 mb-4">
            A <span className="font-semibold text-white">Software Developer</span> <br />
            Specializing in{" "}
            <span className="font-semibold text-white">React & Node.js</span>
          </h2>
          <p className="text-purple-300 text-base mb-8">
            Recruit where talent is active — Programmatic job advertising
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="portfolio"
              smooth={true}
              className="px-6 py-3 rounded-md bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold transition-all shadow-lg cursor-pointer"
            >
              VIEW WORKS
            </Link>
            <button className="px-6 py-3 border-2 border-yellow-400 text-yellow-300 hover:bg-white hover:text-purple-800 rounded-md font-semibold transition-all">
              Download CV
            </button>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative rounded-2xl overflow-hidden  max-w-xs">
            <img
              src={heroImg}
              alt="Hero"
              className="w-full h-auto object-cover rounded-2xl"
            />
            <div className="">
              <img src="/src/assets/hero/javascript.avif" alt="" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* 🌊 Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L48,74.7C96,85,192,107,288,117.3C384,128,480,128,576,138.7C672,149,768,171,864,181.3C960,192,1056,192,1152,186.7C1248,181,1344,171,1392,165.3L1440,160V320H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
