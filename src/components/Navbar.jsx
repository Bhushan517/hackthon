import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Menu, X, Code } from 'lucide-react'

const Navbar = ({ currentSection, setCurrentSection, onShowAuth, isAuthenticated, user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '💕' },
    { id: 'features', label: 'Features', icon: '✨' },
    { id: 'timeline', label: 'Timeline', icon: '📅' },
    { id: 'prizes', label: 'Prizes', icon: '🏆' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setCurrentSection(sectionId)
      setIsOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/10 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl"
            >
              💕
            </motion.div>
            <div className="text-white font-bold text-xl font-romantic">
              RomanticHack
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  currentSection === item.id
                    ? 'bg-romantic-500 text-white shadow-lg'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          {isAuthenticated ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="hidden md:flex items-center space-x-4"
            >
              <span className="text-white/80 text-sm">
                Welcome, {user?.firstName || 'Lover'}! 💕
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onLogout}
                className="flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full font-medium border border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                <span>Logout</span>
              </motion.button>
            </motion.div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onShowAuth}
              className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-romantic-500 to-hackathon-500 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Heart size={20} />
              <span>Join Now</span>
            </motion.button>
          )}

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ x: 10 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    currentSection === item.id
                      ? 'bg-romantic-500 text-white'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              ))}
                             {isAuthenticated ? (
                 <motion.div className="space-y-3">
                   <div className="text-center text-white/80 text-sm py-2">
                     Welcome, {user?.firstName || 'Lover'}! 💕
                   </div>
                   <motion.button
                     whileHover={{ scale: 1.02 }}
                     onClick={onLogout}
                     className="w-full bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-lg font-medium border border-white/30 hover:bg-white/30 transition-all duration-300"
                   >
                     Logout
                   </motion.button>
                 </motion.div>
               ) : (
                 <motion.button
                   whileHover={{ scale: 1.02 }}
                   onClick={onShowAuth}
                   className="w-full bg-gradient-to-r from-romantic-500 to-hackathon-500 text-white px-6 py-3 rounded-lg font-medium shadow-lg"
                 >
                   Join Now
                 </motion.button>
               )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
