import React from "react";
import Square from "./square";

const Board = ({ data, classes, onClick }) => {
  return (
    <div className="board_wrap">
      <div className={classes}>
        {data.map((color, index) => {
          return (
            <Square key={index} color={color} onClick={() => onClick(index)} />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
