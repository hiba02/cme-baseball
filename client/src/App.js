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
import Playball from "./components/Playball";

const App = () => {
  const [word, setWord] = useState("");
  const [userId, setUserId] = useState("");
  const [userInfo, setUserInfo] = useState(null);
  const [playersInfo, setPlayersInfo] = useState(null);
  const test = () => {
    return axios({
      method: "GET",
      url: "/api/users"
    }).then(result => {
      console.log(result.data);
      setWord(result.data[0].first_name);
    });
  };
  // registration: user informatoin in server
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

  // 4.19.20: registration: user informatoin in server
  const addTeam = teamName => {
    console.log("addTeam", teamName);
    return axios({
      method: "POST",
      url: "api/teams/addTeam",
      data: {
        teamName
      }
    }).catch(error => console.log(error));
  };

  // 4.19.20: add userId and team id in favoriteTeam
  const addFavoriteTeam = (userId, teamId) => {
    console.log("addFavoriteTeam", userId, teamId);
    return axios({
      method: "POST",
      url: "",
      data: {
        userId,
        teamId
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

  const getPlayersInfoByUserId = userId => {
    return axios({
      method: "GET",
      url: `/api/players/by_user/${userId}`
    }).then(response => {
      // console.log("App getPlayersInfoByUserId", response.data);
      setPlayersInfo(response.data);
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
          getPlayersInfoByUserId(response.data.id);
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
                <Register
                  register={register}
                  addTeam={addTeam}
                  addFavoriteTeam={addFavoriteTeam}
                />
              </Route>
              <Route path="/playball">
                <Playball user={userInfo} players={playersInfo} />
              </Route>
              <Route path="/">
                {/* {!userInfo && <Slideshow />} */}
                <Slideshow />
              </Route>
              <Route path="/:userId">
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
};

export default App;
