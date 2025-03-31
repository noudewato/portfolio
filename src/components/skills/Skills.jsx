import React from "react";

const skilled = [
  { skillName: "HTML5", image: "/assets/img/html5.png" },
  { skillName: "CSS3", image: "/assets/img/css3.png" },
  { skillName: "SASS", image: "/assets/img/sass.png" },
  { skillName: "BOOTSTRAP", image: "/assets/img/bootstrap.png" },
  { skillName: "JAVASCRIPT", image: "/assets/img/javascript.png" },
  { skillName: "REACT JS", image: "/assets/img/react.png" },
  { skillName: "MONGO DB", image: "/assets/img/mongodb-icon.svg" },
  { skillName: "MYSQL DB", image: "/assets/img/mysql-ar21.svg" },
  { skillName: "Node Js", image: "/assets/img/node.png" },
  { skillName: "Github", image: "/assets/img/github.png" },
  { skillName: "PHP", image: "/assets/img/php.png" },
  { skillName: "WORDPRESS", image: "/assets/img/wordpress.png" },
];

const Skills = () => {
  return (
    <section
      style={{ backgroundColor: "whitesmoke" }}
      className="page-section"
      id="skills"
    >
      <div className="container">
        <h2
          className="text-center fw-bold"
          data-aos="zoom-in"
          data-aos-duration="600"
        >
          SKILLS
        </h2>
        <hr className="divider" />
        <div className="row g-4">
          {skilled.map((skill, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-duration={`${600 + index * 100}`}
              data-aos-delay="200"
              className="col-lg-3 col-md-6 text-center"
            >
              <div className="shadow cursor-pointer rounded bg-white p-5">
                <div>
                  <img src={skill.image} alt={skill.skillName} />
                </div>
                <h4 className="h4">{skill.skillName}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
