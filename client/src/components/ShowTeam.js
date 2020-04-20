import React, { useState, useCallback } from "react";
import { Redirect } from "react-router-dom";
import TeamList from "./TeamList";
import "./ShowTeam.scss";
const ShowTeam = ({
  teamNames,
  getPlayersFromSameTeam,
  getPlayersByteamId,
  setTeamId,
  setPlayersInfo,
  getCurrentTeamByTeamId,
  currentTeam,
  setCurrentTeam
}) => {
  console.log("ShowTeam teamNames", teamNames);
  return (
    <div className="showTeam-template">
      {/* <p>Team Name</p> */}
      <article className="showTeam-box">
        {teamNames
          ? teamNames.map(team => (
              <TeamList
                key={team.id}
                team={team}
                getPlayersFromSameTeam={getPlayersFromSameTeam}
                getPlayersByteamId={getPlayersByteamId}
                setTeamId={setTeamId}
                setPlayersInfo={setPlayersInfo}
                getCurrentTeamByTeamId={getCurrentTeamByTeamId}
                currentTeam={currentTeam}
                setCurrentTeam={setCurrentTeam}
              />
            ))
          : ""}
      </article>
    </div>
  );
};
export default ShowTeam;
