import React, { useState, Children } from "react";
import "./PlayballTopHitter.scss";
import hitterLogo from "../img/hitter-logo.png";
const PlayballTopHitter = ({ hitter }) => {
  hitter
    ? console.log("PlayballTopHitter players: ", hitter)
    : console.log("nothing");

  const { id, name, uniform_number, position, bats, throws, check } = hitter;
  return (
    <div className="PlayballTopHitter-container">
      <span className="PlayballTopHitter-icon">
        <div className="PlayballTopHitter_img">
          <img src={hitterLogo} alt="logo" />
        </div>
      </span>
      <span className="PlayballTopHitter-content">
        <div className="PlayballTopHitter-name">
          {name}, #{uniform_number}
        </div>
      </span>
      <span className="PlayballHitter-batting">{/* Batting: 0-0 */}</span>
    </div>
  );
};
export default PlayballTopHitter;
