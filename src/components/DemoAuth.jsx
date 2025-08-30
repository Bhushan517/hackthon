import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Info, CheckCircle } from 'lucide-react'

const DemoAuth = () => {
  const demoCredentials = [
    { type: 'Email', value: 'demo@romantichack.com', icon: '📧' },
    { type: 'Password', value: 'demo123456', icon: '🔒' },
    { type: 'Partner Email', value: 'partner@romantichack.com', icon: '💕' }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-8 left-8 z-50 max-w-sm"
    >
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-romantic-400 to-hackathon-400 rounded-full flex items-center justify-center">
            <Info size={20} className="text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Demo Credentials</h3>
            <p className="text-white/70 text-sm">Try these to test the login</p>
          </div>
        </div>
        
        <div className="space-y-3">
          {demoCredentials.map((cred, index) => (
            <motion.div
              key={cred.type}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10"
            >
              <span className="text-2xl">{cred.icon}</span>
              <div className="flex-1">
                <div className="text-white/60 text-xs font-medium">{cred.type}</div>
                <div className="text-white font-mono text-sm">{cred.value}</div>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => navigator.clipboard.writeText(cred.value)}
                className="w-8 h-8 bg-gradient-to-br from-romantic-400 to-hackathon-400 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                title="Copy to clipboard"
              >
                <CheckCircle size={16} />
              </motion.button>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 p-3 bg-gradient-to-r from-romantic-500/20 to-hackathon-500/20 rounded-lg border border-white/20"
        >
          <div className="flex items-center space-x-2 text-white/80 text-sm">
            <Heart size={16} className="text-romantic-400" />
            <span>Click "Join Now" to test the authentication system!</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default DemoAuth
