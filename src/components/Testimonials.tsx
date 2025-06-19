import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Working with this team was an absolute game-changer for our business. Their attention to detail and innovative approach exceeded all our expectations.',
      rating: 5,
      company: 'TechStart Inc.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO, Digital Solutions',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'The level of professionalism and technical expertise demonstrated throughout our project was outstanding. Highly recommend their services.',
      rating: 5,
      company: 'Digital Solutions'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder, Creative Agency',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'They transformed our vision into reality with such precision and creativity. The final product surpassed our wildest dreams.',
      rating: 5,
      company: 'Creative Agency'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Director, E-Commerce Plus',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Exceptional work quality and communication throughout the entire process. They delivered exactly what we needed, on time and within budget.',
      rating: 5,
      company: 'E-Commerce Plus'
    },
    {
      id: 5,
      name: 'Lisa Wang',
      role: 'VP Marketing, Global Corp',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
      content: 'Their innovative solutions and strategic thinking helped us achieve a 300% increase in user engagement. Simply phenomenal results.',
      rating: 5,
      company: 'Global Corp'
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-blue-900/10 to-purple-900/10"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-transparent to-purple-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              What Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied clients
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main Carousel */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 md:p-12 mx-4">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0">
                          <div className="relative">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-blue-500/20"
                            />
                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                              <Quote className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </div>

                        <div className="flex-1 text-center md:text-left">
                          <div className="flex justify-center md:justify-start mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                            ))}
                          </div>

                          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6 italic">
                            "{testimonial.content}"
                          </p>

                          <div>
                            <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                            <p className="text-blue-400 mb-1">{testimonial.role}</p>
                            <p className="text-gray-500 text-sm">{testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-700/80 transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full flex items-center justify-center text-white hover:bg-gray-700/80 transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Thumbnails */}
          <div className="hidden md:flex justify-center mt-8 space-x-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => goToSlide(index)}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-gray-700/50 border border-blue-500/30'
                    : 'bg-gray-800/30 hover:bg-gray-700/30'
                }`}
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="text-sm font-medium text-white">{testimonial.name}</p>
                  <p className="text-xs text-gray-400">{testimonial.company}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;