import React, { useState, Children } from "react";
import Roster from "./Roster";
import FieldPosition from "./FieldPosition";
import PlayballTopHitter from "./PlayballTopHitter";
import PlayballTopPitcher from "./PlayballTopPitcher";
import PlayballTopBallCount from "./PlayballTopBallCount";
import "./Playball.scss";

const Playball = ({
  user,
  players,
  pitcher,
  hitter,
  getHitterFromPlayerInfo
}) => {
  const [inning, setInning] = useState(1);
  const [topBottom, setTopBottom] = useState(true);
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  const [out, setOut] = useState(0);

  const countInning = () => {
    // event.preventDefault();
    if (inning >= 9) {
      setInning(1);
      setTopBottom(true);
    } else {
      if (topBottom) {
        setTopBottom(false);
      } else {
        setInning(inning + 1);
        setTopBottom(true);
      }
    }
  };

  const countStrike = () => {
    // event.preventDefault();
    if (strike >= 2) {
      setStrike(0);
      countOut();
    } else {
      setStrike(strike + 1);
    }
  };

  const countBall = () => {
    // event.preventDefault();
    if (ball >= 3) {
      setBall(0);
    } else {
      setBall(ball + 1);
    }
  };

  const countOut = () => {
    // event.preventDefault();
    if (out >= 2) {
      setOut(0);
      countInning();
    } else {
      setOut(out + 1);
    }
  };

  players
    ? console.log("Palyball component players: ", players)
    : console.log("");

  hitter ? console.log("hitter", hitter) : console.log("nothing");
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
            <div className="playball-top-ballCount">
              <PlayballTopBallCount
                strike={strike}
                countStrike={countStrike}
                ball={ball}
                countBall={countBall}
                out={out}
                countOut={countOut}
                inning={inning}
                countInning={countInning}
                topBottom={topBottom}
              />
            </div>
            <div className="playball-top-atBat">
              {players ? <PlayballTopHitter hitter={hitter} /> : ""}
            </div>
            <div className="playball-top-pitcher">
              {pitcher ? <PlayballTopPitcher pitcher={pitcher} /> : ""}
              {/* {pitcher ? <p>{name}</p> : ""} */}
            </div>
            <div className="playball-top-bottom"></div>
          </article>
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
                    getHitterFromPlayerInfo={getHitterFromPlayerInfo}
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
