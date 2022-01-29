import React from "react";
import Wave from "../../assets/wave.svg";
import ReactTypingEffect from "react-typing-effect";
import "./home.css";
import Resume from "../../assets/VarshithResume.pdf";
import Programming from "../../assets/programming.svg";
import GitHub from "../../assets/github.svg";
import GitHubDark from "../../assets/githubDark.svg";
import Insta from "../../assets/instagram.svg";
import InstaDark from "../../assets/instagramDark.svg";

import LinkedIn from "../../assets/linkedin.svg";
import LinkedInDark from "../../assets/linkedinDark.svg";

import { Link } from "react-scroll";
// import Blob from "../../assets/blob.svg";

export default function Home(props) {
  const { theme, setTheme } = props;
  const handelTheme = () => {
    setTheme(!theme);
    console.log(theme);
  };
  return (
    <div className="container_">
      <div id="home">
        <div className={`details `}>
          <div
            // className="bgfd"
            data-aos="fade-right"
            data-aos-duration="3000"
            className=" xfg1"
          >
            <div>
              <span className="intro">
                <span id="hiemoji">{`👋🏻`}</span>
                HELLO THERE, {`I AM `}
                <br className="break" />
                <span id="name">
                  {" "}
                  <span
                    // style={{ marginLeft: "4px" }}
                    className="highlightletter"
                  >
                    V
                  </span>
                  ARSHITH <span className="highlightletter">R</span>EDDY
                </span>
              </span>
            </div>
            <div className="myintro">
              I'm a Full Stack Web developer from Warnagal, India.
            </div>

            <div className="imake">
              I craft high-performing websites that are
              <div className="imakeHighlight">
                Brand accurate & User-friendly
              </div>
            </div>

            <div className="contactme">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                id="hireme"
              >
                Hire Me
              </Link>
              <a href={Resume} download>
                <button id="getresume">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="pic">
            <img src={Programming} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
}
