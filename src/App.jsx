import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Cv from "./components/Cv";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";


function App() {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);
  
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Services/>
      <Projects />
      <Cv />
      <Contact />
    </div>
  );
}

export default App;
