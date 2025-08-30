import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Eye, EyeOff, Mail, Lock, User, Users, ArrowLeft, Sparkles, CheckCircle } from 'lucide-react'

const Register = ({ onSwitchToLogin, onRegister }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    partnerName: '',
    partnerEmail: '',
    experience: 'beginner',
    agreeToTerms: false
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
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
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password = 'Password must contain uppercase, lowercase, and number'
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    if (!formData.partnerName.trim()) {
      newErrors.partnerName = 'Partner name is required'
    }
    
    if (!formData.partnerEmail) {
      newErrors.partnerEmail = 'Partner email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.partnerEmail)) {
      newErrors.partnerEmail = 'Please enter a valid partner email'
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsLoading(true)
    
    // Simulate registration API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Success - call the onRegister callback
      if (onRegister) {
        onRegister(formData)
      }
      
      // Show success message
      alert('Registration successful! Welcome to RomanticHack! 💕✨')
      
    } catch (error) {
      setErrors({ general: 'Registration failed. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  const benefits = [
    { icon: Heart, text: "Join the most romantic hackathon ever" },
    { icon: Users, text: "Connect with 500+ tech couples" },
    { icon: Sparkles, text: "Win prizes worth ₹10L+" },
    { icon: CheckCircle, text: "Build amazing projects together" }
  ]

  const passwordStrength = () => {
    if (!formData.password) return { strength: 0, color: 'bg-gray-300', text: '' }
    
    let score = 0
    if (formData.password.length >= 8) score++
    if (/(?=.*[a-z])/.test(formData.password)) score++
    if (/(?=.*[A-Z])/.test(formData.password)) score++
    if (/(?=.*\d)/.test(formData.password)) score++
    if (/(?=.*[!@#$%^&*])/.test(formData.password)) score++
    
    if (score <= 2) return { strength: score, color: 'bg-red-400', text: 'Weak' }
    if (score <= 3) return { strength: score, color: 'bg-yellow-400', text: 'Fair' }
    if (score <= 4) return { strength: score, color: 'bg-blue-400', text: 'Good' }
    return { strength: score, color: 'bg-green-400', text: 'Strong' }
  }

  const passwordInfo = passwordStrength()

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
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-romantic-400/30"
            style={{
              left: `${5 + i * 10}%`,
              top: `${5 + i * 7}%`,
              animationDelay: `${i * 0.2}s`
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.1, 0.4, 0.1],
              rotate: [0, 20, -20, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart size={18 + i * 2} />
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
              Start Your{' '}
              <span className="font-romantic text-romantic-300">Romantic</span> Journey! ✨
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-white/80 mb-8 leading-relaxed"
            >
              Join the most unique hackathon experience designed for couples who love to code together. 
              Create something amazing with your partner in 48 hours of romantic innovation!
            </motion.p>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-4 mb-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.8 }}
                  className="flex items-center space-x-3 justify-center lg:justify-start"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-romantic-400 to-hackathon-400 rounded-full flex items-center justify-center">
                    <benefit.icon size={18} className="text-white" />
                  </div>
                  <span className="text-white/80">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Switch to Login */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <p className="text-white/60 mb-4">
                Already have an account?
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onSwitchToLogin}
                className="inline-flex items-center space-x-2 text-romantic-300 hover:text-romantic-200 transition-colors duration-300 font-medium"
              >
                <ArrowLeft size={16} />
                <span>Sign In Instead</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Registration Form */}
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
                  <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
                  <p className="text-white/70">Join the romantic coding revolution</p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User size={20} className="text-white/50" />
                        </div>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-white/20 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                            errors.firstName 
                              ? 'border-red-400 focus:ring-red-400/50' 
                              : 'border-white/30 focus:border-romantic-400 focus:ring-romantic-400/50'
                          }`}
                          placeholder="Your first name"
                        />
                      </div>
                      <AnimatePresence>
                        {errors.firstName && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-400 text-sm mt-1"
                          >
                            {errors.firstName}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.lastName 
                            ? 'border-red-400 focus:ring-red-400/50' 
                            : 'border-white/30 focus:border-romantic-400 focus:ring-romantic-400/50'
                        }`}
                        placeholder="Your last name"
                      />
                      <AnimatePresence>
                        {errors.lastName && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-400 text-sm mt-1"
                          >
                            {errors.lastName}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Email Address *
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

                  {/* Partner Information */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Partner Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Heart size={20} className="text-white/50" />
                        </div>
                        <input
                          type="text"
                          name="partnerName"
                          value={formData.partnerName}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-white/20 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                            errors.partnerName 
                              ? 'border-red-400 focus:ring-red-400/50' 
                              : 'border-white/30 focus:border-romantic-400 focus:ring-romantic-400/50'
                          }`}
                          placeholder="Your partner's name"
                        />
                      </div>
                      <AnimatePresence>
                        {errors.partnerName && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-400 text-sm mt-1"
                          >
                            {errors.partnerName}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Partner Email *
                      </label>
                      <input
                        type="email"
                        name="partnerEmail"
                        value={formData.partnerEmail}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.partnerEmail 
                            ? 'border-red-400 focus:ring-red-400/50' 
                            : 'border-white/30 focus:border-romantic-400 focus:ring-romantic-400/50'
                        }`}
                        placeholder="partner@example.com"
                      />
                      <AnimatePresence>
                        {errors.partnerEmail && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-400 text-sm mt-1"
                          >
                            {errors.partnerEmail}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* Experience Level */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                  >
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Experience Level *
                    </label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-romantic-400 focus:ring-2 focus:ring-romantic-400/50 transition-all duration-300"
                    >
                      <option value="beginner">Beginner (0-1 years)</option>
                      <option value="intermediate">Intermediate (1-3 years)</option>
                      <option value="advanced">Advanced (3+ years)</option>
                    </select>
                  </motion.div>

                  {/* Password */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                  >
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Password *
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
                        placeholder="Create a strong password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-white/50 hover:text-white/70 transition-colors"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    
                    {/* Password Strength */}
                    {formData.password && (
                      <div className="mt-2">
                        <div className="flex space-x-1 mb-1">
                          {[1, 2, 3, 4, 5].map((level) => (
                            <div
                              key={level}
                              className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                                level <= passwordInfo.strength ? passwordInfo.color : 'bg-white/20'
                              }`}
                            />
                          ))}
                        </div>
                        <p className={`text-sm ${
                          passwordInfo.strength <= 2 ? 'text-red-400' :
                          passwordInfo.strength <= 3 ? 'text-yellow-400' :
                          passwordInfo.strength <= 4 ? 'text-blue-400' : 'text-green-400'
                        }`}>
                          {passwordInfo.text}
                        </p>
                      </div>
                    )}
                    
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

                  {/* Confirm Password */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  >
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock size={20} className="text-white/50" />
                      </div>
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-12 py-3 bg-white/20 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all duration-300 ${
                          errors.confirmPassword 
                            ? 'border-red-400 focus:ring-red-400/50' 
                            : 'border-white/30 focus:border-romantic-400 focus:ring-romantic-400/50'
                        }`}
                        placeholder="Confirm your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-white/50 hover:text-white/70 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                    <AnimatePresence>
                      {errors.confirmPassword && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-400 text-sm mt-1"
                        >
                          {errors.confirmPassword}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Terms and Conditions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.3, duration: 0.8 }}
                    className="flex items-start space-x-3"
                  >
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-romantic-500 bg-white/20 border-white/30 rounded focus:ring-romantic-400 focus:ring-2 mt-1"
                    />
                    <label className="text-white/70 text-sm">
                      I agree to the{' '}
                      <a href="#" className="text-romantic-300 hover:text-romantic-200 underline">
                        Terms and Conditions
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-romantic-300 hover:text-romantic-200 underline">
                        Privacy Policy
                      </a>
                    </label>
                  </motion.div>
                  <AnimatePresence>
                    {errors.agreeToTerms && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-red-400 text-sm -mt-2"
                      >
                        {errors.agreeToTerms}
                      </motion.p>
                    )}
                  </AnimatePresence>

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
                    transition={{ delay: 1.4, duration: 0.8 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-romantic-500 to-hackathon-500 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Creating Account...</span>
                      </>
                    ) : (
                      <>
                        <Heart size={20} />
                        <span>Create Account</span>
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Social Registration */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                  className="mt-8"
                >
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/20" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-transparent text-white/60">Or register with</span>
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

export default Register
