import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import axios from "axios";

// Components
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";

function App() {
  const [word, setWord] = useState("");
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
          return response.data;
        } else {
          console.log("fail");
          return false;
        }
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="app-body">
      {/* <button onClick={test}>TEST axios</button>
      <p>{word}</p> */}
      <div className="app-wrap">
        <Router>
          <header>
            <Header />
          </header>
          <aside></aside>
          <section>
            <Switch>
              <Route path="/login">
                <Login login={login} />
                {/* <Login /> */}
              </Route>

              <Route path="/registration">
                <Register register={register} />
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
