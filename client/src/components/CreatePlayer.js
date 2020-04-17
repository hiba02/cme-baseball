import React, { useState, Fragment, useCallback, useRef } from "react";
import { Redirect, Link } from "react-router-dom";
import "./CreatePlayer.scss";

const CreatePlayer = ({ addNewPlayers, teamId }) => {
  // need to get team-id!!
  console.log("CreatePlayer teamId", teamId);
  const [redirectHome, setRedirectHome] = useState(false);
  const [inputs, setInputs] = useState({
    team_id: 1,
    name: "",
    uniform_number: "",
    position: "",
    bats: "",
    throws: ""
  });

  const { team_id, name, uniform_number, position, bats, throws } = inputs;

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
      throws: ""
    });
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      addNewPlayers(teamId, name, uniform_number, position, bats, throws);
      setInputs({
        team_id: 1,
        name: "",
        uniform_number: "",
        position: "",
        bats: "",
        throws: ""
      });
    },
    [inputs]
  );

  return (
    <Fragment>
      {/* <p>userInfo:{currentUserInfo ? currentUserInfo.first_name : ""}</p> */}

      {redirectHome && <Redirect to="/" />}
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
          </div>
          <div className="createPlayer-submit">
            <input type="submit" value="Submit" />
          </div>
          <div className="createPlayer-reset">
            <div onClick={onReset}>Reset</div>
          </div>
        </form>
      </div>
      <div className="createPlayer-button">
        <Link to="/showTeam" className="createPlayer-showTeam">
          Show Team
        </Link>
      </div>
    </Fragment>
  );
};
export default CreatePlayer;
