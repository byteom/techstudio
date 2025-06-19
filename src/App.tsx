import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Customer from './components/Customer';
import Analytics from './components/Analytics';
import PricingSection from './components/PricingSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ParticleBackground from './components/ParticleBackground';
import CyberGrid from './components/CyberGrid';
import FloatingElements from './components/FloatingElements';
import './styles/animations.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    text: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      scale: 1.5,
      mixBlendMode: 'difference' as const,
    },
    button: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 2,
      backgroundColor: 'rgba(59, 130, 246, 0.3)',
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Advanced Custom Cursor */}
      <motion.div
        className="fixed w-8 h-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      {/* Outer cursor ring */}
      <motion.div
        className="fixed w-12 h-12 border-2 border-cyan-400/30 rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      />

      {/* Background Effects */}
      <ParticleBackground />
      <CyberGrid />
      <FloatingElements />
      
      {/* Main Content */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Header setCursorVariant={setCursorVariant} />
          <Hero setCursorVariant={setCursorVariant} />
          <Features />
          <Stats />
          <Analytics />
          <Portfolio />
          <Testimonials />
          <Customer />
          <PricingSection />
          <TeamSection />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;