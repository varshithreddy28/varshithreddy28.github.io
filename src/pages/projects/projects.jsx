import React, { useEffect, useMemo } from "react";

import "./projects.css";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPassport,
  SiBootstrap,
  SiHeroku,
  SiNetlify,
  SiStripe,
  SiRedux,
} from "react-icons/si";

// Images
import Weather from "../../assets/weatheranalyzer.webp";
import ElectroStore from "../../assets/electrostore.webp";
export default function Projects(props) {
  const { theme, setTheme } = props;

  const project1Discription =
    "      It is a real-time Weather application that allows users to get weather and temperature from a specific place. It also provides the weather and temperature of neighboring cities and the next six days of Searched place.";

  const project2Discription =
    "It's an eCommerce Store that allows users to purchase the products with their Debit/Credit card. In this Admin can add, edit, delete the products. In this application Authentication and Authorization are implemented.";

  const projects = useMemo(() => {
    return [
      {
        id: 1,
        title: "Weather Analyzer",
        discription: project1Discription,
        demourl: "https://weatheranalyzer.herokuapp.com/",
        code: ["https://github.com/varshithreddy28/weatheranalyzer"],
        icons: [
          <SiNodedotjs className="techIcons" />,
          <SiExpress className="techIcons" />,
          <SiBootstrap className="techIcons" />,
          <SiHeroku className="techIcons" />,
        ],
        image: Weather,
        alt: "Real Time Weather App",
        rotate: false,
      },
      {
        id: 2,
        title: "Electro Store",
        discription: project2Discription,
        demourl: "https://electro-store.netlify.app/",
        code: [
          "https://github.com/varshithreddy28/ElectroStoreAPI",
          "https://github.com/varshithreddy28/ElectroStoreClient",
        ],
        icons: [
          <SiNodedotjs className="techIcons" />,
          <SiExpress className="techIcons" />,
          <SiBootstrap className="techIcons" />,
          <SiHeroku className="techIcons" />,
          <SiMongodb className="techIcons" />,
          <SiNetlify className="techIcons" />,
          <SiPassport className="techIcons" />,
          <SiRedux className="techIcons" />,
          <SiStripe className="techIcons" />,
          <SiReact className="techIcons" />,
        ],
        image: ElectroStore,
        alt: "Electro Store Ecommers",
        rotate: true,
      },
    ];
  }, []);

  // useEffect(() => {}, []);

  return (
    <div className="projectsPage" id="projects">
      <div className="container">
        <div className="projectHeader">
          <h1>Latest Projects </h1>
        </div>
        <div className="projectList">
          {projects.map((project) => {
            return !project.rotate ? (
              <div
                className="project"
                data-aos="zoom-in-up"
                data-aos-offset="100"
              >
                <div className="projectImg">
                  <img src={project.image} alt={`${project.title} Image`} />
                </div>
                <div className="projectDiscription">
                  <div className="title" alt={project.alt}>
                    {project.title}
                  </div>
                  <div className="projectdisc">{project.discription}</div>
                  <div className="projecticons">
                    {project.icons.map((icon) => {
                      return icon;
                    })}
                  </div>
                  <div className="projectbuttons">
                    <a
                      className="highlight"
                      href={project.demourl}
                      target="_blank"
                    >
                      Go Live
                    </a>
                    {project.code.length == 1 ? (
                      <a
                        target="_blank"
                        className="code"
                        href={project.code[0]}
                      >
                        Code
                      </a>
                    ) : (
                      <div className="">
                        <a target="_blank" href={project.code[0]}>
                          API
                        </a>
                        <a target="_blank" href={project.code[1]}>
                          CLIENT
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="project_rev"
                data-aos="zoom-in-up"
                data-aos-offset="250"
              >
                <div className="projectDiscription">
                  <div className="title" alt={project.alt}>
                    {project.title}
                  </div>
                  <div className="projectdisc">{project.discription}</div>
                  <div className="projecticons">
                    {project.icons.map((icon) => {
                      return icon;
                    })}
                  </div>
                  <div className="projectbuttons">
                    <a
                      className="highlight"
                      href={project.demourl}
                      target="_blank"
                    >
                      Go Live
                    </a>
                    {project.code.length == 1 ? (
                      <a
                        target="_blank"
                        className="code"
                        href={project.code[0]}
                      >
                        Code
                      </a>
                    ) : (
                      <div className="dropdown">
                        <button class="dropbtn">Code</button>
                        <div class="dropdown-content">
                          <a target="_blank" href={project.code[0]}>
                            API
                          </a>
                          <a target="_blank" href={project.code[1]}>
                            CLIENT
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="projectImg">
                  <img src={project.image} alt={`${project.title} Image`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
