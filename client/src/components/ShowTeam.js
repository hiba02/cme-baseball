import React, { useState, useCallback } from "react";
import { Redirect } from "react-router-dom";
import TeamList from "./TeamList";

const ShowTeam = ({
  teamNames,
  getPlayersFromSameTeam,
  getPlayersByteamId,
  setTeamId
}) => {
  console.log("ShowTeam teamNames", teamNames);
  return (
    <div>
      <p>Team Name</p>
      <ul>
        {teamNames
          ? teamNames.map(team => (
              <TeamList
                key={team.id}
                team={team}
                getPlayersFromSameTeam={getPlayersFromSameTeam}
                getPlayersByteamId={getPlayersByteamId}
                setTeamId={setTeamId}
              />
            ))
          : ""}
      </ul>
    </div>
  );
};
export default ShowTeam;
