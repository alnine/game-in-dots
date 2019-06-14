import React from "react";

const Input = ({ type, classes, label, value, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      className={classes}
      placeholder={label}
      onChange={e => onChange(e)}
    />
  );
};

export default Input;
