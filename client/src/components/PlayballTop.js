import React from "react";
import "./PlayballTop.scss";

const PlayballTop = ({ player, number }) => {
  const {
    id,
    first_name,
    last_name,
    email,
    password,
    created_at,
    updated_at,
    user_id,
    team_id,
    name,
    uniform_number,
    position,
    bats,
    throws
  } = player;

  console.log("PlayballTop position: ", position);

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
