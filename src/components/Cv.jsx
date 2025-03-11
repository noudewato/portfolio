import React from "react";

const Cv = () => {
  return (
    <section className="cv page-section bg-dark text-white">
      <div className="container px-4 px-lg-5 text-center">
        <a
          className="btn btn-light btn-xl"
          href="/assets/img/resume.pdf"
          target="_blank"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Cv;
