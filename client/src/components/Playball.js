import React, { useState, Children } from "react";
import Roster from "./Roster";
import "./Playball.scss";

const Playball = ({ user, players }) => {
  console.log("Palyball component user: ", user);
  let number = 0;

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
                    number={(number = number + 1)}
                  />
                ))}
            </div>
          </div>
        </aside>
        <section className="playball_section"></section>
        <footer className="playball_footer"></footer>
      </div>
    </div>
  );
};

export default Playball;
