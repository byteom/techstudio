import React, { useState, useRef, useEffect } from 'react';
import { Linkedin, Twitter, Github, Mail, MapPin, Award, Coffee, Heart } from 'lucide-react';

const TeamSection = () => {
  const [visibleMembers, setVisibleMembers] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const teamMembers = [
    {
      name: 'Alex Rodriguez',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Visionary leader with 15+ years in tech innovation and business strategy.',
      location: 'San Francisco, CA',
      achievements: ['Forbes 30 Under 30', 'Tech Innovator 2023'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'alex@techstudio.com'
      },
      skills: ['Strategy', 'Leadership', 'Innovation'],
      funFact: 'Coffee enthusiast with 500+ different beans tried'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO & Co-Founder',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Full-stack architect passionate about scalable solutions and emerging technologies.',
      location: 'Seattle, WA',
      achievements: ['Google Developer Expert', 'Open Source Contributor'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'sarah@techstudio.com'
      },
      skills: ['Architecture', 'AI/ML', 'Cloud'],
      funFact: 'Maintains 12 open-source projects with 50K+ stars'
    },
    {
      name: 'Marcus Johnson',
      role: 'Lead Designer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creative director specializing in user experience and brand identity design.',
      location: 'New York, NY',
      achievements: ['Design Awards Winner', 'UX Conference Speaker'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'marcus@techstudio.com'
      },
      skills: ['UI/UX', 'Branding', 'Animation'],
      funFact: 'Designed interfaces used by 10M+ users daily'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Marketing',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Growth hacker and brand strategist with expertise in digital marketing.',
      location: 'Austin, TX',
      achievements: ['Marketing Excellence Award', 'Growth Hacker of the Year'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'emily@techstudio.com'
      },
      skills: ['Growth', 'Analytics', 'Content'],
      funFact: 'Increased client engagement by 400% in 6 months'
    },
    {
      name: 'David Kim',
      role: 'Senior Developer',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Backend specialist focused on performance optimization and security.',
      location: 'Los Angeles, CA',
      achievements: ['Security Expert Certified', 'Performance Optimization Guru'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'david@techstudio.com'
      },
      skills: ['Backend', 'Security', 'DevOps'],
      funFact: 'Optimized systems serving 1B+ requests per day'
    },
    {
      name: 'Lisa Park',
      role: 'Product Manager',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Product strategist with a passion for user-centered design and data-driven decisions.',
      location: 'Chicago, IL',
      achievements: ['Product Leader Award', 'Innovation Champion'],
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
        email: 'lisa@techstudio.com'
      },
      skills: ['Product Strategy', 'Analytics', 'User Research'],
      funFact: 'Launched 15+ successful products with 95% user satisfaction'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleMembers(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const memberCards = sectionRef.current?.querySelectorAll('.team-member');
    memberCards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The brilliant minds behind our innovative solutions and exceptional client experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-index={index}
              className={`team-member group relative p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 ${
                visibleMembers[index] ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-blue-500/20 group-hover:border-blue-500/40 transition-colors duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Status Indicator */}
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-800 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-blue-400 font-medium mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
                
                {/* Location */}
                <div className="flex items-center justify-center gap-1 text-gray-400 text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  {member.location}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-400 mb-2 flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  Achievements
                </h4>
                <ul className="space-y-1">
                  {member.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-xs text-gray-300 flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fun Fact */}
              <div className="mb-6 p-3 bg-gray-700/30 rounded-lg">
                <h4 className="text-sm font-medium text-gray-400 mb-1 flex items-center gap-1">
                  <Coffee className="w-4 h-4" />
                  Fun Fact
                </h4>
                <p className="text-xs text-gray-300">{member.funFact}</p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                <a
                  href={member.social.linkedin}
                  className="w-8 h-8 bg-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={member.social.twitter}
                  className="w-8 h-8 bg-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-500/20 transition-all duration-200"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={member.social.github}
                  className="w-8 h-8 bg-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-500/20 transition-all duration-200"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="w-8 h-8 bg-gray-700/50 rounded-full flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-green-500/20 transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Heart, label: 'Team Members', value: '25+', color: 'text-red-400' },
            { icon: Coffee, label: 'Coffee Consumed', value: '2.5K', color: 'text-yellow-400' },
            { icon: Award, label: 'Awards Won', value: '47', color: 'text-blue-400' },
            { icon: MapPin, label: 'Countries', value: '12', color: 'text-green-400' }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <Icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;