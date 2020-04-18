import React from "react";
import "./PlayballTop.scss";

const PlayballTop = ({ pitcherName, uniform_number, position, throws }) => {
  console.log(
    "PlayballTop : ",
    pitcherName,
    uniform_number,
    position,
    position
  );

  return (
    <article className="playball-top-body">
      <div className="playball-top-ballCount"></div>
      <div className="playball-top-atBat"></div>
      <div className="playball-top-pitcher"></div>
      <div className="playball-top-bottom"></div>
    </article>
  );
};

export default PlayballTop;
