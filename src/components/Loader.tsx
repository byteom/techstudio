import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Star, Sparkles, Code, Palette, Rocket } from 'lucide-react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const [showIcons, setShowIcons] = useState(false);

  const loadingTexts = [
    'Initializing Neural Networks...',
    'Loading Quantum Processors...',
    'Calibrating Holographic Interface...',
    'Synchronizing Reality Matrix...',
    'Activating Future Mode...'
  ];

  const icons = [Zap, Star, Sparkles, Code, Palette, Rocket];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1.5;
      });
    }, 40);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    setTimeout(() => setShowIcons(true), 500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.5, 1, 1.5],
            opacity: [0.8, 0.3, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Cyber Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent transform -skew-y-12 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent transform skew-x-12 animate-pulse delay-1000"></div>
      </div>

      <div className="text-center relative z-10 max-w-2xl mx-auto px-6">
        {/* Main Logo/Brand */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div 
            className="flex items-center justify-center gap-4 mb-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            TechStudio
          </motion.div>
          <motion.div 
            className="text-gray-400 text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Crafting Digital Excellence
          </motion.div>
        </motion.div>

        {/* Advanced Loading Animation */}
        <div className="relative w-40 h-40 mx-auto mb-16">
          {/* Outer Rings */}
          {[...Array(4)].map((_, index) => (
            <motion.div
              key={index}
              className={`absolute inset-${index * 2} border-2 rounded-full`}
              style={{
                borderColor: index % 2 === 0 ? '#06B6D4' : '#8B5CF6',
                borderTopColor: 'transparent',
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 2 + index * 0.5,
                repeat: Infinity,
                ease: "linear",
                direction: index % 2 === 0 ? 'normal' : 'reverse'
              }}
            />
          ))}
          
          {/* Center Orb */}
          <motion.div 
            className="absolute inset-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1],
              boxShadow: [
                '0 0 20px rgba(59, 130, 246, 0.5)',
                '0 0 40px rgba(139, 92, 246, 0.8)',
                '0 0 20px rgba(59, 130, 246, 0.5)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <motion.div
              className="text-white text-2xl font-bold"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              {Math.round(progress)}%
            </motion.div>
          </motion.div>
        </div>

        {/* Loading Text with Glitch Effect */}
        <motion.div 
          className="text-gray-300 text-xl mb-12 h-8"
          key={currentText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            animate={{
              textShadow: [
                '0 0 0px rgba(6, 182, 212, 0)',
                '2px 0 0px rgba(6, 182, 212, 0.8)',
                '0 0 0px rgba(6, 182, 212, 0)',
              ],
            }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            {loadingTexts[currentText]}
          </motion.span>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mx-auto mb-12">
          <div className="flex justify-between text-sm text-gray-400 mb-3">
            <span>Loading Experience</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden relative">
            <motion.div 
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 via-purple-500 to-pink-500 rounded-full relative"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </div>
        </div>

        {/* Floating Icons */}
        <AnimatePresence>
          {showIcons && (
            <div className="grid grid-cols-3 gap-8 max-w-xs mx-auto">
              {icons.slice(0, 6).map((Icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    rotate: 0,
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    delay: index * 0.2,
                    duration: 0.8,
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }
                  }}
                  className="flex items-center justify-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-cyan-500/30">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Data Streams */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-20 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-60"
              initial={{
                x: Math.random() * window.innerWidth,
                y: -100,
              }}
              animate={{
                y: window.innerHeight + 100,
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loader;