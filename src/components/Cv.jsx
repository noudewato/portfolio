import React from "react";

const Cv = () => {
  return (
    <section className="cv page-section text-white">
      <div
        className="container px-4 px-lg-5 text-center"
        data-aos="zoom-in"
        data-aos-duration="600"
      >
        <a
          className="btn btn-light btn-xl"
          href="/assets/img/FawazResume.pdf"
          target="_blank"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Cv;
