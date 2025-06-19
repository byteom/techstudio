import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, BarChart3, PieChart, Activity, DollarSign, Users, Globe, Zap } from 'lucide-react';

const Analytics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLCanvasElement>(null);
  const pieChartRef = useRef<HTMLCanvasElement>(null);

  // Fake data for charts
  const monthlyData = [
    { month: 'Jan', revenue: 45000, users: 1200, growth: 12 },
    { month: 'Feb', revenue: 52000, users: 1450, growth: 15 },
    { month: 'Mar', revenue: 48000, users: 1380, growth: 8 },
    { month: 'Apr', revenue: 61000, users: 1650, growth: 22 },
    { month: 'May', revenue: 55000, users: 1520, growth: 18 },
    { month: 'Jun', revenue: 67000, users: 1820, growth: 28 },
    { month: 'Jul', revenue: 72000, users: 1950, growth: 32 },
    { month: 'Aug', revenue: 69000, users: 1880, growth: 25 },
    { month: 'Sep', revenue: 78000, users: 2100, growth: 38 },
    { month: 'Oct', revenue: 82000, users: 2250, growth: 42 },
    { month: 'Nov', revenue: 89000, users: 2400, growth: 48 },
    { month: 'Dec', revenue: 95000, users: 2580, growth: 55 }
  ];

  const pieData = [
    { label: 'Web Development', value: 35, color: '#3B82F6' },
    { label: 'Mobile Apps', value: 25, color: '#8B5CF6' },
    { label: 'UI/UX Design', value: 20, color: '#06B6D4' },
    { label: 'Consulting', value: 15, color: '#10B981' },
    { label: 'Other', value: 5, color: '#F59E0B' }
  ];

  const kpiData = [
    { icon: DollarSign, label: 'Total Revenue', value: '$2.4M', change: '+23%', color: 'from-green-500 to-emerald-500' },
    { icon: Users, label: 'Active Users', value: '45.2K', change: '+18%', color: 'from-blue-500 to-cyan-500' },
    { icon: Globe, label: 'Global Reach', value: '127', change: '+12%', color: 'from-purple-500 to-pink-500' },
    { icon: Zap, label: 'Performance', value: '99.9%', change: '+0.2%', color: 'from-yellow-500 to-orange-500' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          drawCharts();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const drawCharts = () => {
    drawLineChart();
    drawPieChart();
  };

  const drawLineChart = () => {
    const canvas = chartRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    const padding = 40;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 10; i++) {
      const y = padding + (height - 2 * padding) * i / 10;
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(width - padding, y);
      ctx.stroke();
    }

    // Draw revenue line
    ctx.strokeStyle = '#3B82F6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    monthlyData.forEach((data, index) => {
      const x = padding + (width - 2 * padding) * index / (monthlyData.length - 1);
      const y = height - padding - (height - 2 * padding) * (data.revenue - 40000) / 60000;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();

    // Draw data points
    monthlyData.forEach((data, index) => {
      const x = padding + (width - 2 * padding) * index / (monthlyData.length - 1);
      const y = height - padding - (height - 2 * padding) * (data.revenue - 40000) / 60000;
      
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = '#3B82F6';
      ctx.fill();
      
      // Glow effect
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
      ctx.fill();
    });

    // Draw users line
    ctx.strokeStyle = '#8B5CF6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    
    monthlyData.forEach((data, index) => {
      const x = padding + (width - 2 * padding) * index / (monthlyData.length - 1);
      const y = height - padding - (height - 2 * padding) * (data.users - 1000) / 1600;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();

    // Draw month labels
    ctx.fillStyle = '#9CA3AF';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    monthlyData.forEach((data, index) => {
      const x = padding + (width - 2 * padding) * index / (monthlyData.length - 1);
      ctx.fillText(data.month, x, height - 10);
    });
  };

  const drawPieChart = () => {
    const canvas = pieChartRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth * 2;
    canvas.height = canvas.offsetHeight * 2;
    ctx.scale(2, 2);

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 20;

    let currentAngle = -Math.PI / 2;

    pieData.forEach((segment, index) => {
      const sliceAngle = (segment.value / 100) * 2 * Math.PI;
      
      // Draw slice
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
      ctx.closePath();
      ctx.fillStyle = segment.color;
      ctx.fill();

      // Add glow effect
      ctx.shadowColor = segment.color;
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw percentage text
      const textAngle = currentAngle + sliceAngle / 2;
      const textX = centerX + Math.cos(textAngle) * (radius * 0.7);
      const textY = centerY + Math.sin(textAngle) * (radius * 0.7);
      
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 14px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`${segment.value}%`, textX, textY);

      currentAngle += sliceAngle;
    });
  };

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/10 to-purple-900/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Analytics Dashboard
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time insights and data visualization to track performance and growth
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {kpiData.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${kpi.color} p-3`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-green-400 text-sm font-medium">{kpi.change}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-1">{kpi.value}</h3>
                <p className="text-gray-400 text-sm">{kpi.label}</p>

                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300"
                     style={{ backgroundImage: `linear-gradient(to right, ${kpi.color.split(' ')[1]}, ${kpi.color.split(' ')[3]})` }}></div>
              </div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Line Chart */}
          <div className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 ${
            isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '500ms' }}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                Revenue & Users Growth
              </h3>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-300">Revenue</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-300">Users</span>
                </div>
              </div>
            </div>
            <canvas ref={chartRef} className="w-full h-64"></canvas>
          </div>

          {/* Pie Chart */}
          <div className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 ${
            isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
          }`} style={{ animationDelay: '600ms' }}>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <PieChart className="w-5 h-5 text-purple-400" />
              Service Distribution
            </h3>
            <div className="flex items-center gap-6">
              <canvas ref={pieChartRef} className="w-48 h-48"></canvas>
              <div className="flex-1">
                {pieData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-gray-300 text-sm">{item.label}</span>
                    </div>
                    <span className="text-white font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Activity Feed */}
        <div className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 ${
          isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
        }`} style={{ animationDelay: '700ms' }}>
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-green-400" />
            Real-time Activity
          </h3>
          
          <div className="space-y-4">
            {[
              { user: 'John Doe', action: 'completed project "E-commerce Platform"', time: '2 min ago', type: 'success' },
              { user: 'Sarah Wilson', action: 'started new consultation call', time: '5 min ago', type: 'info' },
              { user: 'Mike Johnson', action: 'submitted design feedback', time: '8 min ago', type: 'warning' },
              { user: 'Emma Davis', action: 'approved final deliverables', time: '12 min ago', type: 'success' },
              { user: 'Alex Chen', action: 'requested project revision', time: '15 min ago', type: 'info' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-200">
                <div className={`w-3 h-3 rounded-full ${
                  activity.type === 'success' ? 'bg-green-400' :
                  activity.type === 'warning' ? 'bg-yellow-400' : 'bg-blue-400'
                } animate-pulse`}></div>
                
                <div className="flex-1">
                  <p className="text-white">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-gray-400 text-sm">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;