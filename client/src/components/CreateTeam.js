import React, { useState, Fragment } from "react";
import { Redirect } from "react-router-dom";

const CreateTeam = ({ addTeam, currentUserInfo }) => {
  const [teamName, setTeamName] = useState("");
  const [redirectHome, setRedirectHome] = useState(false);

  console.log("CreateTeam currentUserInfo: ", currentUserInfo);
  console.log(
    "CreateTeam currentUserInfo.id: ",
    currentUserInfo ? currentUserInfo.id : ""
  );

  const handleSubmit = e => {
    e.preventDefault();
    addTeam(teamName).then(response => setRedirectHome(true));
    // props
    //   .register(firstName, lastName, email, password)
    //   .then(response => setRedirectHome(true));

    // props
    //   .getUserIdTeamId(email, teamName)
    setTeamName("");
  };

  return (
    <Fragment>
      <p>userInfo:{currentUserInfo ? currentUserInfo.first_name : ""}</p>

      {redirectHome && <Redirect to="/" />}
      <div className="createTeam-container">
        <form onSubmit={handleSubmit}>
          {/* <form> */}
          <div className="createTeam-title">Create Team</div>
          <div className="createTeam-firstName">
            Name:
            <input
              type="text"
              placeholder="Team name"
              value={teamName}
              onChange={e => setTeamName(e.target.value)}
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
