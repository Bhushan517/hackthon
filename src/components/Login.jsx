import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Eye, EyeOff, Mail, Lock, Users, ArrowRight, Sparkles } from 'lucide-react'

const Login = ({ onSwitchToRegister, onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsLoading(true)
    
    // Simulate login API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Success - call the onLogin callback
      if (onLogin) {
        onLogin(formData)
      }
      
      // Show success message
      alert('Login successful! Welcome back! 💕')
      
    } catch (error) {
      setErrors({ general: 'Login failed. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const features = [
    { icon: Heart, text: "Join the most romantic hackathon ever" },
    { icon: Users, text: "Connect with 500+ tech couples" },
    { icon: Sparkles, text: "Win prizes worth ₹10L+" }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-romantic-400/20 to-hackathon-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-romantic-400/20 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-romantic-400/30"
            style={{
              left: `${5 + i * 12}%`,
              top: `${10 + i * 8}%`,
              animationDelay: `${i * 0.3}s`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
              rotate: [0, 15, -15, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart size={20 + i * 3} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Welcome Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="flex items-center justify-center lg:justify-start space-x-3 mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl"
              >
                💕
              </motion.div>
              <div className="text-3xl font-bold text-white font-romantic">
                RomanticHack
              </div>
            </motion.div>

            {/* Welcome Text */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Welcome Back,{' '}
              <span className="font-romantic text-romantic-300">Lover</span>! 💕
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-white/80 mb-8 leading-relaxed"
            >
              Ready to continue your romantic coding journey? 
              Sign in to access your dashboard and join the hackathon!
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-4 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
                  className="flex items-center space-x-3 justify-center lg:justify-start"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-romantic-400 to-hackathon-400 rounded-full flex items-center justify-center">
                    <feature.icon size={18} className="text-white" />
                  </div>
                  <span className="text-white/80">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Switch to Register */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <p className="text-white/60 mb-4">
                Don't have an account yet?
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onSwitchToRegister}
                className="inline-flex items-center space-x-2 text-romantic-300 hover:text-romantic-200 transition-colors duration-300 font-medium"
              >
                <span>Create Account</span>
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-md">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-center mb-8"
                >
                  <h2 className="text-3xl font-bold text-white mb-2">Sign In</h2>
                  <p className="text-white/70">Welcome back to your romantic coding journey</p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  >
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={20} className="text-white/50" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 bg-white/20 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.email 
                            ? 'border-red-400 focus:ring-red-400/50' 
                            : 'border-white/30 focus:border-romantic-400 focus:ring-romantic-400/50'
                        }`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-400 text-sm mt-1"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Password Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock size={20} className="text-white/50" />
                      </div>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-12 py-3 bg-white/20 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.password 
                            ? 'border-red-400 focus:ring-red-400/50' 
                            : 'border-white/30 focus:border-romantic-400 focus:ring-romantic-400/50'
                        }`}
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-white/50 hover:text-white/70 transition-colors"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    <AnimatePresence>
                      {errors.password && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-400 text-sm mt-1"
                        >
                          {errors.password}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Remember Me & Forgot Password */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="flex items-center justify-between"
                  >
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-romantic-500 bg-white/20 border-white/30 rounded focus:ring-romantic-400 focus:ring-2"
                      />
                      <span className="text-white/70 text-sm">Remember me</span>
                    </label>
                    <button
                      type="button"
                      className="text-romantic-300 hover:text-romantic-200 text-sm transition-colors"
                    >
                      Forgot password?
                    </button>
                  </motion.div>

                  {/* General Error */}
                  <AnimatePresence>
                    {errors.general && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-red-500/20 border border-red-400/50 rounded-lg p-3"
                      >
                        <p className="text-red-400 text-sm text-center">
                          {errors.general}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-romantic-500 to-hackathon-500 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Signing In...</span>
                      </>
                    ) : (
                      <>
                        <Heart size={20} />
                        <span>Sign In</span>
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Social Login */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                  className="mt-8"
                >
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/20" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-transparent text-white/60">Or continue with</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {['Google', 'GitHub'].map((provider) => (
                      <motion.button
                        key={provider}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full inline-flex justify-center items-center px-4 py-2 border border-white/20 rounded-lg bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300"
                      >
                        <span className="text-sm font-medium">{provider}</span>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Login
