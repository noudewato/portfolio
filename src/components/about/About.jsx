import React from "react";

const About = () => {
  return (
    <section className="page-section about" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-12 text-center">
            <h2
              className="text-white mt-0"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
            >
              About Me
            </h2>
            <hr className="divider" style={{ color: "#f4623a" }} />
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
              data-aos-easing="ease-in-out"
              className="text-white-75 mb-4 fw-bold"
            >
              A dedicated and results-driven Software Developer with expertise
              in React.js, React Native, Node.js, and .NET clean architecture.
              Adept at creating scalable user-friendly applications and managing
              databases like MSSQL and MongoDB. Experienced in WordPress website
              development and creating solutions for the hospitality and retail
              industries. With a strong commitment to continuous learning,
              actively seeks opportunities to acquire new knowledge and apply it
              to drive innovation and solve business challenges. This drive to
              evolve professionally benefits career growth and contributes
              significantly to the success of teams and companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
