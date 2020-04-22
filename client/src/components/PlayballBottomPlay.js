import React, { useState, Children } from "react";
import "./PlayballBottomPlay.scss";
import hitterLogo from "../img/hitter-logo.png";
import { FaBaseballBall } from "react-icons/fa";
import {
  MdFilter1,
  MdFilter2,
  MdFilter3,
  MdTagFaces,
  MdHighlightOff
} from "react-icons/md";
import {
  IoIosBaseball,
  IoIosRadioButtonOn,
  IoMdAddCircle
} from "react-icons/io";
import cn from "classnames";

const PlayballBottomPlay = ({
  inning,
  countInning,
  topBottom,
  countStrike,
  strike,
  ball,
  countBall,
  out,
  countOut,
  singleHit,
  doubleHit,
  tripleHit,
  homerunHit,
  batterOut,
  activePlayWindow,
  addHittingNumber
}) => {
  return (
    <div className="PlayballBottomPlay-container">
      <div className="PlayballBottomPlay-title">
        <span className="PlayballBottomPlay-icon">
          <IoIosBaseball />
        </span>
        <span className="PlayballBottomPlay-order">
          &nbsp;&nbsp;BALL IN PLAY{" "}
        </span>
      </div>
      <div
        className="PlayballBottomPlay-single"
        onClick={() => {
          singleHit();
          activePlayWindow();
          addHittingNumber();
        }}
      >
        <span className="PlayballBottomPlay-icon">
          <MdFilter1 />
        </span>
        <span className="PlayballBottomPlay-ballCount">
          &nbsp;&nbsp;&nbsp;&nbsp;Single
        </span>
      </div>
      <div
        className="PlayballBottomPlay-double"
        onClick={() => {
          doubleHit();
          activePlayWindow();
          addHittingNumber();
        }}
      >
        <span className="PlayballBottomPlay-icon">
          <MdFilter2 />
        </span>
        <span className="PlayballBottomPlay-ballCount">
          &nbsp;&nbsp;&nbsp;&nbsp;Double
        </span>
      </div>

      <div
        className="PlayballBottomPlay-triple"
        onClick={() => {
          tripleHit();
          activePlayWindow();
          addHittingNumber();
        }}
      >
        <span className="PlayballBottomPlay-icon">
          <MdFilter3 />
        </span>
        <span className="PlayballBottomPlay-ballCount">
          &nbsp;&nbsp;&nbsp;&nbsp;Triple
        </span>
      </div>
      <div
        className="PlayballBottomPlay-homerun"
        onClick={() => {
          homerunHit();
          activePlayWindow();
          addHittingNumber();
        }}
      >
        <span className="PlayballBottomPlay-icon">
          <MdTagFaces />
        </span>
        <span className="PlayballBottomPlay-ballCount">
          &nbsp;&nbsp;Home Run
        </span>
      </div>

      <div
        className="PlayballBottomPlay-out"
        onClick={() => {
          batterOut();
          activePlayWindow();
        }}
      >
        <span className="PlayballBottomPlay-icon">
          <MdHighlightOff />
        </span>
        <span className="PlayballBottomPlay-ballCount">&nbsp;Batter Out</span>
      </div>
    </div>
  );
};
export default PlayballBottomPlay;
