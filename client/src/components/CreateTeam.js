import React, { useState, Fragment } from "react";
import { Redirect } from "react-router-dom";

const CreateTeam = props => {
  const [teamName, setTeamName] = useState("");
  const [redirectHome, setRedirectHome] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    props.addTeam(teamName);
    props
      .register(firstName, lastName, email, password)
      .then(response => setRedirectHome(true));

    // props
    //   .getUserIdTeamId(email, teamName)
    setTeamName("");
  };

  return (
    <Fragment>
      {redirectHome && <Redirect to="/" />}
      <div className="createTeam-container">
        <form onSubmit={handleSubmit}>
          <div className="createTeam-title">Create Team</div>
          <div className="createTeam-firstName">
            Name:
            <input
              type="text"
              placeholder="Team name"
              value={teamName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="createTeam-submit">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default CreateTeam;
