import React from "react";
import SettingBar from "./components/setting-bar";
import Board from "./components/board";
import Leaders from "./components/leaders";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg">
          <SettingBar />
          <Board />
        </div>
        <div className="col-lg">
          <Leaders />
        </div>
      </div>
    </div>
  );
}

export default App;
