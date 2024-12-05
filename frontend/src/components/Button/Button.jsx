import React from 'react';
import './Button.scss';

const Button = (props) => {
  const { handle, name, style } = props;
  return (
    <button className={`button ${style}`} onClick={handle}>
      {name}
    </button>
  );
};

export default Button;