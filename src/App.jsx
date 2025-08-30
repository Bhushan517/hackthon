import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Code, Users, Trophy, Calendar, Star, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Timeline from './components/Timeline'
import Prizes from './components/Prizes'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Auth from './components/Auth'
import DemoAuth from './components/DemoAuth'

function App() {
  const [currentSection, setCurrentSection] = useState('home')
  const [isLoading, setIsLoading] = useState(true)
  const [showAuth, setShowAuth] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleAuthSuccess = (userData) => {
    setUser(userData)
    setIsAuthenticated(true)
    setShowAuth(false)
  }

  const handleShowAuth = () => {
    setShowAuth(true)
  }

  const handleBackToMain = () => {
    setShowAuth(false)
  }

  const handleLogout = () => {
    setUser(null)
    setIsAuthenticated(false)
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-romantic-500 to-hackathon-600">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-8xl text-white mb-4"
          >
            💕
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold text-white font-romantic"
          >
            Romantic Hackathon
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl text-white/80 mt-2"
          >
            Where Love Meets Code
          </motion.p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-romantic-500 via-purple-600 to-hackathon-600">
      {/* Floating Hearts Background */}
      <div className="floating-hearts">
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            className="heart text-romantic-400"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: -100, opacity: [0, 1, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          >
            <Heart size={20 + i * 2} />
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {showAuth ? (
          <motion.div
            key="auth"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Auth 
              onAuthSuccess={handleAuthSuccess}
              onBackToMain={handleBackToMain}
            />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Navbar 
              currentSection={currentSection} 
              setCurrentSection={setCurrentSection}
              onShowAuth={handleShowAuth}
              isAuthenticated={isAuthenticated}
              user={user}
              onLogout={handleLogout}
            />
            
            <main>
              <Hero setCurrentSection={setCurrentSection} onShowAuth={handleShowAuth} />
              <About />
              <Features />
              <Timeline />
              <Prizes />
              <Contact />
            </main>

            <Footer />
            
            {/* Demo Auth Info */}
            {!isAuthenticated && <DemoAuth />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
