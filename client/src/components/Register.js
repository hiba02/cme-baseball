import React, { useState, Fragment } from "react";
import { Redirect, Link } from "react-router-dom";
import "./Register.scss";

export default function Register(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Fragment>
      {redirectHome && <Redirect to="/createTeam" />}
      <div className="register-container">
        <form onSubmit={handleSubmit} className="register-form">
          <div className="register-title">REGISTRATION</div>

          <div className="register-content">
            <div className="register-firstName">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </div>

            <div className="register-lastName">
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>

            <div className="register-email">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div className="register-password">
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <div className="register-addTeam">
              <input
                type="text"
                placeholder="Team name"
                value={teamName}
                onChange={e => setTeamName(e.target.value)}
              />
            </div>
          </div>
          <div className="register-button">
            {/* <Link to="/" className="registration-link"> */}
            <input type="submit" value="Submit" />
            {/* </Link> */}
          </div>
        </form>
      </div>
    </Fragment>
  );
}
