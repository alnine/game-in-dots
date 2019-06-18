import React from "react";
import Select from "./common/select";
import Input from "./common/input";
import Button from "./common/button";

const SettingBar = ({
  modes,
  player,
  onSelectChange,
  onInputChange,
  onPlayClick
}) => {
  return (
    <div className="form-row">
      <div className="col-5">
        <Select
          options={modes}
          label="Pick game mode"
          onChange={onSelectChange}
        />
      </div>
      <div className="col-5">
        <Input
          type="text"
          value={player}
          classes="form-control"
          label="Enter your name"
          onChange={onInputChange}
        />
      </div>
      <div className="col">
        <Button
          type="button"
          classes="btn btn-dark btn-block"
          label="Play"
          onClick={onPlayClick}
        />
      </div>
    </div>
  );
};

export default SettingBar;
