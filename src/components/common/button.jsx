import React from "react";

const Button = ({ type, classes, label }) => {
  return (
    <button type={type} className={classes}>
      {label}
    </button>
  );
};

export default Button;
