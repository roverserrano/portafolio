import { useI18n } from "../i18n/LanguageProvider.jsx";
import { useId, useState } from "react";
import { ArrowUpRight, Cpu, ScanLine } from "lucide-react";
export default function BoviPreview({ priority = false }) {
  const { t } = useI18n();
  const [detections, setDetections] = useState(false);
  const id = useId();
  return (
    <figure className={`bovi-preview ${detections ? "show-detections" : ""}`}>
      <div className="bovi-scene">
        <img
          src="/projects/bovisense-field.webp"
          srcSet="/projects/bovisense-field-400.webp 400w, /projects/bovisense-field-600.webp 600w, /projects/bovisense-field-800.webp 800w, /projects/bovisense-field-1200.webp 1200w, /projects/bovisense-field.webp 1600w"
          sizes="(min-width: 1024px) 600px, calc(100vw - 40px)"
          width="1600"
          height="1000"
          alt={t(
            "Recreación visual de BoviSense: cámara y dispositivo de campo junto a ganado en un corral al atardecer.",
          )}
          fetchPriority={priority ? "high" : undefined}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
        <div className="bovi-scene-shade" aria-hidden="true" />
        <div className="bovi-topline">
          <span>
            <Cpu size={14} aria-hidden="true" /> {"BOVISENSE"} <b>{"AI"}</b>
          </span>
          <span className="bovi-prototype">{t("Proyecto de grado")}</span>
        </div>
        <div id={id} className="detection-overlay" aria-hidden="true">
          <span className="detection-box detection-one">
            <span>{t("Bovino")}</span>
          </span>
          <span className="detection-box detection-two">
            <span>{t("Bovino")}</span>
          </span>
          <div className="scan-line" />
        </div>
        <div className="bovi-scene-title">
          <span>{t("IA aplicada, fuera de la pantalla.")}</span>
          <strong>
            {t("Del campo")}
            <br />
            {t("a la aplicación.")}
          </strong>
        </div>
        <button
          className="detection-toggle"
          type="button"
          aria-pressed={detections}
          aria-controls={id}
          onClick={() => setDetections((current) => !current)}
        >
          <ScanLine size={15} aria-hidden="true" />
          {detections ? t("Ocultar detecciones") : t("Ver detecciones")}
        </button>
      </div>
      <div className="bovi-stats">
        <div>
          <strong>0.87</strong>
          <span>{t("mAP del prototipo")}</span>
        </div>
        <div>
          <strong>
            {"~2 h"} <ArrowUpRight size={15} aria-hidden="true" /> {"~5 min"}
          </strong>
          <span>{t("conteo por lote")}</span>
        </div>
        <span className="bovi-stack">
          {"Edge AI"}
          <br />
          <b>{"+ Mobile"}</b>
        </span>
      </div>
      <figcaption>
        {t("Recreación visual con IA · detecciones ilustrativas")}
      </figcaption>
    </figure>
  );
}
