import React, { useState, Fragment } from "react";
import { Redirect, Link } from "react-router-dom";
import "./TeamList.scss";
import logo from "../img/hitter-logo.png";
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
    <Fragment>
      <div className="teamList_body" onClick={() => moveAndShowTeamRoster(id)}>
        {redirect && <Redirect to="/showRoster" />}
        <div
          className="teamList_contents"
          // onClick={() => moveAndShowTeamRoster(id)}
        >
          <div className="teamList_top">
            <div className="teamList_img">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="teamList_bottom">
            <div
              className="teamList_name"
              // onClick={() => moveAndShowTeamRoster(id)}
            >
              {name}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default TeamList;
