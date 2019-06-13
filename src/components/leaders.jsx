import React, { Component } from "react";
import LeadersTable from "./leadersTable";

class Leaders extends Component {
  data = [
    { id: 1, winner: "User", date: "10:29; 13 June 2019" },
    { id: 2, winner: "User", date: "10:29; 13 June 2019" },
    { id: 3, winner: "User", date: "10:29; 13 June 2019" },
    { id: 4, winner: "User", date: "10:29; 13 June 2019" },
    { id: 5, winner: "User", date: "10:29; 13 June 2019" }
  ];

  render() {
    const leaders = this.data.slice(0, 4);
    return (
      <div className="leader_wrap">
        <h2>Leader Board</h2>
        <LeadersTable data={leaders} />
      </div>
    );
  }
}

export default Leaders;
