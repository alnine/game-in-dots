import React, { Component } from "react";
import { getSettings, getLeaders } from "../services/http-service";
import SettingBar from "./setting-bar";
import Board from "./board";
import Leaders from "./leaders";

class Game extends Component {
  state = {
    mode: "",
    board: [],
    playerName: "",
    settings: {},
    leaders: []
  };

  async componentDidMount() {
    const defaultMode = "easyMode";
    const settings = await getSettings();
    const leaders = await getLeaders();

    const board = this.calculateBoard(settings[defaultMode].field);

    this.setState({ board, settings, mode: defaultMode, leaders });
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
    const { board, mode, settings, playerName, leaders } = this.state;
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
            <Leaders data={leaders} />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
