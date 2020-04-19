import React, { useState } from "react";
import "./PlayballBottomScore.scss";
// import hitterLogo from "../img/hitter-logo.png";
// import { FaBaseballBall } from "react-icons/fa";
// import {} from "react-icons/md";
// import {} from "react-icons/io";
import cn from "classnames";

const PlayballBottomScore = () => {
  return (
    <div className="PlayballBottomScore-container">
      <div className="PlayballBottomScore-board-top">
        <span className="PlayballBottomScore-team">
          <div className="PlayballBottomScore-team-home">HOME</div>
          <div className="PlayballBottomScore-team-score">0</div>
        </span>
        <span className="PlayballBottomScore-team">
          <div className="PlayballBottomScore-team-home">AWAY</div>
          <div className="PlayballBottomScore-team-score">0</div>
        </span>
      </div>
    </div>
  );
};
export default PlayballBottomScore;
