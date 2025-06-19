import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const Stats = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const statsData = [
    { 
      icon: TrendingUp, 
      value: 500, 
      suffix: '+', 
      label: 'Projects Completed',
      description: 'Successful projects delivered',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: Users, 
      value: 98, 
      suffix: '%', 
      label: 'Client Satisfaction',
      description: 'Happy clients worldwide',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: Award, 
      value: 25, 
      suffix: '+', 
      label: 'Awards Won',
      description: 'Industry recognition',
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      icon: Clock, 
      value: 24, 
      suffix: '/7', 
      label: 'Support Available',
      description: 'Round the clock assistance',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    statsData.forEach((stat, index) => {
      let current = 0;
      const increment = stat.value / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(timer);
        }
        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = Math.floor(current);
          return newCounters;
        });
      }, 20);
    });
  };

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900/10 to-purple-900/10"></div>
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 via-transparent to-purple-500 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Our Impact
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Numbers that speak for our commitment to excellence and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`relative group p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                     style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>

                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${stat.color} p-4 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {counters[index]}{stat.suffix}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-gray-400 text-sm">
                    {stat.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 rounded-b-2xl overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-2000 ease-out`}
                    style={{ 
                      width: isVisible ? '100%' : '0%',
                      transitionDelay: `${index * 200 + 500}ms`
                    }}
                  ></div>
                </div>

                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
            );
          })}
        </div>

        {/* Interactive Chart Visualization */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-8">Growth Over Time</h3>
            <div className="relative h-64 flex items-end justify-center space-x-4">
              {[65, 78, 82, 91, 88, 95, 100].map((height, index) => (
                <div key={index} className="relative group">
                  <div 
                    className={`w-12 bg-gradient-to-t from-blue-600 to-purple-600 rounded-t-lg transition-all duration-1000 hover:shadow-lg hover:shadow-blue-500/25 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ 
                      height: isVisible ? `${height}%` : '0%',
                      transitionDelay: `${index * 100 + 1000}ms`
                    }}
                  ></div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    {height}%
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-8 mt-4 text-sm text-gray-400">
              {['2019', '2020', '2021', '2022', '2023', '2024', '2025'].map((year) => (
                <span key={year}>{year}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;