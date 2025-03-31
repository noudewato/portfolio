import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaGlobe,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://node-api-78ii.onrender.com/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-white fs-4" />,
      label: "Address",
      value: "Kanda high way",
    },
    {
      icon: <FaPhoneAlt className="text-white fs-4" />,
      label: "Phone",
      value: "+233538130711",
      link: "tel://+233538130711",
    },
    {
      icon: <FaPaperPlane className="text-white fs-4" />,
      label: "Email",
      value: "noudewatofawaz7@gmail.com",
      link: "mailto:noudewatofawaz7@gmail.com",
    },
    {
      icon: <FaGlobe className="text-white fs-4" />,
      label: "Website",
      value: "noudewato-fawaz.netlify.app",
      link: "https://noudewato-fawaz.netlify.app/",
    },
  ];

  return (
    <section id="contact">
      <section className="container py-5 ">
        <h2 className="text-center fw-bold">
          Contact Us
          <hr className="divider" style={{ color: "#f4623a" }} />
        </h2>

        <div className="row g-4 rounded shadow bg-white my-5 mx-1">
          {/* Contact Information */}
          <div className="col-md-6">
            <div className="p-4">
              {contactInfo.map((info, index) => (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  key={index}
                  className="d-flex align-items-center mb-4"
                >
                  <div
                    className="text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#f4623a",
                    }}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="fw-bold mb-1">{info.label}</p>
                    <p className="mb-0">
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-decoration-none text-primary"
                        >
                          {info.value}
                        </a>
                      ) : (
                        info.value
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-6" data-aos="zoom-in" data-aos-duration="600">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                {["name", "email", "subject"].map((field, index) => (
                  <div key={index} className="mb-3">
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={
                        field.charAt(0).toUpperCase() + field.slice(1)
                      }
                      className="form-control"
                      required
                    />
                  </div>
                ))}
                <div className="mb-3">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Message"
                    className="form-control"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={status === "Sending..."}
                >
                  {status === "Sending..." ? (
                    <span className="spinner-border spinner-border-sm me-2"></span>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {status && (
                  <p className="text-center text-muted mt-2">{status}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="text-center py-3">
        <p className="mb-0 fw-bold">
          &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
      </footer>
    </section>
  );
}
