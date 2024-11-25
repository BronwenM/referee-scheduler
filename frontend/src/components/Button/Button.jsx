import React from 'react';
import './Button.scss';

const Button = (props) => {
  const{ handle, name, className } = props;
  return (
    <button className={`button ${className}`} onClick={handle}>
      {name}
    </button>
  );
};

export default Button;