import React, { useState, Children } from "react";
import "./PlayballTopBallCount.scss";
import hitterLogo from "../img/hitter-logo.png";
import { FaCaretUp, FaCaretDown, FaPlusCircle } from "react-icons/fa";
import cn from "classnames";

const PlayballTopBallCount = ({
  inning,
  countInning,
  topBottom,
  countStrike,
  strike,
  ball,
  countBall,
  out,
  countOut
}) => {
  return (
    <div className="PlayballTopBallCount-container">
      <span className="PlayballTopBallCount-inning">
        <div className="PlayballTopBallCount-title-inning"> INNING</div>
        <div className="PlayballTopBallCount-show-inning">{inning}</div>
        <div
          className="PlayballTopBallCount-count-inning"
          onClick={() => countInning()}
        >
          <FaPlusCircle />
        </div>
      </span>

      <span className="PlayballTopBallCount-topBottom">
        <div className="PlayballTopBallCount-title-topBottom"></div>
        <div
          className={cn("PlayballTopBallCount-show-topBottom", { topBottom })}
        >
          {topBottom ? <FaCaretUp /> : <FaCaretDown />}
        </div>
        <div className="PlayballTopBallCount-count-topBottom"></div>
      </span>

      <span className="PlayballTopBallCount-strike">
        <div className="PlayballTopBallCount-title-strike">S</div>
        <div className="PlayballTopBallCount-show-strike">{strike}</div>

        <div
          className="PlayballTopBallCount-count-strike"
          onClick={() => countStrike()}
        >
          <FaPlusCircle />
        </div>
      </span>

      <span className="PlayballTopBallCount-ball">
        <div className="PlayballTopBallCount-title-ball">B</div>
        <div className="PlayballTopBallCount-show-ball">{ball}</div>

        <div
          className="PlayballTopBallCount-count-ball"
          onClick={() => countBall()}
        >
          <FaPlusCircle />
        </div>
      </span>

      <span className="PlayballTopBallCount-out">
        <div className="PlayballTopBallCount-title-out">O</div>
        <div className="PlayballTopBallCount-show-out">{out}</div>

        <div
          className="PlayballTopBallCount-count-out"
          onClick={() => countOut()}
        >
          <FaPlusCircle />
        </div>
      </span>
    </div>
  );
};
export default PlayballTopBallCount;
