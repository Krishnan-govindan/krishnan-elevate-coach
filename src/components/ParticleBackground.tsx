import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.animationDuration = (Math.random() * 3 + 5) + 's';
      container.appendChild(particle);

      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, 8000);
    };

    const interval = setInterval(createParticle, 300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div ref={containerRef} className="particles pointer-events-none" />;
};

export default ParticleBackground;