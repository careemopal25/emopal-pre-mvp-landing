export const DyadVisual = () => {
  return (
    <div className="w-48 h-28 mx-auto my-16 relative">
      <div className="absolute left-0 w-20 h-20 bg-warm-glow rounded-full opacity-80 animate-breathe" />
      <div className="absolute right-0 w-20 h-20 bg-warm-glow rounded-full opacity-80 animate-breathe" 
           style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/2 left-1/2 w-24 h-0.5 bg-gradient-to-r from-warm-glow via-white/80 to-warm-glow 
                      -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />
    </div>
  );
};