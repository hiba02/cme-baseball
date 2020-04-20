import React, { useState } from "react";
import "./PlayballBottomScoreButton.scss";
// import hitterLogo from "../img/hitter-logo.png";
// import { FaBaseballBall } from "react-icons/fa";
// import {} from "react-icons/md";
// import {} from "react-icons/io";
import cn from "classnames";

const PlayballBottomScoreButton = ({
  addOneScore,
  resetScore,
  addOneScoreAway,
  resetHittingNumber,
  resetPitchNumber,
  resetRunnerForScore
}) => {
  return (
    <div className="PlayballBottomScoreButton-container">
      <span
        onClick={() => {
          resetScore();
          resetPitchNumber();
          resetHittingNumber();
          resetRunnerForScore();
        }}
        className="PlayballBottomScoreButton-reset"
      >
        RESET
      </span>
      <span
        className="PlayballBottomScoreButton-home"
        onClick={() => addOneScore()}
      >
        HOME +
      </span>
      <span
        className="PlayballBottomScoreButton-away"
        onClick={() => addOneScoreAway()}
      >
        AWAY +
      </span>
    </div>
  );
};
export default PlayballBottomScoreButton;
