import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Heart, Coffee, Code, Trophy, Users, Music } from 'lucide-react'

const Timeline = () => {
  const timelineEvents = [
    {
      day: "Day 1",
      date: "February 14",
      title: "Opening & Team Formation",
      time: "9:00 AM - 12:00 PM",
      description: "Kickoff ceremony, team formation, and romantic ice-breaker activities",
      icon: Heart,
      color: "from-romantic-400 to-romantic-600",
      activities: ["Opening Ceremony", "Team Formation", "Ice Breakers", "Lunch Break"]
    },
    {
      day: "Day 1",
      date: "February 14",
      title: "Coding Begins",
      time: "1:00 PM - 6:00 PM",
      description: "Start building your project with your partner. First coding session begins!",
      icon: Code,
      color: "from-hackathon-400 to-hackathon-600",
      activities: ["Project Planning", "Coding Session", "Coffee Break", "Dinner"]
    },
    {
      day: "Day 1",
      date: "February 14",
      title: "Romantic Evening",
      time: "7:00 PM - 9:00 PM",
      description: "Take a break together. Enjoy romantic activities and bonding time",
      icon: Coffee,
      color: "from-purple-400 to-purple-600",
      activities: ["Romantic Dinner", "Bonding Activities", "Music Session", "Rest"]
    },
    {
      day: "Day 2",
      date: "February 15",
      title: "Full Day Coding",
      time: "9:00 AM - 6:00 PM",
      description: "Intensive coding session with breaks for meals and quick romantic moments",
      icon: Code,
      color: "from-green-400 to-green-600",
      activities: ["Morning Coding", "Lunch Break", "Afternoon Session", "Progress Check"]
    },
    {
      day: "Day 2",
      date: "February 15",
      title: "Networking & Fun",
      time: "7:00 PM - 9:00 PM",
      description: "Connect with other couples and enjoy fun activities together",
      icon: Users,
      color: "from-orange-400 to-orange-600",
      activities: ["Couple Networking", "Fun Games", "Music & Dance", "Rest"]
    },
    {
      day: "Day 3",
      date: "February 16",
      title: "Final Push",
      time: "9:00 AM - 2:00 PM",
      description: "Last coding session to complete your project and prepare for submission",
      icon: Code,
      color: "from-red-400 to-red-600",
      activities: ["Final Coding", "Project Completion", "Submission Prep", "Lunch"]
    },
    {
      day: "Day 3",
      date: "February 16",
      title: "Presentations & Awards",
      time: "3:00 PM - 7:00 PM",
      description: "Present your projects and celebrate achievements with the community",
      icon: Trophy,
      color: "from-yellow-400 to-yellow-600",
      activities: ["Project Demos", "Judging", "Awards Ceremony", "Celebration"]
    }
  ]

  const specialMoments = [
    { icon: Heart, text: "Romantic Breaks Every 4 Hours" },
    { icon: Coffee, text: "Virtual Coffee Chats" },
    { icon: Music, text: "Curated Playlists" },
    { icon: Users, text: "Couple Networking Sessions" }
  ]

  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
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
            <Calendar size={20} />
            <span className="font-semibold">Event Timeline</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Your{' '}
            <span className="font-romantic text-romantic-300">48-Hour</span> Journey
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed"
          >
            Experience the perfect blend of coding intensity and romantic moments. 
            Our carefully crafted schedule ensures you have time for both innovation and love.
          </motion.p>
        </motion.div>

        {/* Special Moments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {specialMoments.map((moment, index) => (
            <motion.div
              key={moment.text}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-romantic-500/20 to-hackathon-500/20 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-romantic-400 to-hackathon-400 rounded-full mb-4">
                  <moment.icon size={24} className="text-white" />
                </div>
                <div className="text-white/90 font-medium text-sm">{moment.text}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-romantic-400 to-hackathon-400 h-full hidden lg:block" />
          
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={`${event.day}-${event.title}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:space-x-8 space-y-4 lg:space-y-0`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-romantic-400 to-hackathon-400 rounded-full border-4 border-white shadow-lg hidden lg:block" />
                
                {/* Content */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`flex-1 ${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                  } text-center lg:text-left`}
                >
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 relative overflow-hidden">
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className={`flex items-center space-x-3 mb-4 ${
                        index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                      } justify-center`}>
                        <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${event.color} rounded-xl`}>
                          <event.icon size={24} className="text-white" />
                        </div>
                        <div>
                          <div className="text-sm text-white/60 font-medium">{event.day}</div>
                          <div className="text-lg font-bold text-white">{event.date}</div>
                        </div>
                      </div>
                      
                      {/* Title & Time */}
                      <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                      <div className="text-romantic-300 font-semibold mb-4 flex items-center justify-center lg:justify-start space-x-2">
                        <Clock size={16} />
                        <span>{event.time}</span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-white/80 mb-6 leading-relaxed">{event.description}</p>
                      
                      {/* Activities */}
                      <div className="space-y-2">
                        {event.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="flex items-center space-x-2 text-white/70 text-sm">
                            <div className="w-2 h-2 bg-romantic-400 rounded-full" />
                            <span>{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-romantic-500/20 to-hackathon-500/20 backdrop-blur-md rounded-3xl p-12 border border-white/20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-6"
            >
              Ready for This Amazing Journey? 🚀
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.9, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            >
              Join us for 48 hours of coding, love, and unforgettable memories. 
              This is your chance to build something amazing with the person you love!
            </motion.p>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.1, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-romantic-500 to-hackathon-500 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline
