import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import "./Playball.scss";

const Palyball = props => {
  console.log("Palyball component props: ", props);
  console.log("Palyball component props.id: ", props.user);
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
    <div className="palyball_body">
      <div className="playball_wrap">
        <header className="playball_header"></header>
        <aside className="playball_aside"></aside>
        <section className="playball_section"></section>
        <footer className="playball_footer"></footer>
      </div>
    </div>
  );
};

export default Palyball;
