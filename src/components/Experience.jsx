// src/components/Experience.jsx
import React from 'react';
// src/components/Experience.jsx
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "TechCorp",
    role: "Senior Frontend Developer",
    period: "2021 - Present",
    description: "Leading the frontend team in building responsive web applications.",
    skills: ["React", "TypeScript", "Redux"],
    logo: "🏢"
  },
  {
    company: "Digital Solutions",
    role: "UI/UX Designer & Developer",
    period: "2018 - 2021",
    description: "Designed and implemented user interfaces for various clients.",
    skills: ["Figma", "Angular", "SCSS"],
    logo: "🖥️"
  },
  {
    company: "StartUp Inc",
    role: "Junior Developer",
    period: "2016 - 2018",
    description: "Assisted in developing and maintaining web applications.",
    skills: ["JavaScript", "jQuery", "Bootstrap"],
    logo: "🚀"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
            My Experience
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            A journey through my professional career and the skills I've acquired.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-900/50 hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`mb-12 relative ${index !== experiences.length - 1 ? 'pb-12' : ''}`}
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 w-16 h-16 items-center justify-center">
                  <div className="w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
                </div>

                {/* Company logo */}
                <div className="md:absolute left-0 w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-700 rounded-full shadow-md border border-gray-200 dark:border-gray-600">
                  <span className="text-2xl">{exp.logo}</span>
                </div>

                {/* Content */}
                <div className="md:ml-24 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 w-full">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                      <p className="text-indigo-600 dark:text-indigo-400">{exp.period}</p>
                    </div>
                    <span className="px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-full text-sm font-medium">
                      {exp.role}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-800 dark:text-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;