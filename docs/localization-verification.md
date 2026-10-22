# Verificación de idiomas

Verificación local de las versiones española, inglesa, francesa y portuguesa, 21/10/2026. Estas comprobaciones no publican cambios en el hosting.

- `/es/`, `/en/`, `/fr/` y `/pt/`: HTML estático traducido y render correcto con JavaScript desactivado.
- Las cuatro versiones se hidratan sin errores de React ni errores de ejecución.
- Anchos 320, 390, 768, 1024 y 1440 px: selector visible y sin desbordamiento horizontal en los cuatro idiomas.
- Diez escenarios de navegador: español colombiano, inglés estadounidense, francés, portugués brasileño y europeo, idiomas sin traducción, primera preferencia compatible, elección guardada, preferencia inválida y almacenamiento bloqueado.
- Un enlace explícito conserva su idioma aunque la elección guardada y el navegador indiquen otro.
- Cambiar con el selector guarda la elección manual y conserva parámetros y sección. Volver a `/` utiliza la elección guardada.
- El selector se opera con teclado y se cierra con Escape. Funciona junto al menú móvil.
- Proyectos, casos de estudio, arquitectura, metadatos y etiquetas accesibles revisados en los cuatro idiomas.
- Formularios probados en cada idioma con respuesta de éxito simulada. No se enviaron mensajes reales.
- Axe: cero infracciones WCAG A/AA automatizadas detectadas en cada versión.
- Canonical, `lang`, JSON-LD, cuatro alternativas `hreflang` y `x-default` comprobados.
- `npm test`, `npm run lint` y `npm run build`: correctos.

La detección se basa en las preferencias del navegador; no se consultan datos de IP. La disponibilidad de una traducción no implica que el autor hable ese idioma. El PDF descargable se identifica como español.
