import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <header className="masthead" id="home">
      <div className="container px-4 px-lg-5 h-100">
        <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
          <div className="col-lg-8 align-self-end">
            <h1
              className="text-white font-weight-bold"
              data-aos="fade-down"
              data-aos-duration="600"
            >
              Fawaz <span style={{ color: "#f4623a" }}>Noudewato</span>
            </h1>
            <hr className="divider" />
          </div>
          <div className="col-lg-8 align-self-baseline">
            <p className="text-white-75 mb-5">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .changeDelay(80)
                    .typeString("I'm a Frontend Developer")
                    .pauseFor(1500)
                    .deleteAll()
                    .typeString("Code. ")
                    .pauseFor(500)
                    .typeString("Create. ")
                    .pauseFor(500)
                    .typeString("Innovate.")

                    .start();
                }}
              />
            </p>
            {/* <a className="btn btn-primary btn-xl" href="#about">
              Find Out More
            </a> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
