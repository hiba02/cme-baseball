import React, { useState, Fragment, useCallback, useRef } from "react";
import { Redirect, Link } from "react-router-dom";
import "./CreatePlayer.scss";
import { IoMdCloseCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import Roster from "./Roster";
import ShowPlayers from "./ShowPlayers";

const CreatePlayer = ({
  userInfo,
  players,
  pitcher,
  hitter,
  playersInfo,
  currentTeam,
  removePlayerById,
  addNewPlayers,
  teamId,
  addNewPlayerInClient,
  getHitterFromPlayerInfo,
  toggleCheckFromHitterId
}) => {
  // need to get team-id!!
  console.log("CreatePlayer teamId", teamId);
  const [redirectHome, setRedirectHome] = useState(false);
  const [inputs, setInputs] = useState({
    team_id: 1,
    name: "",
    uniform_number: "",
    position: "",
    bats: "",
    throws: "",
    check: false
  });

  const {
    team_id,
    name,
    uniform_number,
    position,
    bats,
    throws,
    check
  } = inputs;

  const onChange = e => {
    const { value, name } = e.target; //e.target -> name and value
    setInputs({
      ...inputs, // Copy original input object
      //[name]: value // the key of name = value
      [name]: value
    });
    // addNewPlayers(teamId, name, uniform_number, position, bats, throws);
  };

  const onReset = () => {
    setInputs({
      team_id: "", //team_id - value from teamList.js
      name: "",
      uniform_number: "",
      position: "",
      bats: "",
      throws: "",
      check: false
    });
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      // 4.20.20 : add to playersInfo in client
      addNewPlayerInClient(
        teamId,
        name,
        uniform_number,
        position,
        bats,
        throws,
        check
      );
      addNewPlayers(
        teamId,
        name,
        uniform_number,
        position,
        bats,
        throws,
        check
      );
      setInputs({
        team_id: 1,
        name: "",
        uniform_number: "",
        position: "",
        bats: "",
        throws: "",
        check: false
      });
    },
    [inputs]
  );

  let rostNumber = 0;
  let positionNumber = 0;

  return (
    <Fragment>
      <header className="createPlayer-header"></header>
      <aside className="createPlayer-aside">
        <div className="createPlayer-container">
          <form onSubmit={handleSubmit} className="createPlayer-form">
            {/* <form> */}
            <div className="createPlayer-title">CREATE NEW PLAYER</div>

            <div className="createPlayer-content">
              <div className="createPlayer-team_id">
                <input
                  name="team_id"
                  type="hidden"
                  value={team_id}
                  onChange={onChange}
                />
              </div>

              <div className="createPlayer-name">
                <input
                  name="name"
                  type="text"
                  placeholder="Player name"
                  value={name}
                  onChange={onChange}
                />
              </div>

              <div className="createPlayer-uniform_number">
                <input
                  name="uniform_number"
                  type="text"
                  placeholder="Uniform_number"
                  value={uniform_number}
                  onChange={onChange}
                />
              </div>

              <div className="createPlayer-position">
                <input
                  name="position"
                  type="text"
                  placeholder="Player position"
                  value={position}
                  onChange={onChange}
                />
              </div>

              <div className="createPlayer-bats">
                <input
                  name="bats"
                  type="text"
                  placeholder="Bats"
                  value={bats}
                  onChange={onChange}
                />
              </div>
              <div className="createPlayer-throws">
                <input
                  name="throws"
                  type="text"
                  placeholder="Throws"
                  value={throws}
                  onChange={onChange}
                />
              </div>
              <div className="emptyBox"></div>

              <div className="createPlayer-check">
                <input
                  name="check"
                  type="hidden"
                  value={check}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="createPlayer-buttons">
              <span className="createPlayer-submit">
                <input type="submit" value="Submit" />
              </span>
              {/* <span className="createPlayer-reset" onClick={onReset}>
              <IoMdCloseCircle />
            </span> */}
            </div>
          </form>
          <span className="createPlayer-reset" onClick={onReset}>
            <MdDeleteForever />
          </span>
        </div>
      </aside>
      <section className="createPlayer-section">
        <div className="roster_template">
          <div className="roster_title">ROSTER</div>
          <div className="roster_content">
            {players &&
              players.map(player => (
                <Roster
                  user={userInfo}
                  player={player}
                  key={player.id}
                  number={(rostNumber = rostNumber + 1)}
                  getHitterFromPlayerInfo={getHitterFromPlayerInfo}
                  toggleCheckFromHitterId={toggleCheckFromHitterId}
                  removePlayerById={removePlayerById}
                />
              ))}
          </div>
        </div>
      </section>
      <footer className="createPlayer-footer"></footer>

      {/* <div className="createPlayer-button">
        <Link to="/showTeam" className="createPlayer-showTeam">
          Show Team
        </Link>
      </div> */}
    </Fragment>
  );
};
export default CreatePlayer;
