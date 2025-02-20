import React from 'react';
import './Button.css';



const Button = ({ 
  children, 
  variant = 'primary', 
  className,
  onClick,
  ...props 
}) => {

  

  return (
    <button 
      className={`custom-btn ${variant} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 