import { useI18n } from "../i18n/LanguageProvider.jsx";
import { Code2, Database, GitBranch, Workflow } from "lucide-react";
const capabilities = [
  {
    icon: Code2,
    name: "Interfaces",
    detail: "React · JavaScript · Tailwind",
  },
  {
    icon: Database,
    name: "Backend & datos",
    detail: "Node.js · APIs REST · SQL",
  },
  {
    icon: Workflow,
    name: "Integración",
    detail: "IA aplicada · Flutter · IoT",
  },
  {
    icon: GitBranch,
    name: "Forma de trabajar",
    detail: "Git · documentación · pruebas",
  },
];
export default function ProofStrip() {
  const { t } = useI18n();
  return (
    <section
      className="capabilities-strip"
      aria-label={t("Áreas de desarrollo")}
    >
      <div className="container-page capabilities-grid">
        {capabilities.map(({ icon: Icon, name, detail }) => (
          <div className="capability" key={t(name)}>
            <Icon size={20} aria-hidden="true" />
            <div>
              <strong>{t(name)}</strong>
              <span>{t(detail)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
