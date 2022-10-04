import React from "react";
import "./PageHeader.scss";
import logo from "../../assets/images/logo-green-bg.jpeg";

function PageHeader() {
  return (
    <header>
      <nav className="nav">
        <img className="nav__logo" src={logo}></img>
        <div className="nav__links">
          <a className="nav__link" href="about">
            About
          </a>
          <a className="nav__link" href="about">
            Portfolio
          </a>
        </div>
      </nav>
    </header>
  );
}

export default PageHeader;
