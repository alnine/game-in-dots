import React from "react";

const Select = ({ label, options, onChange }) => {
  return (
    <select className="btn btn-light btn-block" onChange={e => onChange(e)}>
      <option value="">{label}</option>
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
