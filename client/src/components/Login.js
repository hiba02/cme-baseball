import React, { useState, Fragment } from "react";
import { Redirect } from "react-router-dom";
// import "./Login.scss";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectHome, setRedirectHome] = useState(false);

  const handleLogin = function(event) {
    console.log("Login", props);
    event.preventDefault();
    props.login(email, password).then(data => {
      setRedirectHome(true);
    });
    setEmail("");
    setPassword("");
  };

  return (
    <Fragment>
      {redirectHome && <Redirect to="/" />}
      <main>
        <div className="login-container">
          <form className="login-form" onSubmit={handleLogin}>
            <div className="login-title"></div>
            <div className="empty"></div>
            <div className="login-email">
              Email:
              <input
                type="text"
                placeholder="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="empty"></div>
            <div className="login-password">
              Password:
              <input
                type="password"
                placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="empty"></div>
            <div className="login-submit">
              <input type="submit" value="Login" />
            </div>
          </form>
        </div>
      </main>
    </Fragment>
  );
}
