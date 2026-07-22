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
  title: "Desarrollador Full Stack",
  shortTitle: "Full Stack Dev",
  location: "Cochabamba, Bolivia",
  phrase:
    "Ingeniero de Sistemas recién graduado. Construyo soluciones web, móviles e inteligentes que resuelven problemas reales.",
  github: "https://github.com/roverserrano",
  linkedin: "https://linkedin.com/in/rover-serrano",
  email: "serranorover436@gmail.com",
  whatsapp: "59171338567",
};

export default function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-bg-primary text-text-primary">
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