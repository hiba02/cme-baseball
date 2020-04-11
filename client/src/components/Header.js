import React from "react";
import "./Header.scss";
// npm install react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Header(props) {
  return (
    <article className="Header-component">
      <div className="container">
        <div className="header_container">
          <div className="row">
            <div className="header_menu">
              <Link to="/" className="header_link">
                home
              </Link>

              <Link to="/login" className="header_link">
                login
              </Link>
            </div>
            <div class="header_tit">
              <h1>CBME Baseball</h1>
              <br />
              <br />
              <Link to="/login" className="header_link">
                Chicken
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
