import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Services: ['Web Development', 'Mobile Apps', 'UI/UX Design', 'Consulting', 'Digital Marketing'],
    Company: ['About Us', 'Our Team', 'Careers', 'Blog', 'Press'],
    Resources: ['Documentation', 'Help Center', 'Privacy Policy', 'Terms of Service', 'Status'],
    Contact: ['hello@techstudio.com', '+1 (555) 123-4567', '123 Innovation Street, Tech City']
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="relative bg-gray-900 border-t border-gray-800">
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4">
                TechStudio
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-md">
                Creating extraordinary digital experiences that drive innovation and transform businesses worldwide.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-white font-semibold text-lg mb-4">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      {title === 'Contact' ? (
                        <div className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                          {index === 0 && <Mail className="w-4 h-4" />}
                          {index === 1 && <Phone className="w-4 h-4" />}
                          {index === 2 && <MapPin className="w-4 h-4" />}
                          <span className="text-sm">{link}</span>
                        </div>
                      ) : (
                        <a
                          href="#"
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block relative group"
                        >
                          {link}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 transition-all duration-200 group-hover:w-full"></span>
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest insights on technology trends and industry news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-200"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 text-white font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 TechStudio. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-50"></div>
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;