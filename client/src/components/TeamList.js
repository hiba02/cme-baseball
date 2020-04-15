import React, { useState, useCallback } from "react";
import { Redirect } from "react-router-dom";

const TeamList = ({ team }) => {
  console.log("TeamList team", team);
  return (
    <div>
      <li>{team.name}</li>
    </div>
  );
};
export default TeamList;
