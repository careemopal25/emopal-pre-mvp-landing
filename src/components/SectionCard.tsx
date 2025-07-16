import { ReactNode } from "react";

interface SectionCardProps {
  children: ReactNode;
  className?: string;
}

export const SectionCard = ({ children, className = "" }: SectionCardProps) => {
  return (
    <div className={`gradient-card embossed-button rounded-3xl p-12 md:p-16 
                     transition-all duration-700 hover:-translate-y-1 
                     relative overflow-hidden group ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent 
                      -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      {children}
    </div>
  );
};