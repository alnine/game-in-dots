import React, { Component } from "react";
import SettingBar from "./setting-bar";
import Board from "./board";
import Leaders from "./leaders";

class Game extends Component {
  state = {
    mode: "easyMode",
    board: [],
    playerName: "",
    settings: {
      easyMode: {
        field: 5,
        delay: 2000
      },
      normalMode: {
        field: 10,
        delay: 1000
      },
      hardMode: {
        field: 15,
        delay: 900
      }
    }
  };

  componentDidMount() {
    const { mode, settings } = this.state;
    const board = this.calculateBoard(settings[mode].field);

    this.setState({ board });
  }

  calculateBoard = size => {
    return Array(size ** 2).fill(null);
  };

  handleClickOnSquare = i => {
    console.log(this.state);
    const board = [...this.state.board];
    if (board[i] === "blue") {
      board[i] = "red";
      this.setState({ board });
    }
    return;
  };

  handleChangeOnSelect = e => {
    const { mode: currentMode, settings } = this.state;
    const mode = e.target.value;
    if (mode === currentMode || mode === "") return;

    const board = this.calculateBoard(settings[mode].field);

    this.setState({ mode, board });
  };

  handleChangeOnInput = e => {
    const name = e.target.value;
    this.setState({ playerName: name });
  };

  render() {
    const { board, mode, settings, playerName } = this.state;
    const modes = Object.keys(settings);

    let boardClass = "board";
    if (mode !== "easyMode") {
      boardClass += mode === "normalMode" ? " board-10" : " board-15";
    }

    return (
      <div className="container bg-white">
        <div className="row">
          <div className="col-lg">
            <SettingBar
              modes={modes}
              player={playerName}
              onSelectChange={this.handleChangeOnSelect}
              onInputChange={this.handleChangeOnInput}
            />
            <Board
              data={board}
              classes={boardClass}
              onClick={this.handleClickOnSquare}
            />
          </div>
          <div className="col-lg">
            <Leaders />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
