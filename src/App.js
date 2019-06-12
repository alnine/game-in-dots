import React from "react";
import SettingBar from "./components/setting-bar";
import Board from "./components/board";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg">
          <SettingBar />
          <Board />
        </div>
        <div className="col-lg">Leader Board</div>
      </div>
    </div>
  );
}

export default App;
