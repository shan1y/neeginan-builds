import React from "react";
import "./Hero.scss";
import logo from "../../assets/images/logo-green-bg.png";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-scroll";

function Hero() {
  return (
    <header className="hero">
      <nav className="nav">
        <img className="nav__logo" src={logo}></img>
        <div className="nav__links">
          <Link smooth={true} duration={1000} className="nav__link" to="about">
            About
          </Link>
          <Link
            smooth={true}
            duration={1000}
            className="nav__link"
            to="portfolio"
          >
            Projects
          </Link>
        </div>
      </nav>
      <section className="hero__section">
        <h1 className="hero__title">Neeginan Builds</h1>
        <p className="hero__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          excepturi est,
        </p>
        <Link
          smooth={true}
          duration={1000}
          to="portfolio"
          className="hero__button"
        >
          See More
        </Link>
        <Link to="about" smooth={true} duration={1000}>
          <FaChevronDown className="hero__chevron" />
        </Link>
      </section>
    </header>
  );
}

export default Hero;
