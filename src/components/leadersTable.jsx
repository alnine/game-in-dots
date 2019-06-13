import React from "react";
import LeaderRow from "./leaderRow";

const LeadersTable = ({ data: leaders }) => {
  return (
    <React.Fragment>
      {leaders.map(leader => (
        <LeaderRow key={leader.id} data={leader} />
      ))}
    </React.Fragment>
  );
};

export default LeadersTable;
