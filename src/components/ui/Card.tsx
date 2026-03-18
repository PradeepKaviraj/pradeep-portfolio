import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', gradient = false }) => {
  return (
    <div className={`
      relative rounded-3xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm overflow-hidden
      ${gradient ? 'after:absolute after:inset-0 after:bg-gradient-to-br after:from-white/5 after:to-transparent after:pointer-events-none' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;
