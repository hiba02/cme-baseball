import React, { useState, Fragment, useCallback, useRef } from "react";
import { Redirect, Link } from "react-router-dom";

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
        <form onSubmit={handleSubmit}>
          {/* <form> */}
          <div className="createPlayer-title">Create Team</div>
          <div className="createPlayer-team_id">
            <input
              name="team_id"
              type="hidden"
              value={team_id}
              onChange={onChange}
            />
          </div>
          <div className="createPlayer-name">
            Name:
            <input
              name="name"
              type="text"
              placeholder="Player name"
              value={name}
              onChange={onChange}
            />
          </div>
          <div className="createPlayer-uniform_number">
            Uniform number:
            <input
              name="uniform_number"
              type="text"
              placeholder="Uniform_number"
              value={uniform_number}
              onChange={onChange}
            />
          </div>
          <div className="createPlayer-position">
            Position:
            <input
              name="position"
              type="text"
              placeholder="Player position"
              value={position}
              onChange={onChange}
            />
          </div>
          <div className="createPlayer-bats">
            Bats:
            <input
              name="bats"
              type="text"
              placeholder="Bats"
              value={bats}
              onChange={onChange}
            />
          </div>
          <div className="createPlayer-throws">
            Throws:
            <input
              name="throws"
              type="text"
              placeholder="Throws"
              value={throws}
              onChange={onChange}
            />
          </div>
          <div className="createPlayer-submit">
            <input type="submit" value="Submit" />
          </div>
          <button onClick={onReset}>초기화</button>
        </form>
      </div>
      <Link to="/showTeam" className="menu_link">
        Show Team{" "}
        <i className="fa fa-angle-double-right" aria-hidden="true"></i>
      </Link>
    </Fragment>
  );
};
export default CreatePlayer;
