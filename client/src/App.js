import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import axios from "axios";

// Components
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Slideshow from "./components/Slideshow";

function App() {
  const [word, setWord] = useState("");
  const [userId, setUserId] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const test = () => {
    return axios({
      method: "GET",
      url: "/api/users"
    }).then(result => {
      console.log(result.data);
      setWord(result.data[0].first_name);
    });
  };

  const register = (firstName, lastName, email, password) => {
    console.log("registration", firstName, lastName, email, password);
    return axios({
      method: "POST",
      url: "api/users/registration",
      data: {
        firstName,
        lastName,
        email,
        password
      }
    }).catch(error => console.log(error));
  };

  const getUserInfo = userId => {
    return axios({
      method: "GET",
      url: `/api/users/${userId}`
    }).then(result => {
      console.log("App getUserInfo", result.data[0]);
      setUserInfo(result.data[0]);
    });
  };

  const login = (email, password) => {
    console.log("App.js login", email, password);
    return axios({
      method: "POST",
      url: "/api/users/login",
      data: { email, password }
    })
      .then(response => {
        console.log("App.js login response", response.data.password);
        if (response.data.password === password) {
          console.log("success");
          setUserId(response.data.id);
          getUserInfo(response.data.id);
          return response.data;
        } else {
          console.log("fail");
          return false;
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="app-body">
      {/* <button onClick={test}>TEST axios</button>
      <p>{word}</p> */}
      <div className="app-wrap">
        <Router>
          <header>
            <Header />
          </header>
          <aside>
            <Nav userInfo={userInfo} />
          </aside>
          <section>
            <Switch>
              <Route path="/login">
                <Login login={login} />
              </Route>
              <Route path="/registration">
                <Register register={register} />
              </Route>
              <Route path="/:name">
                {/* {!userInfo && <Slideshow />} */}
                <Slideshow />
              </Route>
              <Route path="/">
                {/* {!userInfo && <Slideshow />} */}
                <Slideshow />
              </Route>
            </Switch>
          </section>
          <footer></footer>
        </Router>
      </div>
    </div>
  );
}

export default App;
