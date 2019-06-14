import React from "react";
import Select from "./common/select";
import Input from "./common/input";
import Button from "./common/button";

const SettingBar = ({ onChange }) => {
  const options = ["easyMode", "normalMode", "hardMode"];

  return (
    <div className="form-row">
      <div className="col-5">
        <Select options={options} label="Pick game mode" onChange={onChange} />
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
