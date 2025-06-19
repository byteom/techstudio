import React, { useState, useRef } from 'react';

interface RippleEffectProps {
  children: React.ReactNode;
  duration?: number;
  color?: string;
}

const RippleEffect: React.FC<RippleEffectProps> = ({ 
  children, 
  duration = 600, 
  color = 'rgba(255, 255, 255, 0.3)' 
}) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const createRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const id = Date.now();

    setRipples(prev => [...prev, { x, y, id }]);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id));
    }, duration);
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden inline-block"
      onClick={createRipple}
    >
      {children}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none animate-ripple"
          style={{
            left: ripple.x - 20,
            top: ripple.y - 20,
            width: 40,
            height: 40,
            backgroundColor: color,
            animation: `ripple ${duration}ms linear`
          }}
        />
      ))}
    </div>
  );
};

export default RippleEffect;