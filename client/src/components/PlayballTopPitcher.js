import React, { useState, Children } from "react";
import "./PlayballTopPitcher.scss";
import pitcherLogo from "../img/pitcher-logo.png";
const PlayballTopPitcher = ({ pitureName, pitcher }) => {
  const { id, name, uniform_number, position, bats, throws, check } = pitcher;
  console.log("PlayballTopPitcher uniform_number", uniform_number);
  return (
    <div className="PlayballTopPitcher-container">
      <span className="PlayballTopPitcher-icon">
        <div className="PlayballTopPitcher_img">
          <img src={pitcherLogo} alt="logo" />
        </div>
      </span>
      <span className="PlayballTopPitcher-content">
        <div className="PlayballTopPitcher-name">
          {name}, #{uniform_number}
        </div>
      </span>
      <span className="PlayballTopPitcher-pitch">Pitch: {id}</span>
    </div>
  );
};
export default PlayballTopPitcher;
