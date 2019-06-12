import React from "react";

const Select = ({ classes, label, options }) => {
  return (
    <select className={classes}>
      <option value="" selected disabled>
        {label}
      </option>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
