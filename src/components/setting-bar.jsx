import React from "react";
import Button from "./common/button";
import Input from "./common/input";
import Select from "./common/select";

const SettingBar = props => {
  const options = ["Easy", "Normal", "Hard"];
  return (
    <div className="form-row">
      <div className="col-5">
        <Select
          options={options}
          label="Pick game mode"
          classes="btn btn-light btn-block"
        />
      </div>
      <div className="col-5">
        <Input type="text" classes="form-control" label="Enter your name" />
      </div>
      <div className="col">
        <Button type="button" classes="btn btn-dark btn-block" label="Play" />
      </div>
    </div>
  );
};

export default SettingBar;
