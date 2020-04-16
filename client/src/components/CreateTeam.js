import React, { useState, Fragment, useCallback, useRef } from "react";
import { Redirect } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import "./CreateTeam.scss";
const CreateTeam = ({
  addTeam,
  currentUserInfo,
  curretnUserId,
  addTeamInClient
}) => {
  const [teamName, setTeamName] = useState("");
  // const [userId, setUserId] = useState("");
  const [redirectHome, setRedirectHome] = useState(false);

  console.log("CreateTeam currentUserInfo: ", currentUserInfo);
  console.log("CreateTeam current teamId: ", curretnUserId);
  // let userId = 1;
  const userId = useRef(1);
  if (currentUserInfo) {
    userId.current = currentUserInfo.id;
    console.log("userId: ", userId);
  }
  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      addTeam(teamName, curretnUserId).then(response => setRedirectHome(true));
      setTeamName("");
      addTeamInClient(teamName, curretnUserId);
      // need to pass team id into CreatePlayer component
    },
    [addTeam, teamName]
  );

  const onChange = useCallback(e => {
    setTeamName(e.target.value);
  }, []);

  return (
    <Fragment>
      {redirectHome && <Redirect to="/" />}
      <div className="createTeam-container">
        <form onSubmit={handleSubmit}>
          {/* <form> */}
          <p className="createTeam-userInfo">
            User Name: {currentUserInfo ? currentUserInfo.first_name : ""}
          </p>
          <div className="createTeam-title">Create Team</div>
          <div className="createTeam-content">
            <div className="createTeam-insert">
              <input
                type="text"
                placeholder="Team name"
                value={teamName}
                // onChange={e => setTeamName(e.target.value)}
                onChange={onChange}
              />
              <button type="submit">
                <MdAdd />
              </button>
            </div>
            {/* <div className="createTeam-submit">
              <input type="submit" value="Submit" />
            </div> */}
          </div>
        </form>
      </div>
    </Fragment>
  );
};
export default CreateTeam;
