import React, { useState, useCallback } from "react";
import { Redirect } from "react-router-dom";

const TeamList = ({ team }) => {
  console.log("TeamList team", team);
  return (
    <div className="teamList_body">
      <li className="teamList_name">{team.name}</li>
    </div>
  );
};
export default TeamList;
