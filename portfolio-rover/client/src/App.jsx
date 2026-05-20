import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export const profile = {
  name: "Rover Serrano Quiroz",
  title: "Desarrollador Full Stack en Cochabamba, Bolivia",
  shortTitle: "Full Stack",
  location: "Cochabamba, Bolivia",
  phrase:
    "Construyo soluciones web, moviles e inteligentes combinando desarrollo full stack, inteligencia artificial aplicada e integracion hardware-software para proyectos reales.",
  github: "https://github.com/roverserrano",
  linkedin: "https://linkedin.com/in/rover-serrano",
  email: "serranorover436@gmail.com",
  whatsapp: "59171338567",
};

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-navy text-white">
      <Navbar profile={profile} />
      <main>
        <Hero profile={profile} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact profile={profile} />
      </main>
      <Footer profile={profile} />
    </div>
  );
}
