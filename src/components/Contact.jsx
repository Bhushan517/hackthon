import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Mail, Phone, MapPin, Send, Users, Calendar, Trophy } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    partnerName: '',
    partnerEmail: '',
    experience: 'beginner',
    projectIdea: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    alert('Thank you for registering! We\'ll be in touch soon! 💕')
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      partnerName: '',
      partnerEmail: '',
      experience: 'beginner',
      projectIdea: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@romantichackathon.com",
      color: "from-romantic-400 to-romantic-600"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210",
      color: "from-hackathon-400 to-hackathon-600"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Virtual + Mumbai, India",
      color: "from-purple-400 to-purple-600"
    }
  ]

  const quickStats = [
    { icon: Users, value: "500+", label: "Expected Participants" },
    { icon: Calendar, value: "Feb 14-16", label: "Event Dates" },
    { icon: Trophy, value: "₹10L+", label: "Total Prizes" }
  ]

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-romantic-500 to-hackathon-500 text-white px-6 py-3 rounded-full mb-6"
          >
            <Heart size={20} />
            <span className="font-semibold">Get In Touch</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready to{' '}
            <span className="font-romantic text-romantic-300">Join</span> Us?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed"
          >
            Register for the most romantic hackathon ever! Fill out the form below and 
            we'll get back to you with all the details. Can't wait to see you there! 💕
          </motion.p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-romantic-500/20 to-hackathon-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-romantic-400 to-hackathon-400 rounded-full mb-4">
                  <stat.icon size={24} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Register for the Hackathon</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-romantic-400 transition-colors"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-romantic-400 transition-colors"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-romantic-400 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-romantic-400 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Partner Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Partner's Name *</label>
                    <input
                      type="text"
                      name="partnerName"
                      value={formData.partnerName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-romantic-400 transition-colors"
                      placeholder="Your partner's name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-2">Partner's Email *</label>
                    <input
                      type="email"
                      name="partnerEmail"
                      value={formData.partnerEmail}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-romantic-400 transition-colors"
                      placeholder="partner@example.com"
                    />
                  </div>
                </div>

                {/* Experience Level */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Experience Level *</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:border-romantic-400 transition-colors"
                  >
                    <option value="beginner">Beginner (0-1 years)</option>
                    <option value="intermediate">Intermediate (1-3 years)</option>
                    <option value="advanced">Advanced (3+ years)</option>
                  </select>
                </div>

                {/* Project Idea */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Project Idea (Optional)</label>
                  <textarea
                    name="projectIdea"
                    value={formData.projectIdea}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-romantic-400 transition-colors resize-none"
                    placeholder="Tell us about your project idea..."
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Additional Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-romantic-400 transition-colors resize-none"
                    placeholder="Any questions or special requests?"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-romantic-500 to-hackathon-500 text-white py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Registering...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Register Now</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl`}>
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white/60 text-sm font-medium">{info.title}</div>
                      <div className="text-white font-semibold">{info.value}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-romantic-500/20 to-hackathon-500/20 backdrop-blur-md rounded-2xl p-8 border border-white/20"
            >
              <h4 className="text-xl font-bold text-white mb-4">Why Register Early?</h4>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-romantic-400 rounded-full" />
                  <span>Early bird discounts and special perks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-romantic-400 rounded-full" />
                  <span>Priority access to workshops and mentors</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-romantic-400 rounded-full" />
                  <span>Exclusive networking opportunities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-romantic-400 rounded-full" />
                  <span>Guaranteed spot in limited capacity event</span>
                </li>
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-white/80 mb-4">Follow us for updates</p>
              <div className="flex items-center justify-center space-x-4">
                {['Twitter', 'Instagram', 'LinkedIn', 'Discord'].map((platform) => (
                  <motion.button
                    key={platform}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gradient-to-r from-romantic-400 to-hackathon-400 rounded-full flex items-center justify-center text-white font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    {platform[0]}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
