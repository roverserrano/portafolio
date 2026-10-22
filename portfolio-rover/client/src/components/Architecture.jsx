import { useI18n } from "../i18n/LanguageProvider.jsx";
import { useId, useState } from "react";
import { ArrowRight, Camera, Cpu, Radio, Smartphone } from "lucide-react";
const steps = [
  {
    icon: Camera,
    name: "Captura",
    stack: "Cámara",
    detail:
      "La cámara captura el paso del ganado. Es el punto de entrada del sistema de visión artificial.",
  },
  {
    icon: Cpu,
    name: "Detección",
    stack: "Python · Jetson",
    detail:
      "La Jetson Orin Nano procesa las imágenes en el borde y ejecuta el modelo de detección, cerca del lugar donde se generan los datos.",
  },
  {
    icon: Radio,
    name: "Comunicación",
    stack: "ESP32 · LoRa / BLE",
    detail:
      "Los dispositivos ESP32 y los enlaces LoRa y BLE conectan el procesamiento de campo con la operación móvil.",
  },
  {
    icon: Smartphone,
    name: "Aplicación",
    stack: "Flutter · Node · Firebase",
    detail:
      "La app Flutter permite operar el sistema y consultar resultados. La API Node/Express y Firebase gestionan autenticación y persistencia.",
  },
];
export default function Architecture() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);
  const id = useId();
  return (
    <div className="architecture">
      <div className="architecture-heading">
        <span className="eyebrow">{t("Una arquitectura conectada")}</span>
        <span>{t("Explora cada etapa")}</span>
      </div>
      <ol className="architecture-flow">
        {steps.map(({ icon: Icon, name, stack }, index) => (
          <li key={t(name)}>
            <button
              type="button"
              className={active === index ? "is-active" : ""}
              aria-pressed={active === index}
              aria-controls={id}
              onClick={() => setActive(index)}
            >
              <Icon size={21} aria-hidden="true" />
              <strong>{t(name)}</strong>
              <span>{t(stack)}</span>
            </button>
            {index < steps.length - 1 && (
              <ArrowRight
                className="architecture-arrow"
                size={15}
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ol>
      <p id={id} className="architecture-detail" aria-live="polite">
        <span>0{active + 1} /</span>
        {t(steps[active].detail)}
      </p>
    </div>
  );
}
