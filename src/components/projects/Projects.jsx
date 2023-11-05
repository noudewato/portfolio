import React, { useState } from "react";
import { MyProjects } from "./project";
import { FaDesktop, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [more, setMore] = useState(false);
  return (
    <div className="" id="portfolio">
      <div className="container-fluid px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">Projects</h2>
            <hr className="divider divider-light" />
            <p className="text-center text-muted mb-5">
              These are some of my projects
            </p>
          </div>
        </div>

        <div className="container-fluid p-0">
          <div className="row g-4">
            {MyProjects.map((project) => (
              <div className="col-lg-4 col-sm-6">
                <div className="projectCard" key={project.id}>
                  <div className="relative w-full h-[230px]">
                    <img src={project.image} alt="" className="projectImage" />
                  </div>
                  <div className="projectText">
                    <h3>{project.name}</h3>
                    <p>
                      {more === project.id
                        ? project.desc
                        : `${project.desc.slice(0, 100).concat('  ')}`}

                      <span
                        style={{ color: "darkgray" }}
                        onClick={() =>
                          setMore(more === project.id ? -1 : project.id)
                        }
                      >
                        {more === project.id ? "less" : "more..."}
                      </span>
                    </p>
                  </div>
                  <div className="projectBottom">
                    <a
                      href={project.gitLink}
                      target="_blank"
                      className="source"
                    >
                      <FaGithub />
                      <span> Source code</span>
                    </a>

                    <a href={project.demoLink} target="_blank" className="demo">
                      <FaDesktop />
                      <span> Live demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
