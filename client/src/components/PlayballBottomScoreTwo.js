import React, { useState } from "react";
import "./PlayballBottomScoreTwo.scss";
// import hitterLogo from "../img/hitter-logo.png";
// import { FaBaseballBall } from "react-icons/fa";
// import {} from "react-icons/md";
// import {} from "react-icons/io";
import cn from "classnames";

const PlayballBottomScoreTwo = () => {
  return (
    <div className="PlayballBottomScoreTwo-container">
      <span className="PlayballBottomScoreTwo-htting">H</span>
      <span className="PlayballBottomScoreTwo-hitting-number">0</span>
      <span className="PlayballBottomScoreTwo-pitching">Pitching #</span>
      <span className="PlayballBottomScoreTwo-pitching-number">0</span>
    </div>
  );
};
export default PlayballBottomScoreTwo;
