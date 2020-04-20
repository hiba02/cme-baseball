import React from "react";
import "./Header.scss";
// npm install react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DiJavascript1, DiCss3 } from "react-icons/di";

export default function Header(props) {
  return (
    <article className="Header-component">
      <div className="container">
        <div className="header_container">
          <div className="row">
            {/* <div className="header_menu">
              <Link to="/" className="header_link">
                Home
              </Link>

              <Link to="/login" className="header_link">
                Login
              </Link>
            </div> */}
            {/* header title */}
            <div className="header_title">
              <Link to="/playball">
                <h1>CE Baseball Score Book</h1>
              </Link>
            </div>
            {/* header icons */}
            <div className="header_icon">
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/hiba02/cme-baseball"
                  >
                    <DiJavascript1 />
                    <span>JS</span>
                  </a>
                </li>

                <li>
                  <a href="https://en.wikipedia.org/wiki/HTML5">
                    <i className="fa fa-html5" aria-hidden="true"></i>
                    <span>HTML5</span>
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/hiba02/cme-baseball"
                  >
                    <i className="fa fa-github" aria-hidden="true"></i>
                    <span>Github</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                    <span>Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <span>twitter</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
