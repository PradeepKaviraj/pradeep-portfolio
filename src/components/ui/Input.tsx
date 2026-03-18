import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input 
      className={`
        w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 
        focus:border-blue-500 outline-none transition-colors text-white placeholder:text-zinc-500
        ${className}
      `}
      {...props}
    />
  );
};

export default Input;
