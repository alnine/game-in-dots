import React from "react";
import LeadersTable from "./leadersTable";

const Leaders = ({ data }) => {
  const leaders = data.slice(0, 4);
  return (
    <div className="leader_wrap">
      <h2>Leader Board</h2>
      <LeadersTable data={leaders} />
    </div>
  );
};

export default Leaders;
