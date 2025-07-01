// src/components/Services.jsx
import React from 'react';
// src/components/Services.jsx
import { motion } from 'framer-motion';

const services = [
  {
    title: "Web Development",
    description: "Building responsive, high-performance websites and web applications using modern technologies.",
    icon: "💻",
    color: "text-blue-500"
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive user interfaces and seamless user experiences that drive engagement.",
    icon: "🎨",
    color: "text-purple-500"
  },
  {
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications with React Native for iOS and Android.",
    icon: "📱",
    color: "text-green-500"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
            What I Do
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            We appreciate your trust greatly. Clients choose me because they know I deliver quality solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700"
            >
              <div className={`text-5xl mb-6 ${service.color}`}>{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;