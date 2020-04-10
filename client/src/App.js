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

  function login(email, password) {
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
          return true;
        } else {
          console.log("fail");
          return false;
        }
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="App">
      <button onClick={test}>TEST axios</button>
      <p>{word}</p>
      <Router>
        <Switch>
          <Route path="/login">
            <Login login={login} />
            {/* <Login /> */}
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
