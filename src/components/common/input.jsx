import React from "react";

const Input = ({ type, classes, label }) => {
  return <input type={type} className={classes} placeholder={label} />;
};

export default Input;
