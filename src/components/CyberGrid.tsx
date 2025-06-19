import React, { useEffect, useRef } from 'react';

const CyberGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gridSize = 50;
    let animationFrame: number;

    const drawGrid = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create pulsing effect
      const pulse = Math.sin(time * 0.002) * 0.5 + 0.5;
      
      ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 + pulse * 0.1})`;
      ctx.lineWidth = 1;

      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw glowing intersections
      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          if (Math.random() > 0.98) {
            const glowSize = 3 + pulse * 2;
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, glowSize);
            gradient.addColorStop(0, `rgba(59, 130, 246, ${0.8 + pulse * 0.2})`);
            gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
            
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, glowSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animationFrame = requestAnimationFrame(drawGrid);
    };

    animationFrame = requestAnimationFrame(drawGrid);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-20"
    />
  );
};

export default CyberGrid;