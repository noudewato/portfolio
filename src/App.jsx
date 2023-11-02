import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Cv from "./components/Cv";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Cv />
      <Contact />
    </div>
  );
}

export default App;
