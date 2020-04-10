import React, { useState, Fragment } from "react";
import { Redirect } from "react-router-dom";
// import "./Login.scss";
import axios from "axios";

export default function Login(props) {
  const [userId, setUserId] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectHome, setRedirectHome] = useState(false);

  const handleLogin = function(event) {
    console.log("Login", props);
    event.preventDefault();
    // login(email, password);
    props.login(email, password).then(data => {
      // setRedirectHome(true);
      console.log("Login.js data", data);
      // });
      // if (props.login(email, password) == true) {
      if (data) {
        //data: {id: 13, password: "test"}
        console.log("Login true data", data);
        setRedirectHome(true);
        setUserId(data.id);
        setEmail("");
        setPassword("");
        console.log("userId", userId);
      } else {
        console.log("Login fail");
        setEmail("");
        setPassword("");
      }
      setEmail("");
      setPassword("");
    });
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
