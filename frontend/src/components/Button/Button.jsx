import React from 'react';
import './Button.scss';

const Button = (props) => {
  const{ handle, name, className } = props;
  return (
    <button className={`custom-button ${className}`} onClick={handle}>
      <div>{name}</div>
    </button>
  );
};

export default Button;