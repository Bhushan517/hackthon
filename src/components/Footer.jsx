import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Code, Users, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Quick Links': [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Features', href: '#features' },
      { name: 'Timeline', href: '#timeline' },
      { name: 'Prizes', href: '#prizes' },
      { name: 'Contact', href: '#contact' }
    ],
    'Resources': [
      { name: 'Registration Guide', href: '#' },
      { name: 'Hackathon Rules', href: '#' },
      { name: 'FAQ', href: '#' },
      { name: 'Support', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press Kit', href: '#' }
    ],
    'Community': [
      { name: 'Discord Server', href: '#' },
      { name: 'Slack Channel', href: '#' },
      { name: 'Meetups', href: '#' },
      { name: 'Events', href: '#' },
      { name: 'Partners', href: '#' },
      { name: 'Sponsors', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-romantic-900 via-purple-900 to-hackathon-900" />
      
      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-romantic-400/20"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.5}s`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart size={16 + i * 2} />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="text-4xl"
                >
                  💕
                </motion.div>
                <div className="text-2xl font-bold text-white font-romantic">
                  RomanticHack
                </div>
              </div>
              
              <p className="text-white/70 mb-6 leading-relaxed max-w-md">
                Where love meets innovation. Join us for the most romantic hackathon 
                experience, where couples code together and create amazing projects.
              </p>
              
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-romantic-500 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + categoryIndex * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + categoryIndex * 0.1 + linkIndex * 0.05, duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <button
                        onClick={() => scrollToSection(link.href.replace('#', ''))}
                        className="text-white/70 hover:text-romantic-300 transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-white mb-4"
              >
                Stay Updated 💌
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                viewport={{ once: true }}
                className="text-white/70 mb-6 max-w-md mx-auto"
              >
                Get the latest updates about our hackathon, special announcements, and romantic coding tips!
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-romantic-400 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-romantic-500 to-hackathon-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Subscribe
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-white/60 text-sm">
                © {currentYear} RomanticHack. All rights reserved. Made with 💕 for couples who code.
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-white/60">
                <a href="#" className="hover:text-romantic-300 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-romantic-300 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-romantic-300 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, type: "spring" }}
        viewport={{ once: true }}
        onClick={() => scrollToSection('home')}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-romantic-500 to-hackathon-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 flex items-center justify-center"
        aria-label="Back to top"
      >
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↑
        </motion.div>
      </motion.button>
    </footer>
  )
}

export default Footer
