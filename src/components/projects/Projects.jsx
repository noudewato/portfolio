import React, { useState } from "react";
import { MyProjects } from "./project";
import { FaDesktop, FaGithub } from "react-icons/fa";

const Projects = () => {
  const [more, setMore] = useState(false);
  return (
    <div style={{ backgroundColor: "whitesmoke" }} className="" id="portfolio">
      <div className="container py-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-12 text-center">
            <h2
              className="mt-0 fw-bold"
              data-aos="zoom-in"
              data-aos-duration="600"
            >
              MY WORKS
            </h2>
            <hr
              className="divider"
              style={{ color: "#f4623a" }}
              data-aos="zoom-in"
              data-aos-duration="600"
            />
            <p
              data-aos="zoom-in"
              data-aos-duration="600"
              className="text-center fw-semibold fs-4 mb-5"
            >
              These are some of my works
            </p>
          </div>
        </div>

        <div className="container p-0">
          <div className="row g-4">
            {MyProjects.map((project) => (
              <div className="col-lg-4 gap-4 col-sm-6">
                <div
                  className="projectCard shadow"
                  key={project.id}
                  data-aos="zoom-in"
                  data-aos-duration={`${600 + project.id * 100}`}
                  data-aos-delay="200"
                  data-aos-easing="ease-in-out"
                >
                  <div className="relative w-full h-[230px]">
                    <img src={project.image} alt="" className="projectImage" />
                  </div>
                  <div className="projectText">
                    <h5 className="">{project.name}</h5>
                    <p className="text-muted">
                      {more === project.id
                        ? project.desc
                        : `${project.desc.slice(0, 55).concat("  ")}`}

                      <span
                        style={{ color: "#3B82F6", fontWeight: "bold" }}
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
                      <span className="ms-2">
                        {" "}
                        {project.gitLink === ""
                          ? "Private"
                          : "Source code"}{" "}
                      </span>
                    </a>

                    <a href={project.demoLink} target="_blank" className="demo">
                      <FaDesktop />
                      <span>
                        {project.demoLink === "" ? "Private" : "Live demo"}{" "}
                      </span>
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
