import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Eye, X } from 'lucide-react';
import RippleEffect from './RippleEffect';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A modern e-commerce platform with advanced features including real-time inventory, payment processing, and analytics dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Healthcare App',
      category: 'Mobile Development',
      image: 'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Revolutionary healthcare application connecting patients with doctors through telemedicine and AI-powered diagnostics.',
      technologies: ['React Native', 'Firebase', 'TensorFlow', 'WebRTC'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Finance Dashboard',
      category: 'Data Visualization',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive financial dashboard with real-time data visualization, portfolio tracking, and predictive analytics.',
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Social Media Platform',
      category: 'Full Stack',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Next-generation social media platform with advanced privacy controls, AI content moderation, and immersive experiences.',
      technologies: ['Next.js', 'GraphQL', 'Redis', 'AWS'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'AI-Powered CRM',
      category: 'Enterprise',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Enterprise CRM solution powered by artificial intelligence for predictive sales analytics and automated workflows.',
      technologies: ['Angular', 'Python', 'TensorFlow', 'Docker'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Learning Management System',
      category: 'Education Technology',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Interactive learning management system with gamification, progress tracking, and collaborative features.',
      technologies: ['React', 'Express', 'Socket.io', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const projectCards = sectionRef.current?.querySelectorAll('.project-card');
    projectCards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
      
      <div ref={sectionRef} className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our best work and the innovative solutions we've created for our clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-index={index}
              className={`project-card group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 ${
                visibleProjects[index] ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 right-4 px-3 py-1 bg-blue-600/80 backdrop-blur-sm rounded-full text-xs text-white">
                  {project.category}
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <RippleEffect>
                    <button 
                      onClick={() => setSelectedProject(project.id)}
                      className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200 flex items-center gap-2"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                  </RippleEffect>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-700/50 rounded-md text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700/50 rounded-md text-xs text-gray-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a href={project.liveUrl} className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    <a href={project.githubUrl} className="text-gray-400 hover:text-purple-400 transition-colors duration-200">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full bg-gray-800 rounded-2xl overflow-hidden animate-slide-up">
              <div className="relative">
                <img 
                  src={projects.find(p => p.id === selectedProject)?.image} 
                  alt=""
                  className="w-full h-64 object-cover"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-8">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </h3>
                  <p className="text-blue-400 text-lg">
                    {projects.find(p => p.id === selectedProject)?.category}
                  </p>
                </div>
                
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {projects.find(p => p.id === selectedProject)?.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-3">
                    {projects.find(p => p.id === selectedProject)?.technologies.map((tech) => (
                      <span key={tech} className="px-4 py-2 bg-gray-700/50 rounded-lg text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <RippleEffect>
                    <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </button>
                  </RippleEffect>
                  
                  <button className="px-6 py-3 border border-gray-600 rounded-full text-white hover:border-gray-400 transition-all duration-200 flex items-center gap-2">
                    <Github className="w-4 h-4" />
                    Source Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;