import React, { useState, Fragment } from "react";
import { Redirect, Link } from "react-router-dom";
import "./Login.scss";
import axios from "axios";

const Login = ({ login, getUserInfo }) => {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectHome, setRedirectHome] = useState(false);

  const handleLogin = function(event) {
    event.preventDefault();
    // props.loginValidation login(email, password);
    login(email, password).then(data => {
      // setRedirectHome(true);
      console.log("Login.js data", data);
      // });
      // if (props.login(email, password) == true) {
      if (data) {
        //data: {id: 13, password: "test"}
        console.log("Login true data", data.id);
        setUserId(parseInt(data.id));
        setRedirectHome(true);
        console.log(
          "Login userId after setUserId",
          userId,
          " data.id: ",
          data.id,
          " redirectHome: ",
          redirectHome
        );
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
      {/* {redirectHome && <Redirect to="/" />} */}
      {redirectHome && <Redirect to={`/`} />}
      <main>
        <div className="login-container">
          <form className="login_form" onSubmit={handleLogin}>
            {/* <legend className="ir_su"> LOG IN </legend> */}
            {/* <div className="login_header"> */}
            <div className="login-title">LOG IN</div>
            {/* </div> */}
            <div className="login_content">
              {/* <form className="login_form" onSubmit={handleLogin}> */}
              <div className="login-email">
                <input
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>

              <div className="login-password">
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              {/* </div> */}
              <div class="login_footer">
                {/* <div className="login-submit">
                <input type="submit" value="Login" />
              </div> */}
              </div>
              {/* </form> */}
            </div>
            <div className="buttons">
              <button className="login_button" type="submit">
                login
              </button>
              <button className="registration_button">
                <Link to="/registration" className="header_link">
                  registration
                </Link>
              </button>
            </div>
          </form>
        </div>
      </main>
    </Fragment>
  );
};

export default Login;
