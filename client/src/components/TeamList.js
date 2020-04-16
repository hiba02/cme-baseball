import React, { useState, useCallback } from "react";
import { Redirect, Link } from "react-router-dom";

const TeamList = ({
  team,
  getPlayersFromSameTeam,
  getPlayersByteamId,
  setTeamId
}) => {
  const [redirect, setRedirect] = useState(false);
  console.log("TeamList team getPlayersFromSameTeam", team);
  const { id, name } = team;
  const moveAndShowTeamRoster = id => {
    // getPlayersFromSameTeam(id);
    getPlayersByteamId(id);
    setTeamId(id);
    setRedirect(true);
  };

  return (
    <div className="teamList_body">
      {redirect && <Redirect to="/showRoster" />}
      <li className="teamList_name" onClick={() => moveAndShowTeamRoster(id)}>
        {name}
      </li>
    </div>
  );
};
export default TeamList;