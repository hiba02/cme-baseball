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
        <p className="col_desc">Hello, {userFirstName}</p>
        <h4 className="col_title">Menu</h4>

        {props.userInfo ? (
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
                New Player{" "}
                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
              </Link>
            </li>
            <li>
              <a href="#">
                Team Roster{" "}
                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
              </a>
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
