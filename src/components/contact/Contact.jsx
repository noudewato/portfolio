import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="page-section" id="contact">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 col-xl-6 text-center">
              <h2 className="mt-0">Get In Touch!</h2>
              <hr className="divider" />
            </div>
          </div>
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-4 text-center mb-5 mb-lg-0">
              <i className="bi-geo-alt fs-2 mb-3" style={{ color: "blue" }} />
              <div> Accra, Nima Market, Ghana</div>
            </div>
            <div className="col-lg-4 text-center mb-5 mb-lg-0">
              <i
                className="bi-phone fs-2 mb-3"
                style={{ color: "green" }}
              />{"   "}<i
              className="bi-whatsapp fs-2 mb-3"
              style={{ color: "green" }}
            />
              <div>+233538130711</div>
            </div>
            <div className="col-lg-4 text-center mb-5 mb-lg-0">
              <i className="bi-envelope fs-2 mb-3" style={{ color: "red" }} />
              <div>noudewatofawaz7@gmail.com</div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer*/}
      <footer className="bg-light py-2">
        <div className="container px-4 px-lg-5">
          <div className="fs-bold text-center text-muted">Copyright © 2023</div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
