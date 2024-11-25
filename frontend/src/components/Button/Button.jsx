import React from 'react';
import './Button.scss';

const Button = ({ handle, name, className, eventType }) => {
  const eventHandler = { [eventType]: handle };
  return (
    <button className={`button ${className}`} {...eventHandler}>
      {name}
    </button>
  );
};

export default Button;