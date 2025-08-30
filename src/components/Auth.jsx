import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Login from './Login'
import Register from './Register'

const Auth = ({ onAuthSuccess, onBackToMain }) => {
  const [isLogin, setIsLogin] = useState(true)

  const handleSwitchToRegister = () => {
    setIsLogin(false)
  }

  const handleSwitchToLogin = () => {
    setIsLogin(true)
  }

  const handleLoginSuccess = (userData) => {
    if (onAuthSuccess) {
      onAuthSuccess(userData)
    }
  }

  const handleRegisterSuccess = (userData) => {
    if (onAuthSuccess) {
      onAuthSuccess(userData)
    }
  }

  return (
    <div className="relative">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        onClick={onBackToMain}
        className="absolute top-8 left-8 z-50 flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span>Back to Main</span>
      </motion.button>

      {/* Auth Content */}
      <AnimatePresence mode="wait">
        {isLogin ? (
          <motion.div
            key="login"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Login 
              onSwitchToRegister={handleSwitchToRegister}
              onLogin={handleLoginSuccess}
            />
          </motion.div>
        ) : (
          <motion.div
            key="register"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Register 
              onSwitchToLogin={handleSwitchToLogin}
              onRegister={handleRegisterSuccess}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Auth
