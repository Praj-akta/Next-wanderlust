import React from 'react';
import './index.scss';

const Button = ({
    title,
    type
}) => {
  const buttonType = type==='dark'? 'button__dark':'button__light'
  return (
      <span className={`button ${buttonType}`}>
          {title}
        </span>
  );
};

export default Button;