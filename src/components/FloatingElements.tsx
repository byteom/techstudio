import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Star, Sparkles, Hexagon, Triangle, Circle } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { Icon: Zap, color: 'text-cyan-400', size: 'w-6 h-6', delay: 0 },
    { Icon: Star, color: 'text-purple-400', size: 'w-5 h-5', delay: 1 },
    { Icon: Sparkles, color: 'text-pink-400', size: 'w-7 h-7', delay: 2 },
    { Icon: Hexagon, color: 'text-blue-400', size: 'w-8 h-8', delay: 3 },
    { Icon: Triangle, color: 'text-green-400', size: 'w-6 h-6', delay: 4 },
    { Icon: Circle, color: 'text-yellow-400', size: 'w-5 h-5', delay: 5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {elements.map((element, index) => {
        const Icon = element.Icon;
        return (
          <motion.div
            key={index}
            className={`absolute ${element.color} ${element.size} opacity-30`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 0,
              scale: 0,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              rotate: [0, 180, 360],
              scale: [0, 1, 0.5, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: element.delay,
              ease: "linear",
            }}
          >
            <Icon className="w-full h-full" />
          </motion.div>
        );
      })}

      {/* Floating Orbs */}
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={`orb-${index}`}
          className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Data Streams */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={`stream-${index}`}
          className="absolute w-px h-20 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-40"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -100,
          }}
          animate={{
            y: window.innerHeight + 100,
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: index * 2,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;