import { motion } from "framer-motion"

const Layout = ({ children }) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="glass-card p-8 rounded-3xl shadow-2xl">
          {children}
        </div>
      </div>
    </motion.main>
  )
}

export default Layout