import React from "react";
import "./Nav.scss";
import "./Slideshow";
// npm install react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewWindow from "react-new-window";
import Slideshow from "./Slideshow";

const Nav = ({ userInfo, currentTeam }) => {
  console.log("Nav conponent userInfo", userInfo);
  console.log("Nav conponent currentTeam", currentTeam);
  let userFirstName = "";
  if (userInfo) {
    userFirstName = userInfo.first_name;
  } else {
    userFirstName = "user";
  }

  return (
    <article className="Nav_component">
      <div className="menu">
        <p className="Nav-title">Hello, {userFirstName}</p>
        {currentTeam ? <p>Team</p> : ""}
        {currentTeam ? <p className="Nav-team"> {currentTeam}</p> : ""}
        <h4 className="col_title">Menu</h4>

        {userInfo ? (
          <ul>
            <li>
              <Link to="/createTeam" className="menu_link">
                Create team{" "}
                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="/showTeam" className="menu_link">
                Show Team{" "}
                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="/createPlayer" className="menu_link">
                Create Player{" "}
                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <Link to="/showPlayer" className="menu_link">
                Show Players{" "}
                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
        ) : (
          ""
        )}
        <ul>
          <li>
            <Link to="/playball" className="menu_link">
              Play ball{" "}
              <i className="fa fa-angle-double-right" aria-hidden="true"></i>
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default Nav;
