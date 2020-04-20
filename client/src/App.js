import React, { useState, useCallback, useRef } from "react";
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
import CreateTeam from "./components/CreateTeam";
import ShowTeam from "./components/ShowTeam";
import ShowPlayers from "./components/ShowPlayers";
import CreatePlayer from "./components/CreatePlayer";

import Test from "./components/Test.js";

const App = () => {
  const [word, setWord] = useState("");
  const [userId, setUserId] = useState(1);
  const [userInfo, setUserInfo] = useState(null);
  const [playersInfo, setPlayersInfo] = useState(null);
  const [teamNames, setTeamNames] = useState(null); //[]
  const [teamId, setTeamId] = useState(1);
  const [currentTeam, setCurrentTeam] = useState("");
  const [pitcher, setPitcher] = useState({
    name: "A Aron",
    uniform_number: "35",
    position: "RF"
  });
  const [hitter, setHitter] = useState({
    name: "A Aron",
    uniform_number: "35",
    position: "RF"
  });
  const nextId = useRef(100);

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
  // ## added .then for current created team
  const addTeam = (teamName, userId) => {
    console.log("addTeam", teamName);
    return (
      axios({
        method: "POST",
        url: "api/teams/addTeam",
        data: {
          teamName,
          userId
        }
      })
        // .then((teamName, userId) => {
        //   const team = {
        //     id: userId + 100,
        //     name: teamName,
        //     user_id: userId
        //   };
        //   setTeamNames(teamNames.concat(team));
        // })
        .catch(error => console.log(error))
    );
  };
  //4.14.20 for CreateTeam.js handleSubmit
  const addTeamInClient = useCallback(
    (teamName, userId) => {
      const team = {
        id: nextId.current,
        name: teamName,
        user_id: userId
      };
      setTeamNames(teamNames.concat(team));
      nextId.current += 1;
    },
    [teamNames]
  );

  //4.19.20 remove player
  const removePlayerById = id => {
    setPlayersInfo(playersInfo.filter(p => p.id !== id));
  };

  // get user infomation by user email /email/:email - 4.20.20
  const getUserInfoByEmail = email => {
    return axios({
      method: "GET",
      url: `/api/users/email/${email}`
    }).then(result => {
      console.log(result.data);
      setWord(result.data[0].email);
    });
  };

  // get team name by user id 4.14.20
  const getTeamNameByUserId = id => {
    return axios({
      method: "GET",
      url: `/api/teams/getTeamName/${id}`
    }).then(result => {
      console.log("getTeamNameByUserId", result.data);
      setTeamNames(result.data);
    });
  };

  //???????FIXIT  TypeError: Cannot read property 'then' of undefined
  // 4.13.20: get user id and team id by email, team_name
  const getUserIdTeamId = (email, team_name) => {
    // return axios({
    //   method: "GET",
    //   url: "/api/users"
    // }).then(result => {
    //   console.log(result.data);
    //   setWord(result.data[0].first_name);
    // });
    Promise.all([
      axios.get(`/api/users/${email}`),
      axios.get(`/api/teams/${team_name}`) // /api/watch_logs/:watch_log_id/log_entries
    ]).then(res => {
      console.log("Promise: ", res[0].data, res[1].data);
      // setUserWatchLogs(res[0].data)
      // setAllLogEntries(res[1].data)
    });
  };

  // 4.13.20: add userId and team id in favoriteTeam
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

  // 4.14.20: get roster players by team id
  //getPlayersFromSameTeam

  const getPlayersFromSameTeam = id => {
    return axios({
      method: "GET",
      url: `/api/teams/${id}`
    }).then(result => {
      console.log("getTeamNameByUserId", result.data);
      setTeamNames(result.data);
      // setPlayersInfo()
    });
  };

  // get UserInfo from user id
  const getUserInfo = userId => {
    return axios({
      method: "GET",
      url: `/api/users/${userId}`
    }).then(result => {
      console.log("App getUserInfo", result.data[0]);
      setUserInfo(result.data[0]);
    });
  };

  // get userId from user email
  const getUserIdByuserEmail = userEmail => {
    return axios({
      method: "GET",
      url: `/api/users/${userId}`
    }).then(result => {
      console.log("App getUserInfo", result.data[0]);
      setUserInfo(result.data[0]);
    });
  };
  // Old one no more use it - 4.14.20
  const getPlayersInfoByUserId = userId => {
    return axios({
      method: "GET",
      url: `/api/players/by_user/${userId}`
    }).then(response => {
      // console.log("App getPlayersInfoByUserId", response.data);
      setPlayersInfo(response.data);
    });
  };

  // 4.14.20: get players by user Id (3 tables join)
  const getPlayersByUserId = userId => {
    return axios({
      method: "GET",
      url: `/api/players/players/${userId}`
    }).then(response => {
      // console.log("App getPlayersInfoByUserId", response.data);
      setPlayersInfo(response.data);
      //4.17.20
      getPitcherFromPlayerInfo(response.data);
    });
  };

  //4.17.20: filter pitcher from players info
  const getPitcherFromPlayerInfo = playersInfo => {
    if (playersInfo) {
      setPitcher(playersInfo.filter(p => p.position === "P")[0]);
      console.log("getPitcherFromPlayerInfo", pitcher);
    }
  };

  //4.17.20: filter hitter from players info
  const getHitterFromPlayerInfo = id => {
    if (playersInfo) {
      setHitter(playersInfo.filter(p => p.id === id)[0]);
      console.log("App.js getHitterFromPlayerInfo pitcher:", hitter);
      // toggleCheckFromHitterId(id);
    }
  };

  //4.18.20: toggle check hitter from current hitter
  const toggleCheckFromHitterId = id => {
    if (hitter) {
      setPlayersInfo(
        playersInfo.map(p => (p.id === id ? { ...p, check: !p.check } : p))
      );
      console.log("App.js toggleCheckFromHitterId hitter:", hitter);
    }
  };

  // 4.14.20: get players by team id
  const getPlayersByteamId = teamId => {
    return axios({
      method: "GET",
      url: `/api/players/${teamId}`
    }).then(response => {
      console.log("App getPlayersByteamId", response.data);
      setPlayersInfo(response.data);
      //4.17.20: change team -> change pitcher
      // getPitcherFromPlayerInfo(response.data);
      setPitcher(response.data.filter(p => p.position === "P")[0]);
    });
  };

  const loginValidation = (email, password) => {
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
          // getPlayersInfoByUserId(response.data.id);
          getPlayersByUserId(response.data.id);
          getTeamNameByUserId(response.data.id);
          return response.data;
        } else {
          console.log("fail");
          return false;
        }
      })
      .catch(error => console.log(error));
  };

  // add players -4.15.20
  const addNewPlayers = (
    team_id,
    name,
    uniform_number,
    position,
    bats,
    throws,
    check
  ) => {
    console.log(
      "addNewPlayers",
      team_id,
      name,
      uniform_number,
      position,
      bats,
      throws,
      check
    );
    return axios({
      method: "POST",
      url: "api/players/newplayer",
      data: {
        team_id,
        name,
        uniform_number,
        position,
        bats,
        throws,
        check
      }
    }).catch(error => console.log(error));
  };

  return (
    <div className="app-body">
      {/* <button onClick={test}>TEST axios</button>
      <p>{word}</p> */}
      <div className="app-wrap">
        <Router>
          <div className="top-header">
            <div className="header_menu">
              <Link to="/" className="header_link">
                Home
              </Link>

              <Link to="/login" className="header_link">
                Login
              </Link>
            </div>
          </div>
          <header>
            <Header />
          </header>
          <aside>
            <Nav userInfo={userInfo} currentTeam={currentTeam} />
          </aside>
          <section>
            <Switch>
              <Route path="/login">
                <Login login={loginValidation} getUserInfo={getUserInfo} />
              </Route>
              <Route path="/registration">
                <Register
                  register={register}
                  addTeam={addTeam}
                  addFavoriteTeam={addFavoriteTeam}
                  getUserIdTeamId={getUserIdTeamId}
                />
              </Route>
              <Route path="/createTeam">
                <CreateTeam
                  addTeam={addTeam}
                  currentUserInfo={userInfo}
                  curretnUserId={userId}
                  addFavoriteTeam={addFavoriteTeam}
                  getUserIdTeamId={getUserIdTeamId}
                  getUserInfoByEmail={getUserInfoByEmail}
                  addTeamInClient={addTeamInClient}
                />
              </Route>
              <Route path="/showTeam">
                <ShowTeam
                  getTeamNameByUserId={getTeamNameByUserId}
                  currentUserInfo={userInfo}
                  curretnUserId={userId}
                  addFavoriteTeam={addFavoriteTeam}
                  teamNames={teamNames}
                  getPlayersFromSameTeam={getPlayersFromSameTeam}
                  getPlayersByteamId={getPlayersByteamId}
                  setTeamId={setTeamId}
                  setPlayersInfo={setPlayersInfo}
                  currentTeam={currentTeam}
                  setCurrentTeam={setCurrentTeam}
                />
              </Route>
              <Route path="/createPlayer">
                <CreatePlayer addNewPlayers={addNewPlayers} teamId={teamId} />
              </Route>
              <Route path="/showPlayer">
                <ShowPlayers
                  user={userInfo}
                  players={playersInfo}
                  teamId={teamId}
                  currentTeam={currentTeam}
                  removePlayerById={removePlayerById}
                />
              </Route>
              <Route path="/playball">
                <Playball
                  user={userInfo}
                  players={playersInfo}
                  pitcher={pitcher}
                  hitter={hitter}
                  getHitterFromPlayerInfo={getHitterFromPlayerInfo}
                  toggleCheckFromHitterId={toggleCheckFromHitterId}
                />
              </Route>
              <Route path="/">
                {!userInfo && <Slideshow />}
                {/* <Slideshow /> */}
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
