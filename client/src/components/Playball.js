import React, { useState, Children } from "react";
import Roster from "./Roster";
import FieldPosition from "./FieldPosition";
import PlayballTopHitter from "./PlayballTopHitter";
import PlayballTopPitcher from "./PlayballTopPitcher";
import PlayballTopBallCount from "./PlayballTopBallCount";
import PlayballBottomPitch from "./PlayballBottomPitch";
import PlayballBottomPlay from "./PlayballBottomPlay";
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
  const [_1b, set_1b] = useState(false);
  const [_2b, set_2b] = useState(false);
  const [_3b, set_3b] = useState(false);
  const [playWindow, setPlayWindow] = useState(false);
  //count [countPitch, setCountPitch] = useState(0);

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

  const resetCount = () => {
    setInning(1);
    setTopBottom(true);
    setStrike(0);
    setBall(0);
    setOut(0);
  };

  players
    ? console.log("Palyball component players: ", players)
    : console.log("");

  hitter ? console.log("hitter", hitter) : console.log("nothing");
  let rostNumber = 0;
  let positionNumber = 0;

  const activePlayWindow = () => {
    setPlayWindow(!playWindow);
    setStrike(0);
    setBall(0);
  };

  /////////////////////////////////////////////

  const baseRunnerCase = expr => {
    switch (expr) {
      case "_1B":
        set_1b(true);
        break;
      case "_2B":
        set_2b(true);
        break;
      case "_3B":
        set_3b(true);
        break;
      case "_2B":
        set_2b(true);
        break;
      case "_1B2B":
        set_1b(true);
        set_2b(true);
        break;
      case "_1B3B":
        set_1b(true);
        set_3b(true);
        break;
      case "_2B3B":
        set_2b(true);
        set_3b(true);
        break;
      case "_1B2B3B":
        set_1b(true);
        set_2b(true);
        set_3b(true);
        break;
      default:
        console.log("no value");
    }
  };

  // reset base runner -> no base
  const resetRunner = () => {
    set_1b(!playWindow);
    set_2b(!playWindow);
    set_3b(!playWindow);
  };

  const singleHit = () => {
    // if there is no runner in a base
    if (!_1b && !_2b && !_3b) {
      baseRunnerCase("_1B");
      // 1b
    } else if (_1b && !_2b && !_3b) {
      resetRunner();
      baseRunnerCase("_1B2B"); //1B-3B?
      // 2b
    } else if (!_1b && _2b && !_3b) {
      resetRunner();
      baseRunnerCase("_1B");
      // score +1
      // 3b
    } else if (!_1b && !_2b && _3b) {
      resetRunner();
      baseRunnerCase("_1B");
      // score +1
      // 1b, 2b
    } else if (_1b && _2b && !_3b) {
      resetRunner();
      baseRunnerCase("_1B3B");
      // score +1
      // 1b, 3b
    } else if (_1b && !_2b && _3b) {
      resetRunner();
      baseRunnerCase("_1B2B");
      // score +1
      // 2b, 3b
    } else if (!_1b && _2b && _3b) {
      resetRunner();
      baseRunnerCase("_1B");
      // score +1
      // full 1b 2b 3b
    } else if (_1b && _2b && _3b) {
      resetRunner();
      baseRunnerCase("_1B3B");
      // score +2
    }
  };

  const doubleHit = () => {
    // if there is no runner in a base
    if (!_1b && !_2b && !_3b) {
      baseRunnerCase("_2B");
      // 1b
    } else if (_1b && !_2b && !_3b) {
      resetRunner();
      baseRunnerCase("_2B3B");
      // 2b
    } else if (!_1b && _2b && !_3b) {
      resetRunner();
      baseRunnerCase("_2B");
      // score +1
      // 3b
    } else if (!_1b && !_2b && _3b) {
      resetRunner();
      baseRunnerCase("_2B");
      // score +1
      // 1b, 2b
    } else if (_1b && _2b && !_3b) {
      resetRunner();
      baseRunnerCase("_2B3B");
      // score +1
      // 1b, 3b
    } else if (_1b && !_2b && _3b) {
      resetRunner();
      baseRunnerCase("_2B3B");
      // score +1
      // 2b, 3b
    } else if (!_1b && _2b && _3b) {
      resetRunner();
      baseRunnerCase("_2B");
      // score +2
      // full 1b 2b 3b
    } else if (_1b && _2b && _3b) {
      resetRunner();
      baseRunnerCase("_2B3B");
      // score +2
    }
  };

  const tripleHit = () => {
    // if there is no runner in a base
    if (!_1b && !_2b && !_3b) {
      baseRunnerCase("_3B");
      // 1b
    } else if (_1b && !_2b && !_3b) {
      resetRunner();
      baseRunnerCase("_3B");
      // score +1
      // 2b
    } else if (!_1b && _2b && !_3b) {
      resetRunner();
      baseRunnerCase("_3B");
      // score +1
      // 3b
    } else if (!_1b && !_2b && _3b) {
      resetRunner();
      baseRunnerCase("_3B");
      // score +1
      // 1b, 2b
    } else if (_1b && _2b && !_3b) {
      resetRunner();
      baseRunnerCase("_3B");
      // score +2
      // 1b, 3b
    } else if (_1b && !_2b && _3b) {
      resetRunner();
      baseRunnerCase("_3B");
      // score +2
      // 2b, 3b
    } else if (!_1b && _2b && _3b) {
      resetRunner();
      baseRunnerCase("_3B");
      // score +2
      // full 1b 2b 3b
    } else if (_1b && _2b && _3b) {
      resetRunner();
      baseRunnerCase("_3B");
      // score +3
    }
  };

  const homerunHit = () => {
    // if there is no runner in a base
    if (!_1b && !_2b && !_3b) {
      resetRunner();
      // score +1
      // 1b
    } else if (_1b && !_2b && !_3b) {
      resetRunner();
      // score +2
      // 2b
    } else if (!_1b && _2b && !_3b) {
      resetRunner();
      // score +2
      // 3b
    } else if (!_1b && !_2b && _3b) {
      resetRunner();
      // score +2
      // 1b, 2b
    } else if (_1b && _2b && !_3b) {
      resetRunner();
      // score +3
      // 1b, 3b
    } else if (_1b && !_2b && _3b) {
      resetRunner();
      // score +3
      // 2b, 3b
    } else if (!_1b && _2b && _3b) {
      resetRunner();
      // score +3
      // full 1b 2b 3b
    } else if (_1b && _2b && _3b) {
      resetRunner();
      // score +4
    }
  };

  const batterOut = () => {
    setStrike(0);
    setBall(0);
    setOut(out + 1);
  };
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
            <div className="playball-top-bottom">
              <button
                onClick={() => {
                  resetCount();
                }}
              >
                RESET
              </button>
            </div>
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

          {/* Runner in a base */}
          {_1b && <div className="firstBase">1B</div>}
          {_2b && <div className="secondBase">2B</div>}
          {_3b && <div className="thirdBase">3B</div>}
        </section>
        <footer className="playball_footer">
          <div className="playball-bottom-pitchAction">
            <PlayballBottomPitch
              strike={strike}
              countStrike={countStrike}
              ball={ball}
              countBall={countBall}
              out={out}
              countOut={countOut}
              inning={inning}
              countInning={countInning}
              topBottom={topBottom}
              activePlayWindow={activePlayWindow}
            />
          </div>
          <div className="playball-bottom-ballInPlay">
            {playWindow && (
              <PlayballBottomPlay
                singleHit={singleHit}
                doubleHit={doubleHit}
                tripleHit={tripleHit}
                homerunHit={homerunHit}
                batterOut={batterOut}
              />
            )}
          </div>
          <div className="playball-bottom-runnerConrol"></div>
          <div className="playball-bottom-bar"></div>
        </footer>
      </div>
    </div>
  );
};

export default Playball;
