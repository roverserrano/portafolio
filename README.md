# Rover Serrano Quiroz · Full Stack Junior

Portafolio personal orientado a mi primer rol full stack: React, Node.js e integración de IA aplicada. Incluye cuatro casos de estudio, CV de una página, formulario de contacto y vistas de producto.

## Desarrollo

Requiere Node.js 20.19+ o 22.12+.

```bash
cd portfolio-rover/client
npm ci
npm run dev
```

```bash
npm run lint
npm test
npm run build
npm run preview
```

El sitio se genera en `portfolio-rover/client/dist`. La compilación genera HTML estático con React y luego hidrata sus controles en el navegador; no necesita un servidor Node en el hosting. El dominio para las versiones localizadas se configura en `src/i18n/metadata.js` (`SITE_URL`). Al cambiarlo, actualiza también `index.html`, `public/robots.txt`, el sitemap de referencia y el enlace del CV.

## Contenido

- `src/data/profile.js`: contacto, disponibilidad y enlace al CV.
- `src/data/projects.js`: problema, solución, contribución, stack, fechas y resultados.
- `src/data/skills.js`: niveles declarados de las tecnologías.
- `src/data/journey.js`: experiencia práctica, educación y cursos.
- `public/projects/`: WebP en 800 y 1600 px para servir imágenes responsive.
- `public/cv/Rover-Serrano-CV.pdf`: CV de una página, en una columna y con texto seleccionable. El currículo original se conserva.

Las imágenes de producto son recreaciones conceptuales y no capturas del software. Las interfaces y los datos ilustrativos se identifican como tales. Los resultados de BoviSense (mAP 0.87, ~2 h a ~5 min por lote) corresponden a los resultados reportados del prototipo en la información del proyecto; no representan un servicio comercial ni métricas de usuarios. Las otras tarjetas describen funcionalidades sin atribuirles cifras inventadas.

## Interacciones y accesibilidad

Vista ilustrativa de detección en BoviSense; arquitectura con etapas seleccionables; casos de estudio con cierre por Escape, foco contenido y restaurado al disparador; menú móvil operable con teclado; enlace para saltar al contenido; estados accesibles de contacto; movimiento reducido. Las animaciones usan CSS e IntersectionObserver.

El formulario usa Formspree (`mlgqlvwg`) y permite contactar por email, LinkedIn o WhatsApp. Las pruebas del formulario deben interceptar la red para evitar enviar mensajes reales.

## Analítica opcional

Copia `.env.example` a `.env.local` y configura tu ID de sitio y la URL HTTPS de tu script de Umami. Sin esos valores no se carga ningún proveedor de analítica. Los eventos preparados son:

- `cv_download`
- `contact_submit` (solo tras respuesta exitosa)
- `project_code_click` (identificador del proyecto)
- `project_demo_click` (para demos futuras)
- `linkedin_click`

No se envían nombres, correos ni mensajes al proveedor de analítica. Para depuración local se emite `portfolio:analytics` en `window`, con el nombre del evento y sus propiedades.

## CV, imágenes y fuentes

El CV se regenera desde los datos del sitio con `scripts/generate-cv.py` (Python con ReportLab). Al cambiarlo, comprueba que siga teniendo una página, extrae su texto y revisa el render.

Consulta `docs/image-prompts.md` para los prompts y la procedencia de las imágenes generadas. Las fuentes se alojan en `public/fonts` con sus licencias OFL.


## Idiomas

La compilación genera `/es/`, `/en/`, `/fr/` y `/pt/` con HTML, títulos, descripciones, canonical, `lang`, JSON-LD y enlaces `hreflang` propios. El sitemap incluye las cuatro versiones y la entrada general como `x-default`.

El orden de selección es: enlace explícito → elección manual guardada → primer idioma del navegador que tenga traducción → inglés. En `/` y `/index.html`, un script en el encabezado elige el destino antes de mostrar el contenido. Los enlaces explícitos nunca cambian de idioma automáticamente. Se conservan parámetros y sección al navegar entre idiomas.

El selector de la cabecera está disponible en móvil y escritorio. Guarda la elección manual en `localStorage` con la clave `portfolio.language`; si el almacenamiento está bloqueado, el selector y la detección del navegador siguen funcionando. No se usa la IP ni se hacen solicitudes a servicios de geolocalización o traducción.

- `src/i18n/locale.js`: prioridades, resolución de variantes regionales y script de entrada.
- `src/i18n/messages.json`: traducciones revisadas a inglés, francés y portugués; el texto español funciona como clave.
- `src/i18n/LanguageProvider.jsx`: contexto compartido para interfaz y datos.
- `src/i18n/metadata.js`: URLs y metadatos de cada idioma.
- `tests/locale.test.mjs`: prioridad, privacidad del almacenamiento, idiomas alternativos y metadatos.

El portugués usa redacción orientada a Brasil y acepta tanto `pt-BR` como `pt-PT` al detectar preferencias. Las traducciones del sitio no añaden idiomas al perfil profesional: este sigue indicando español nativo e inglés B1. Los nombres oficiales de cursos y productos se conservan. Los textos dentro de las imágenes son parte de las recreaciones del proyecto. El CV PDF está en español y sus botones lo indican en las otras versiones.

Sin JavaScript, cada URL explícita muestra su HTML traducido y el selector permite navegar mediante enlaces normales. La entrada general muestra inglés y ofrece los cuatro idiomas; la selección automática requiere JavaScript.
