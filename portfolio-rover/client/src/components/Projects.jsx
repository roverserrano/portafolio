import { useI18n } from "../i18n/LanguageProvider.jsx";
import { lazy, Suspense, useState } from "react";
import {
  featuredProject as raw_featuredProject,
  otherProjects as raw_otherProjects,
} from "../data/projects.js";
import FeaturedProject from "./FeaturedProject.jsx";
import ProjectCard from "./ProjectCard.jsx";
import Reveal from "./Reveal.jsx";
import SectionHeader from "./SectionHeader.jsx";
import Architecture from "./Architecture.jsx";
const ProjectModal = lazy(() => import("./ProjectModal.jsx"));
export default function Projects() {
  const { t, translateData } = useI18n();
  const featuredProject = translateData(raw_featuredProject);
  const otherProjects = translateData(raw_otherProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section
      id="proyectos"
      className="section-shell"
      aria-labelledby="projects-heading"
    >
      <div className="container-page">
        <Reveal>
          <SectionHeader
            id="projects-heading"
            eyebrow={t("01 / Proyectos seleccionados")}
            title={t("Ideas que se convierten en sistemas.")}
          >
            {t(
              "De una cámara en el campo a una API, una bóveda móvil o un sistema hospitalario. El problema, mi contribución y las decisiones detrás de cada proyecto.",
            )}
          </SectionHeader>
        </Reveal>

        <div className="mt-14">
          <FeaturedProject
            project={featuredProject}
            onOpen={setSelectedProject}
          />
        </div>

        <Reveal>
          <Architecture />
        </Reveal>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {otherProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
              onOpen={setSelectedProject}
            />
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-subtle">
            {t(
              "Los casos de estudio incluyen el contexto, mi rol y las decisiones técnicas. El código público está en GitHub; el proyecto hospitalario se comparte bajo solicitud. Las vistas de producto son recreaciones ilustrativas, con datos de ejemplo.",
            )}
          </p>
        </Reveal>
      </div>

      {selectedProject ? (
        <Suspense fallback={null}>
          <ProjectModal
            key={selectedProject.slug}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </Suspense>
      ) : null}
    </section>
  );
}
