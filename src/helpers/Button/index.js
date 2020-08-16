import React from 'react';
import './index.scss';

const Button = ({
  type,
  title,
  onClick,
  className
}) => {
  const buttonType = type === 'dark' ? 'button__dark' : 'button__light'
  return (
    <span className={`button ${buttonType} ${className}`} onClick={onClick}>
      {title}
    </span>
  );
};

export default Button;