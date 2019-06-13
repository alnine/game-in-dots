import React, { Component } from "react";
import Square from "./square";

class Board extends Component {
  state = {
    mode: "easyMode",
    board: []
  };

  gameMode = {
    easyMode: 5,
    normalMode: 10,
    hardMode: 15
  };

  componentDidMount() {
    const field = this.gameMode[this.state.mode];
    const board = Array(field * field).fill(null);
    this.setState({ board });
  }

  renderBoard(board) {
    const { mode } = this.state;
    let boardClass = "board";

    if (mode !== "easyMode") {
      boardClass += mode === "normalMode" ? " board-10" : " board-15";
    }

    return (
      <div className="board_wrap">
        <div className={boardClass}>
          {board.map((square, index) => {
            return <Square key={index} />;
          })}
        </div>
      </div>
    );
  }

  render() {
    return this.renderBoard(this.state.board);
  }
}

export default Board;