import React from "react";
import "./homefooter.css";

import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";
import WebSiteBuild from "../../assets/websitebuild.svg";

// import Icons from "../../components/contactme/icons";

export default function Homefooter({ theme }) {
  const shieldStyle = {
    color: `${!theme ? "#04042bcc" : ""}`,
    // fontSize: "1.4em",
    margin: "10px 8px",
  };

  const highPerformance = [
    {
      text: "User Frinedly",
    },
    {
      text: "Fully Functional",
    },
    {
      text: "Secure",
    },
    {
      text: "High Performance",
    },
  ];
  return (
    <div id="gnjs2">
      <div className="headding">
        <h1>About me: </h1>
      </div>
      <div
        className="bottomHomeHeader bottomHome "
        id="aboutVarshith"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="bottomImg">
          <img src={WebSiteBuild} alt="Image of construction" />
        </div>
        <div className="card_me">
          <div className="cardBody">
            <div style={{ marginBottom: "1em" }} className="hi">
              👋🏻 Hi {`:)`}
            </div>
            <div className="mydetails">
              <div>I'm Varshith Reddy 🤝🏻,</div>
              <div className="education">
                I am Pursuing Bachelor of Technology in Electronics and
                communication engineering .
                <br />
                I am also a full stack developer.I build websites wich are
                compeletely responsive.
                <br />
                This portfolio is also one of my Project.{" "}
                <div className="icreate">
                  {" "}
                  Websites that I will create will be:
                </div>
                {/* <br /> */}
                <div className="whatiDo">
                  {highPerformance.map((text) => {
                    return (
                      <div className="highperformance">
                        <span className="icon">
                          {theme ? (
                            <BsCheckCircle className="techIcons_home" />
                          ) : (
                            <BsCheckCircleFill className="techIcon_home" />
                          )}
                        </span>
                        <span className="bngh1">{text.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
