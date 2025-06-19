import React, { useEffect, useRef, useState } from 'react';
import { Building2, Users, Globe, Award } from 'lucide-react';

const Customer = () => {
  const [visibleLogos, setVisibleLogos] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const companies = [
    { name: 'TechCorp', logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'GlobalTech', logo: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Innovation Labs', logo: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'Digital Solutions', logo: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'FutureTech', logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=200' },
    { name: 'CloudWorks', logo: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=200' }
  ];

  const highlights = [
    {
      icon: Building2,
      title: 'Enterprise Clients',
      description: 'Trusted by Fortune 500 companies worldwide',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Growing Community',
      description: 'Over 10,000 satisfied customers globally',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'Global Presence',
      description: 'Serving clients across 50+ countries',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Award-winning solutions and services',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleLogos(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const logoElements = sectionRef.current?.querySelectorAll('.company-logo');
    logoElements?.forEach(logo => observer.observe(logo));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
      
      <div ref={sectionRef} className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Trusted By Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of companies that have transformed their business with our solutions
          </p>
        </div>

        {/* Company Logos */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {companies.map((company, index) => (
              <div
                key={company.name}
                data-index={index}
                className={`company-logo group relative p-6 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-500 transform hover:-translate-y-1 ${
                  visibleLogos[index] ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-square relative overflow-hidden rounded-lg">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="mt-4 text-center">
                  <h3 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {company.name}
                  </h3>
                </div>

                <div className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-500 transform hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${(index + companies.length) * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${highlight.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {highlight.title}
                </h3>

                <p className="text-gray-300 text-sm">
                  {highlight.description}
                </p>

                <div className="absolute bottom-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can help transform your business with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                Start Your Project
              </button>
              <button className="px-8 py-3 border border-gray-600 rounded-full hover:border-gray-400 transition-all duration-300 backdrop-blur-sm">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
    </section>
  );
};

export default Customer;