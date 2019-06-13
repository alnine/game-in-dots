import React from "react";

const LeaderRow = ({ data }) => {
  return (
    <div className="leader">
      <span className="leader_name">{data.winner}</span>
      <span className="leader_date">{data.date}</span>
    </div>
  );
};

export default LeaderRow;
