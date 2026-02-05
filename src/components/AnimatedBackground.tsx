import { useEffect, useRef } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true }); // Optimize for alpha
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    const resizeCanvas = () => {
        // Debounce resize or just simple resize
        const { innerWidth, innerHeight } = window;
        if (canvas.width !== innerWidth || canvas.height !== innerHeight) {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            initParticles();
        }
    };

    const colors = isDarkMode 
      ? ['#4F46E5', '#EC4899', '#818cf8', '#f472b6', '#ffffff']
      : ['#4F46E5', '#EC4899', '#312e81', '#be185d', '#000000'];

    const createParticle = () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3, // Slower for smoother feel
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      };
    };

    const initParticles = () => {
        particles = [];
        // Reduce particle count based on screen size for performance
        const particleCount = window.innerWidth < 768 ? 25 : 50;
        for (let i = 0; i < particleCount; i++) {
            particles.push(createParticle());
        }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Initial setup

    let lastTime = 0;
    const animate = (time: number) => {
      // Calculate delta time
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;

      // Normalize speed (approx dry run based on 60fps ~ 16.67ms)
      // Cap at 0.1s to prevent huge jumps if tab was inactive
      const dt = Math.min(deltaTime / 16.67, 6);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Pre-calculate connection distance squared to avoid sqrt
      const connectionDistance = 100;
      const connectionDistanceSq = connectionDistance * connectionDistance;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        // Update with delta time
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        // Wrap
        if (p.x < 0) p.x = canvas.width;
        else if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        else if (p.y > canvas.height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();

        // Connections - O(N^2) but N is small
        for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p.x - p2.x;
            const dy = p.y - p2.y;
            const distSq = dx * dx + dy * dy;

            if (distSq < connectionDistanceSq) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                const opacity = 1 - distSq / connectionDistanceSq;
                ctx.strokeStyle = p.color; // Use one particle's color for the line
                ctx.globalAlpha = opacity * 0.2; // Lower opacity for lines
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
      }
      
      ctx.globalAlpha = 1.0; // Reset
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default AnimatedBackground;
