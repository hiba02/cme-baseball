import React, { useState, useCallback } from "react";
import { Redirect, Link } from "react-router-dom";
import Roster from "./Roster";
import "./ShowPlayers.scss";

const ShowPlayers = ({ user, players, teamId, currentTeam }) => {
  console.log("showPlayers component players: ", players);
  console.log("showPlayers component teamId: ", teamId);
  console.log("showPlayers component teamId: ", currentTeam);
  let rostNumber = 0;
  let positionNumber = 0;
  return (
    <div className="showPlayers_body">
      <div className="showPlayers_template">
        <div className="showPlayers_title">ROSTER</div>
        <div className="showPlayers_content">
          {players &&
            players.map(player => (
              <Roster
                user={user}
                player={player}
                key={player.id}
                number={(rostNumber = rostNumber + 1)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default ShowPlayers;
