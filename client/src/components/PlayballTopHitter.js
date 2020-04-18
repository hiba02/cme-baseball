import React, { useState, Children } from "react";
import "./PlayballTopHitter.scss";
import hitterLogo from "../img/hitter-logo.png";
const PlayballTopHitter = ({ players }) => {
  console.log("PlayballTopHitter players: ", players);
  return (
    <div className="PlayballTopHitter-container">
      <span className="PlayballTopHitter-icon">
        <div className="PlayballTopHitter_img">
          <img src={hitterLogo} alt="logo" />
        </div>
      </span>
      <span className="PlayballTopHitter-content">
        <div className="PlayballTopHitter-name">
          {/* {name}, #{uniform_number} */}
        </div>
      </span>
      <span className="PlayballHitter-pitch">Pitch: </span>
    </div>
  );
};
export default PlayballTopHitter;
