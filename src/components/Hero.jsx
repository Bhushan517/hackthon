import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Code, Users, Calendar, ArrowRight, Play, Star } from 'lucide-react'

const Hero = ({ setCurrentSection, onShowAuth }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Get current date and format it
  const getCurrentDate = () => {
    const now = new Date()
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }
    return now.toLocaleDateString('en-US', options)
  }

  // Get next weekend date for hackathon
  const getNextWeekend = () => {
    const now = new Date()
    const daysUntilWeekend = (6 - now.getDay() + 7) % 7 || 7
    const nextWeekend = new Date(now)
    nextWeekend.setDate(now.getDate() + daysUntilWeekend)
    
    const options = { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    }
    return nextWeekend.toLocaleDateString('en-US', options)
  }

  const stats = [
    { icon: Users, value: '500+', label: 'Participants' },
    { icon: Heart, value: '100+', label: 'Projects' },
    { icon: Code, value: '48h', label: 'Duration' },
    { icon: Star, value: '₹10L+', label: 'Prizes' }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden py-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-romantic-500/20 via-purple-600/20 to-hackathon-600/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-romantic-400/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-hackathon-400/20 rounded-full blur-3xl animate-float-delayed"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Date Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-8"
        >
          <Calendar size={20} className="text-romantic-300" />
          <span className="text-white/90 font-medium">
            Next Hackathon: {getNextWeekend()}
          </span>
        </motion.div>

        {/* Current Date Display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="inline-flex items-center space-x-2 bg-romantic-500/20 backdrop-blur-md px-4 py-2 rounded-full border border-romantic-300/30 mb-6"
        >
          <span className="text-romantic-200 text-sm font-medium">
            Today: {getCurrentDate()}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-romantic-400 to-hackathon-400">
            Romantic
          </span>
          <br />
          <span className="text-white">
            Hackathon
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto"
        >
          Where Love Meets Code 💕✨
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-romantic-300 mb-2">24</div>
            <div className="text-white/70">Hours of Love & Code</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-hackathon-300 mb-2">100+</div>
            <div className="text-white/70">Romantic Developers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">₹50K</div>
            <div className="text-white/70">Prize Pool</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onShowAuth}
            className="group bg-gradient-to-r from-romantic-500 to-hackathon-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2"
          >
            <span>Join the Hackathon</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onShowAuth}
            className="group bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full font-medium border border-white/30 hover:bg-white/30 transition-all duration-300 flex items-center space-x-2"
          >
            <span>Direct Login</span>
            <Heart size={18} className="group-hover:scale-110 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-white/10 backdrop-blur-md text-white px-6 py-3 rounded-full font-medium border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
          >
            <Play size={18} className="group-hover:scale-110 transition-transform" />
            <span>Watch Video</span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
