import React from 'react';
import { motion } from 'framer-motion'

const ProjectCard = ({ title, description, tags }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass-card p-6 rounded-xl cursor-pointer group"
    >
      <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span 
            key={tag}
            className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  )
}