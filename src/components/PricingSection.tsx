import React, { useState, useRef, useEffect } from 'react';
import { Check, Star, Zap, Crown, Rocket } from 'lucide-react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      description: 'Perfect for small projects and startups',
      monthlyPrice: 29,
      annualPrice: 290,
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      features: [
        '5 Projects',
        'Basic Support',
        '10GB Storage',
        'Standard Templates',
        'Email Integration',
        'Basic Analytics'
      ]
    },
    {
      name: 'Professional',
      icon: Star,
      description: 'Ideal for growing businesses',
      monthlyPrice: 79,
      annualPrice: 790,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      features: [
        'Unlimited Projects',
        'Priority Support',
        '100GB Storage',
        'Premium Templates',
        'Advanced Integrations',
        'Detailed Analytics',
        'Custom Branding',
        'API Access'
      ]
    },
    {
      name: 'Enterprise',
      icon: Crown,
      description: 'For large organizations',
      monthlyPrice: 199,
      annualPrice: 1990,
      color: 'from-yellow-500 to-orange-500',
      popular: false,
      features: [
        'Unlimited Everything',
        '24/7 Dedicated Support',
        'Unlimited Storage',
        'Custom Development',
        'White-label Solution',
        'Advanced Security',
        'Custom Integrations',
        'Dedicated Account Manager'
      ]
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

    const cards = sectionRef.current?.querySelectorAll('.pricing-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-blue-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Choose Your Plan
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Flexible pricing options designed to scale with your business needs
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isAnnual ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-600'
              }`}
            >
              <div className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                isAnnual ? 'translate-x-9' : 'translate-x-1'
              }`}></div>
            </button>
            <span className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
              Annual
              <span className="ml-2 px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const savings = isAnnual ? (plan.monthlyPrice * 12 - plan.annualPrice) : 0;

            return (
              <div
                key={index}
                data-index={index}
                className={`pricing-card group relative p-8 rounded-2xl border transition-all duration-500 transform hover:-translate-y-4 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/50 scale-105' 
                    : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                } backdrop-blur-sm ${
                  visibleCards[index] ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                      <Rocket className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} p-4 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>

                  <div className="mb-4">
                    <span className="text-4xl font-bold text-white">${price}</span>
                    <span className="text-gray-400">/{isAnnual ? 'year' : 'month'}</span>
                  </div>

                  {isAnnual && savings > 0 && (
                    <div className="text-green-400 text-sm">
                      Save ${savings} per year
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25'
                    : 'border border-gray-600 text-white hover:border-gray-400 hover:bg-gray-700/30'
                }`}>
                  Get Started
                </button>

                {/* Animated border for popular plan */}
                {plan.popular && (
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-20 animate-gradient-shift"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-2">30-Day Money Back Guarantee</h3>
            <p className="text-gray-300">
              Try our service risk-free. If you're not completely satisfied, we'll refund your money.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;