import React from "react";
import "./icons.css";

import GitHub from "../../assets/github.svg";
import GitHubDark from "../../assets/githubDark.svg";
import Insta from "../../assets/instagram.svg";
import InstaDark from "../../assets/instagramDark.svg";
import LinkedIn from "../../assets/linkedin.svg";
import LinkedInDark from "../../assets/linkedinDark.svg";
import Sun from "../../assets/sun.svg";
import SunDark from "../../assets/sun.svg";

import Moon from "../../assets/moon.svg";

export default function Icons({ theme, setTheme }) {
  const handelTheme = () => {
    setTheme(!theme);
    console.log(theme);
  };
  return (
    <div className="icons_er">
      <div className="themechange_mobile">
        <a target="_blank" onClick={() => handelTheme()}>
          <img src={theme ? SunDark : Moon} alt="Link To instagram" />
        </a>
      </div>
      <div id="contacticons_">
        <div className="contacticons">
          <a target="_blank" href="https://github.com/varshithreddy28">
            <img src={theme ? GitHub : GitHubDark} alt="Link To git hub" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/varshith-reddy-3967131bb/"
          >
            <img
              src={theme ? LinkedIn : LinkedInDark}
              alt="Link to Linked In"
            />
          </a>
          {/* <a target="_blank" href="https://www.instagram.com/codenddevs/">
            <img src={theme ? Insta : InstaDark} alt="Link To instagram" />
          </a> */}

          <div className="desktopView" onClick={() => handelTheme()}>
            <a target="_blank">
              <img src={theme ? Sun : Moon} alt="Change Theme" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
