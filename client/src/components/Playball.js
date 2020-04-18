import React, { useState, Children } from "react";
import Roster from "./Roster";
import FieldPosition from "./FieldPosition";
import PlayballTopHitter from "./PlayballTopHitter";
import PlayballTopPitcher from "./PlayballTopPitcher";
import "./Playball.scss";

const Playball = ({ user, players, pitcher }) => {
  console.log("Palyball component pitcher: ", pitcher.name);
  console.log("Palyball component user: ", players);
  let rostNumber = 0;
  let positionNumber = 0;
  // const { name, uniform_number, position, bats, throws, check } = pitcher;
  // if (players) {
  //   console.log(
  //     "playball players:  ",
  //     players.filter(player => {
  //       return player.position === "P"; // no return -> error
  //     })
  //   );
  // }
  //Expected an assignment or function call and instead saw an expression  no-unused-expressions

  return (
    <div className="playball_body">
      <div className="playball_wrap">
        <header className="playball_header">
          <article className="playball-top-body">
            <div className="playball-top-ballCount"></div>
            <div className="playball-top-atBat">
              {players ? <PlayballTopHitter players={players} /> : ""}
            </div>
            <div className="playball-top-pitcher">
              {pitcher ? <PlayballTopPitcher pitcher={pitcher} /> : ""}
              {/* {pitcher ? <p>{name}</p> : ""} */}
            </div>
            <div className="playball-top-bottom"></div>
          </article>
          {/* {players &&
            players.map(player => (
              <PlayballTop
                user={user}
                player={player}
                key={player.id}
                number={(rostNumber = rostNumber + 1)}
              />
            ))} */}
        </header>
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
