import React, { useEffect, useRef, useState } from 'react';
import { Code, Palette, Zap, Shield, Globe, Smartphone } from 'lucide-react';

const Features = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Scalable, maintainable code that follows industry best practices and standards.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Stunning visual designs that capture attention and create lasting impressions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance ensuring your users get the best possible experience.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security measures to protect your data and users.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Multi-language support and CDN integration for worldwide accessibility.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Responsive designs that work flawlessly across all devices and screen sizes.',
      color: 'from-rose-500 to-pink-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const cards = sectionRef.current?.querySelectorAll('.feature-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
      
      <div ref={sectionRef} className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to build exceptional digital experiences that drive results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                data-index={index}
                className={`feature-card group relative p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${
                  visibleCards[index] ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"
                     style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
                
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Interactive Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Features;