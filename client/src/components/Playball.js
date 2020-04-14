import React, { useState, Children } from "react";
import Roster from "./Roster";
import FieldPosition from "./FieldPosition";
import "./Playball.scss";

const Playball = ({ user, players }) => {
  console.log("Palyball component user: ", user);
  console.log("Palyball component user: ", players);
  let rostNumber = 0;
  let positionNumber = 0;
  return (
    <div className="playball_body">
      <div className="playball_wrap">
        <header className="playball_header"></header>
        <aside className="playball_aside">
          <div className="roster_template">
            <div className="roster_title">ROSTER</div>
            <div className="roster_content">
              {players &&
                players.map(player => (
                  <Roster
                    user={user}
                    player={player}
                    key={player.id}
                    number={(rostNumber = rostNumber + 1)}
                  />
                ))}
            </div>
          </div>
        </aside>
        <section className="playball_section">
          <div className="palyball_wrap">
            {players &&
              players.map(player => (
                <div className={"_" + player.position}>
                  <FieldPosition
                    user={user}
                    player={player}
                    key={player.id}
                    number={(positionNumber = positionNumber + 1)}
                  />
                </div>
              ))}
          </div>
        </section>
        <footer className="playball_footer"></footer>
      </div>
    </div>
  );
};

export default Playball;
