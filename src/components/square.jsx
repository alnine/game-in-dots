import React from "react";

const Square = ({ color, onClick }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      onClick={onClick}
      className="square"
    />
  );
};

export default Square;
