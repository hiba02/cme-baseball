import React, { useState, Fragment } from "react";
import { Redirect } from "react-router-dom";
// import "./Register.scss";

export default function Register(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectHome, setRedirectHome] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    props
      .register(firstName, lastName, email, password)
      .then(response => setRedirectHome(true));
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Fragment>
      {redirectHome && <Redirect to="/" />}
      <div className="register-container">
        <form onSubmit={handleSubmit}>
          <div className="register-title">Registration</div>
          <div className="empty"></div>
          <div className="register-firstName">
            First Name:
            <input
              type="text"
              placeholder="first name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </div>
          <div className="empty"></div>
          <div className="register-lastName">
            Last Name:
            <input
              type="text"
              placeholder="last Name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
          <div className="empty"></div>
          <div className="register-email">
            Email:
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="empty"></div>
          <div className="register-password">
            password:
            <input
              type="text"
              placeholder="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="empty"></div>
          <div className="register-submit">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </Fragment>
  );
}
