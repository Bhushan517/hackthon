import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Code, Users, Lightbulb, Trophy, Clock, MapPin, Star } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Love & Code",
      description: "Build projects with your partner, combining romance with innovation"
    },
    {
      icon: Code,
      title: "48 Hours",
      description: "Intense coding session with breaks for romantic moments"
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Connect with other couples who share your passion for tech"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Create solutions that make the world a better place"
    },
    {
      icon: Trophy,
      title: "Prizes",
      description: "Win amazing rewards for your creative projects"
    },
    {
      icon: Star,
      title: "Networking",
      description: "Meet industry experts and potential employers"
    }
  ]

  const highlights = [
    { icon: Clock, text: "48 Hours of Coding" },
    { icon: MapPin, text: "Virtual + In-Person" },
    { icon: Users, text: "500+ Participants" },
    { icon: Trophy, text: "₹10L+ in Prizes" }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
            <span className="font-semibold">About the Event</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            What is{' '}
            <span className="font-romantic text-romantic-300">Romantic Hackathon</span>?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed"
          >
            A unique hackathon experience designed for couples and partners who love to code together. 
            Over 48 hours, you'll collaborate, innovate, and create something amazing while strengthening 
            your relationship through the power of technology.
          </motion.p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.text}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-romantic-400 to-hackathon-400 rounded-full mb-4">
                  <highlight.icon size={28} className="text-white" />
                </div>
                <div className="text-white font-medium">{highlight.text}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-romantic-400/50 transition-all duration-300 h-full">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-romantic-400 to-hackathon-400 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-romantic-500/20 to-hackathon-500/20 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-6"
            >
              Ready to Code with Love? 💕
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.9, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            >
              Join hundreds of couples in this unique hackathon experience. 
              Build, learn, and grow together while creating something amazing!
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.1, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-romantic-500 to-hackathon-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Register Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
