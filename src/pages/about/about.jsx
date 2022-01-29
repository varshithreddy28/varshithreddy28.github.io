import React from "react";
import "./about.css";
import Proud from "../../assets/pic.svg";
import ProudDark from "../../assets/picDark.svg";
import {
  MdDesignServices,
  MdHomeRepairService,
  MdFavorite,
} from "react-icons/md";
import { AiFillCode } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
export const About = ({ theme }) => {
  return (
    <div className="aboutPage " id="skills">
      <div className="container" id="about">
        <div className="">
          <div className="aboutHeader">
            <h1 style={{ color: "#f7f7f7" }}>My Skills : </h1>
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            className="frontend"
          >
            <div className="skilltype">
              <MdDesignServices />
              <span>Front End :</span>
            </div>
            <div className="skills">Html5 Css BootStrap ReactJs Redux</div>
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            className="backend"
          >
            <div className="skilltype">
              <FaServer />
              <span>Back End : </span>
            </div>
            <div className="skills">NodeJs ExpressJs MongoDb </div>
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            className="languages"
          >
            <div className="skilltype">
              <AiFillCode />
              <span>Languages : </span>
            </div>
            <div className="skills">C JavaScript Python</div>
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-offset="150"
            data-aos-easing="ease-in-sine"
            className="devtools"
          >
            <div className="skilltype">
              <MdDesignServices />
              <span>Dev Tools : </span>
            </div>
            <div className="skills">Git Postman Stripe Netlify Heroku</div>
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            className="intrests"
          >
            <div className="skilltype">
              <MdFavorite />
              <span>Intrests : </span>
            </div>
            <div className="skills">Fullstackdev Mobile Dev</div>
          </div>
        </div>
        <div className="aboutImg">
          <img src={Proud} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
