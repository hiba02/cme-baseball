import React, { useState } from "react";
import "./PlayballBottomScoreButton.scss";
// import hitterLogo from "../img/hitter-logo.png";
// import { FaBaseballBall } from "react-icons/fa";
// import {} from "react-icons/md";
// import {} from "react-icons/io";
import cn from "classnames";

const PlayballBottomScoreButton = () => {
  return (
    <div className="PlayballBottomScoreButton-container">
      <span className="PlayballBottomScoreButton-reset">RESET</span>
      <span className="PlayballBottomScoreButton-home">HOME +</span>
      <span className="PlayballBottomScoreButton-away">AWAY +</span>
    </div>
  );
};
export default PlayballBottomScoreButton;
