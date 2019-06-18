import React from "react";

const Button = ({ type, classes, label, onClick }) => {
  return (
    <button type={type} className={classes} onClick={e => onClick(e)}>
      {label}
    </button>
  );
};

export default Button;
