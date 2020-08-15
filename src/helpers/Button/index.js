import React from 'react';
import './index.scss';

const Button = ({
  type,
  title,
  onClick
}) => {
  const buttonType = type === 'dark' ? 'button__dark' : 'button__light'
  return (
    <span className={`button ${buttonType}`} onClick={onClick}>
      {title}
    </span>
  );
};

export default Button;