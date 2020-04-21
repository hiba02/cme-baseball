import React from "react";
import "./FieldPosition.scss";

const FieldPosition = ({ player, number }) => {
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

  console.log("FieldPosition number: ", number);

  return (
    <div className="field_position_body">
      <div className="field_position_name">
        <span className="player_name">{name}</span>
        <span className="uniform_number">, #{uniform_number}</span>
      </div>
      <div className="field_position">{position}</div>
    </div>
  );
};

export default FieldPosition;
