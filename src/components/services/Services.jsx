import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaUser,
  FaHeart,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    description:
      "🚀 Build cutting-edge web and mobile applications with our expert development services. We ensure high performance, scalability, and security.",
    title: "Development",
  },
  {
    icon: <FaMobileAlt />,
    description:
      "📱 Your website will look stunning on all devices. Our responsive designs adapt seamlessly to desktops, tablets, and mobile phones.",
    title: "Responsive",
  },
  {
    icon: <FaPaintBrush />,
    description:
      "🎨 Elevate user experience with intuitive and visually appealing designs that engage and convert visitors effortlessly.",
    title: "UX / UI Design",
  },
  {
    icon: <FaUser />,
    description:
      "👍 We create easy-to-use interfaces with seamless navigation, ensuring the best experience for your users.",
    title: "User Friendly",
  },
  {
    icon: <FaHeart />,
    description:
      "❤️ Designed with passion, our solutions are crafted to be both aesthetically pleasing and functionally superior.",
    title: "Lovely",
  },
  {
    icon: <FaRocket />,
    description:
      "📌 Leverage the latest Bootstrap 5 framework for fast, flexible, and mobile-first web development.",
    title: "Bootstrap 5",
  },
];

export default function Services() {
  return (
    <section className="py-5 text-center">
      <div className="container">
        <h2 className="fw-bold mb-4" data-aos="zoom-in" data-aos-duration="600">
          SERVICES
          <div
            data-aos="zoom-in"
            data-aos-duration="600"
            className="underline"
          ></div>
        </h2>
        <div className="row">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-duration="600"
              className="col-lg-4 col-md-6 position-relative border-service"
            >
              <div className="p-4">
                <div className="service-icon">{service.icon}</div>
                <h4 className="mt-3">{service.title}</h4>
                <p className="text-muted">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
