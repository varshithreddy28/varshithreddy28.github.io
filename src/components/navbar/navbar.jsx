import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import Bar from "../../assets/bars.svg";
import Cross from "../../assets/times.svg";
import "../../App.css";

export default function Navbar() {
  const [mobileView, setMobileView] = useState(false);
  const links = ["home", "about", "projects", "skills", "contact"];

  useEffect(() => {
    console.log(mobileView);
  }, [mobileView]);

  const Changeview = () => {
    console.log("Hi");
  };

  const linkStyle = {
    textDecoration: "none",
    color: "var(--seconddark)",
    fontsize: "x-large",
  };

  const handelClose = () => {
    setMobileView(false);
  };

  return (
    <header className="">
      <label
        style={{ cursor: "pointer" }}
        htmlFor=""
        // onClick={handleLogo}
        className="logo"
      >
        <Link
          style={linkStyle}
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          // offset={-70}
          duration={500}
        >
          Varshith Reddy
        </Link>
        {/* <a style={linkStyle} href="#home">
          Varshith Reddy
        </a> */}
      </label>

      <nav className="navbarPort fixed">
        <ul className={mobileView ? "mobilelinks" : "nav_links"}>
          {links.map((link) => {
            return (
              // <div className="">
              <li className="linksPort">
                <Link
                  // style={linkStyle}
                  activeClass="active"
                  onClick={handelClose}
                  to={link === "about" ? "gnjs2" : link}
                  spy={true}
                  smooth={true}
                  // offset={-70}
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* <div className="mobileBar">
          <a onClick={() => setMobileView(!mobileView)}>
            <img id="hamburger" src={mobileView ? Cross : Bar} alt=" " />
          </a>
        </div> */}
      </nav>
      <div className="mobileBar">
        <a onClick={() => setMobileView(!mobileView)}>
          <img id="hamburger" src={mobileView ? Cross : Bar} alt=" " />
        </a>
      </div>
    </header>
  );
}
