import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Code, Users, Trophy, Clock, Coffee, Music, Camera, Gift, Star } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "Romantic Breaks",
      description: "Take breaks together with romantic activities, coffee dates, and bonding moments",
      color: "from-romantic-400 to-romantic-600"
    },
    {
      icon: Code,
      title: "Pair Programming",
      description: "Code together in real-time with collaborative development tools and pair programming sessions",
      color: "from-hackathon-400 to-hackathon-600"
    },
    {
      icon: Users,
      title: "Couple Networking",
      description: "Connect with other tech couples and build lasting friendships in the community",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Trophy,
      title: "Special Categories",
      description: "Win prizes in unique categories like 'Most Romantic Project' and 'Best Couple Collaboration'",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "48 hours with built-in breaks for meals, rest, and romantic moments",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Coffee,
      title: "Virtual Cafes",
      description: "Join virtual coffee chats and networking sessions with other participants",
      color: "from-orange-400 to-orange-600"
    }
  ]

  const specialFeatures = [
    {
      icon: Music,
      title: "Romantic Playlists",
      description: "Curated music playlists to keep the mood romantic while coding"
    },
    {
      icon: Camera,
      title: "Memory Capture",
      description: "Document your hackathon journey with photo opportunities and video diaries"
    },
    {
      icon: Gift,
      title: "Surprise Elements",
      description: "Unexpected romantic surprises throughout the event to keep spirits high"
    },
    {
      icon: Star,
      title: "Celebration",
      description: "Special closing ceremony celebrating love, innovation, and achievement"
    }
  ]

  return (
    <section id="features" className="py-20 relative overflow-hidden">
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
            <Star size={20} />
            <span className="font-semibold">Unique Features</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Why This Hackathon is{' '}
            <span className="font-romantic text-romantic-300">Special</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed"
          >
            We've designed this hackathon to be more than just coding. It's about building 
            relationships, creating memories, and innovating together with the person you love.
          </motion.p>
        </motion.div>

        {/* Main Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/80 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            <span className="font-romantic text-romantic-300">Extra</span> Special Touches
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.9 + index * 0.1, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-romantic-500/20 to-hackathon-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-romantic-400/50 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-romantic-400 to-hackathon-400 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Demo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-romantic-500/20 to-hackathon-500/20 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-6"
            >
              Experience the Magic ✨
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            >
              This isn't just another hackathon. It's a celebration of love, 
              technology, and the amazing things couples can create together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.7, type: "spring" }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-romantic-500 to-hackathon-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Join the Experience
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
