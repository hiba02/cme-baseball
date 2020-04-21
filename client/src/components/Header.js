import React from "react";
import "./Header.scss";
// npm install react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { DiJavascript1, DiReact, DiPostgresql, DiSass } from "react-icons/di";

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
                <h1>CME Baseball Score Book</h1>
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
                  <a
                    className="react-icon"
                    target="_blank"
                    href="https://en.wikipedia.org/wiki/React_(web_framework)"
                  >
                    <DiReact />
                    <span>React</span>
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
                    className="react-icon"
                    target="_blank"
                    href="https://en.wikipedia.org/wiki/Sass_(stylesheet_language)"
                  >
                    <DiSass />
                    <span>Sass</span>
                  </a>
                </li>
                <li>
                  <a
                    className="react-icon"
                    target="_blank"
                    href="https://en.wikipedia.org/wiki/PostgreSQL"
                  >
                    <DiPostgresql />
                    <span>Postgresql</span>
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
                {/* <li>
                  <a href="#">
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                    <span>Facebook</span>
                  </a>
                </li> */}
                {/* <li>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <span>twitter</span>
                  </a>
                </li> */}
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/yoon-soon-kang-445874a2/"
                  >
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                    <span>linkedin</span>
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
