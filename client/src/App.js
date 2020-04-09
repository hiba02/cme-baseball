import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import axios from "axios";

// Components
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  const [word, setWord] = useState("");
  const test = () => {
    return axios({
      method: "GET",
      url: "/users"
    }).then(result => {
      console.log(result.data);
      setWord(result.data[0].first_name);
    });
  };
  ////////////////////////////////////////////////
  // register
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirectHome, setRedirectHome] = useState(false);

  const register = (firstName, lastName, email, password) => {
    console.log("registration", firstName, lastName, email, password);
    return (
      axios({
        method: "POST",
        url: "api/users/registration",
        data: {
          firstName,
          lastName,
          email,
          password
        }
      })
        // .then(userInfo => {
        // const id = userInfo.data.id;
        // const username = userInfo.data.username;
        // const email = userInfo.data.email;
        ////////////
        // const first_name = userInfo.data.firstName;
        // const last_name = userInfo.data.lastName;
        // const email = userInfo.data.email;
        // const password = userInfo.data.password;
        ////////////
        // const user = {
        //   id,
        //   username,
        //   email
        // };
        // setState({ ...state, user: user });
        // })
        .catch(error => console.log(error))
    );
  };

  function login(email, password) {
    return axios({
      method: "POST",
      url: "/api/users/login",
      data: { email, password }
    }).then(response => {
      const id = response.data.id;
      const username = response.data.username;
      const email = response.data.email;
      // const user = {
      //   id,
      //   username,
      //   email
      // };
      // if (user) {
      //   setState({ ...state, user: user });
      // } else {
      //   // send an error
      // }
    });
  }

  return (
    <div className="App">
      <button onClick={test}>TEST axios</button>
      <p>{word}</p>
      <Router>
        <Switch>
          <Route path="/login">
            <Login login={login} />
          </Route>

          <Route path="/registration">
            <Register register={register} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
