import React from "react";
import "./Roster.scss";

const Roster = ({
  player,
  number,
  getHitterFromPlayerInfo,
  toggleCheckFromHitterId
}) => {
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

  console.log("Roster number: ", number);

  return (
    <div
      className="roster_body"
      onClick={() => {
        toggleCheckFromHitterId(id);
        getHitterFromPlayerInfo(id);
      }}
    >
      <span className="id">{number}</span>
      <span className="name">
        {name},#{uniform_number}
      </span>
      {/* <span className="uniform_number">{uniform_number}</span> */}
      <span className="position">{position}</span>
    </div>
  );
};

export default Roster;
