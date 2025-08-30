import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Heart, Star, Gift, Users, Code, Award, Crown } from 'lucide-react'

const Prizes = () => {
  const mainPrizes = [
    {
      position: "1st Place",
      icon: Crown,
      prize: "₹5,00,000",
      description: "Grand Prize + Romantic Getaway Package",
      color: "from-yellow-400 to-yellow-600",
      features: ["Cash Prize", "Romantic Trip", "Tech Gadgets", "Mentorship"]
    },
    {
      position: "2nd Place",
      icon: Trophy,
      prize: "₹3,00,000",
      description: "Runner-up + Amazing Tech Bundle",
      color: "from-gray-400 to-gray-600",
      features: ["Cash Prize", "Tech Bundle", "Networking", "Certificates"]
    },
    {
      position: "3rd Place",
      icon: Award,
      prize: "₹1,00,000",
      description: "Third Place + Recognition Package",
      color: "from-orange-400 to-orange-600",
      features: ["Cash Prize", "Recognition", "Mentorship", "Certificates"]
    }
  ]

  const specialPrizes = [
    {
      category: "Most Romantic Project",
      icon: Heart,
      prize: "₹50,000",
      description: "For the project that best represents love and innovation",
      color: "from-romantic-400 to-romantic-600"
    },
    {
      category: "Best Couple Collaboration",
      icon: Users,
      prize: "₹50,000",
      description: "Awarded to the team with the best teamwork and communication",
      color: "from-blue-400 to-blue-600"
    },
    {
      category: "Most Innovative Solution",
      icon: Code,
      prize: "₹50,000",
      description: "For the most creative and innovative technical solution",
      color: "from-green-400 to-green-600"
    },
    {
      category: "Community Choice",
      icon: Star,
      prize: "₹25,000",
      description: "Voted by participants and the community",
      color: "from-purple-400 to-purple-600"
    }
  ]

  const additionalRewards = [
    "Internship Opportunities",
    "Job Placements",
    "Mentorship Programs",
    "Conference Invitations",
    "Tech Gadgets",
    "Romantic Getaways",
    "Networking Events",
    "Future Hackathon Passes"
  ]

  return (
    <section id="prizes" className="py-20 relative overflow-hidden">
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
            <Trophy size={20} />
            <span className="font-semibold">Amazing Prizes</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Win{' '}
            <span className="font-romantic text-romantic-300">₹10L+</span> in Prizes
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed"
          >
            Not just cash prizes, but experiences that will make your hackathon journey 
            unforgettable. From romantic getaways to amazing tech bundles, we've got it all!
          </motion.p>
        </motion.div>

        {/* Main Prizes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {mainPrizes.map((prize, index) => (
            <motion.div
              key={prize.position}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group ${
                index === 0 ? 'md:order-first' : ''
              }`}
            >
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${prize.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10 text-center">
                  {/* Position Badge */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${prize.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <prize.icon size={32} className="text-white" />
                  </div>
                  
                  {/* Position */}
                  <div className="text-2xl font-bold text-white mb-2">{prize.position}</div>
                  
                  {/* Prize Amount */}
                  <div className="text-4xl font-bold text-romantic-300 mb-4">{prize.prize}</div>
                  
                  {/* Description */}
                  <p className="text-white/80 mb-6 leading-relaxed">{prize.description}</p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {prize.features.map((feature, featIndex) => (
                      <div key={featIndex} className="flex items-center justify-center space-x-2 text-white/70 text-sm">
                        <div className="w-2 h-2 bg-romantic-400 rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Special Category Prizes */}
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
            <span className="font-romantic text-romantic-300">Special</span> Category Awards
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialPrizes.map((special, index) => (
              <motion.div
                key={special.category}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.9 + index * 0.1, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-r from-romantic-500/20 to-hackathon-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${special.color} rounded-full mb-4 group-hover:scale-110 transition-transform`}>
                    <special.icon size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{special.category}</h4>
                  <div className="text-2xl font-bold text-romantic-300 mb-2">{special.prize}</div>
                  <p className="text-white/80 text-sm">{special.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Plus Many More <span className="font-romantic text-romantic-300">Rewards</span>
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalRewards.map((reward, index) => (
              <motion.div
                key={reward}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 + index * 0.05, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-romantic-400/50 transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-romantic-400 to-hackathon-400 rounded-full mb-4 group-hover:scale-110 transition-transform">
                    <Gift size={24} className="text-white" />
                  </div>
                  <div className="text-white font-medium text-sm">{reward}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-romantic-500/20 to-hackathon-500/20 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.9, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-6"
            >
              Ready to Win Big? 🏆
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            >
              Join the hackathon and compete for amazing prizes worth over ₹10 lakhs. 
              But remember, the real prize is the experience and memories you'll create together!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.3, type: "spring" }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-romantic-500 to-hackathon-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Start Competing
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                View All Prizes
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Prizes
