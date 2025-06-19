import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Zap, Shield, Sparkles, Play } from 'lucide-react';
import RippleEffect from './RippleEffect';

interface HeroProps {
  setCursorVariant: (variant: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setCursorVariant }) => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xPos = (clientX / innerWidth) * 100;
      const yPos = (clientY / innerHeight) * 100;
      
      heroRef.current.style.setProperty('--mouse-x', `${xPos}%`);
      heroRef.current.style.setProperty('--mouse-y', `${yPos}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
            rgba(59, 130, 246, 0.15) 0%, 
            rgba(139, 92, 246, 0.1) 25%, 
            rgba(6, 182, 212, 0.05) 50%, 
            transparent 70%
          ),
          linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%)
        `
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Holographic Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent transform -skew-y-12 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/20 to-transparent transform skew-x-12 animate-pulse delay-1000"></div>
      </div>

      <motion.div 
        className="container mx-auto px-6 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto">
          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div 
              className="absolute top-1/4 left-1/4"
              animate={{
                y: [-10, 10, -10],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Star className="text-cyan-400 w-8 h-8 opacity-60" />
            </motion.div>
            <motion.div 
              className="absolute top-1/3 right-1/4"
              animate={{
                y: [10, -10, 10],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Zap className="text-purple-400 w-10 h-10 opacity-40" />
            </motion.div>
            <motion.div 
              className="absolute bottom-1/3 left-1/3"
              animate={{
                y: [-15, 15, -15],
                x: [-5, 5, -5],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            >
              <Shield className="text-pink-400 w-9 h-9 opacity-50" />
            </motion.div>
            <motion.div 
              className="absolute top-1/2 right-1/3"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Sparkles className="text-yellow-400 w-7 h-7 opacity-60" />
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none">
              <motion.span 
                className="bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                FUTURE
              </motion.span>
              <br />
              <motion.span 
                className="text-white"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(59, 130, 246, 0.5)',
                    '0 0 40px rgba(139, 92, 246, 0.8)',
                    '0 0 20px rgba(59, 130, 246, 0.5)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                IS NOW
              </motion.span>
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <p className="text-xl md:text-3xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto">
              Experience the next generation of digital innovation. We craft 
              <span className="text-cyan-400 font-semibold"> extraordinary experiences </span>
              that transcend reality and redefine possibilities.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <RippleEffect>
              <motion.button 
                className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 rounded-full text-xl font-bold overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={() => setCursorVariant('button')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '0%' }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center gap-3">
                  Launch Experience
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
            </RippleEffect>
            
            <motion.button 
              className="group flex items-center gap-3 px-8 py-4 border-2 border-gray-600 rounded-full text-lg hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setCursorVariant('button')}
              onMouseLeave={() => setCursorVariant('default')}
            >
              <Play className="w-5 h-5" />
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Enhanced Stats Preview */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: '1000+', label: 'Projects', icon: Star },
              { number: '99.9%', label: 'Uptime', icon: Shield },
              { number: '150+', label: 'Countries', icon: Zap },
              { number: '24/7', label: 'Support', icon: Sparkles }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  className="group relative p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 1 }}
                >
                  <Icon className="w-8 h-8 text-cyan-400 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-14 border-2 border-cyan-400 rounded-full flex justify-center relative overflow-hidden">
          <motion.div 
            className="w-2 h-6 bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full mt-2"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;