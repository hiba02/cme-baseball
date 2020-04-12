import React from "react";
import "./Nav.scss";
import "./Slideshow";
// npm install react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewWindow from "react-new-window";
import Slideshow from "./Slideshow";

const Nav = props => {
  console.log("Nav conponent", props.userInfo);
  let userFirstName = "";
  if (props.userInfo) {
    userFirstName = props.userInfo.first_name;
  } else {
    userFirstName = "user";
  }

  return (
    <article className="Nav_component">
      <div className="menu">
        <p class="col_desc">Hello, {userFirstName}</p>
        <h4 class="col_title">Menu</h4>
        <ul>
          <li>
            <a href="#">
              Create team{" "}
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              Team Roster{" "}
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              New Player{" "}
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              Line Up{" "}
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#">
              Play ball{" "}
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Nav;
