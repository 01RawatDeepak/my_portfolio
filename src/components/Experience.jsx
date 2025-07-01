import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "TechCorp",
    role: "Senior Frontend Developer",
    period: "2021 - Present",
    description: "Leading the frontend team in building responsive web applications.",
    skills: ["React", "TypeScript", "Redux"],
    logo: "🏢",
  },
  {
    company: "Digital Solutions",
    role: "UI/UX Designer & Developer",
    period: "2018 - 2021",
    description: "Designed and implemented user interfaces for various clients.",
    skills: ["Figma", "Angular", "SCSS"],
    logo: "🖥️",
  },
  {
    company: "StartUp Inc",
    role: "Junior Developer",
    period: "2016 - 2018",
    description: "Assisted in developing and maintaining web applications.",
    skills: ["JavaScript", "jQuery", "Bootstrap"],
    logo: "🚀",
  },
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

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-indigo-200 dark:bg-indigo-900/40 hidden md:block" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative mb-12 flex flex-col md:flex-row ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Connector dot */}
                <div className="hidden md:flex absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-4 h-4 bg-indigo-600 border-4 border-white dark:border-gray-800 rounded-full"></div>
                </div>

                <div
                  className={`w-full md:w-1/2 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md ${
                    isLeft ? 'md:mr-auto' : 'md:ml-auto'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-2xl">{exp.logo}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.company}</h3>
                      <p className="text-indigo-600 dark:text-indigo-400 text-sm">{exp.period}</p>
                    </div>
                  </div>
                  <span className="inline-block mb-3 px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-full font-medium">
                    {exp.role}
                  </span>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-800 dark:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
