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
    leaders: [],
    result: {
      player: 0,
      computer: 0
    }
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

  handlePlayClick = () => {
    this.playLevel();
  };

  playLevel = () => {
    const { board } = this.state;
    const filtered = this.getFilteredArrayIndex(board, null);
    const square = this.getRandomSquareIndex(filtered);
    this.fillBlue(square);
    setTimeout(() => this.checkResult(square), 900);
  };

  checkResult = square => {
    const { board } = this.state;

    if (board[square] === "green") {
      this.addPoint("player");
    } else {
      this.fillRed(square);
      this.addPoint("computer");
    }

    this.hasWinner();
  };

  hasWinner = () => {
    const { player, computer } = this.state.result;
    const boardSize = this.state.board.length;

    if (computer / boardSize <= 0.5 && player / boardSize <= 0.5) {
      this.playLevel();
    }
  };

  addPoint = scorer => {
    const { result } = { ...this.state };
    result[scorer] += 1;
    this.setState({ result });
  };

  fillBlue = index => {
    const board = [...this.state.board];
    board[index] = "blue";
    this.setState({ board });
  };

  fillRed = index => {
    const board = [...this.state.board];
    board[index] = "red";
    this.setState({ board });
  };

  getFilteredArrayIndex = (arr, cond) => {
    return arr
      .map((item, index) => (item === cond ? index : null))
      .filter(i => i !== null);
  };

  getRandomSquareIndex = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  handleClickOnSquare = i => {
    const board = [...this.state.board];
    if (board[i] === "blue") {
      board[i] = "green";
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
              onPlayClick={this.handlePlayClick}
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
