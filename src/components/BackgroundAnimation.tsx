import { useEffect, useRef } from "react";

export const BackgroundAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const emberCount = 20;
    const embers: HTMLDivElement[] = [];

    for (let i = 0; i < emberCount; i++) {
      const ember = document.createElement('div');
      ember.className = 'absolute w-1 h-1 bg-warm-glow rounded-full blur-[1px] animate-float opacity-60';
      ember.style.left = Math.random() * 100 + '%';
      ember.style.animationDelay = Math.random() * 8 + 's';
      ember.style.animationDuration = (8 + Math.random() * 4) + 's';
      container.appendChild(ember);
      embers.push(ember);
    }

    return () => {
      embers.forEach(ember => {
        if (container.contains(ember)) {
          container.removeChild(ember);
        }
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
};