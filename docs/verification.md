# Verificación del portafolio

Fecha: 21 de octubre de 2026. Compilación estática local, no medición del dominio publicado.

## Resultado

Lighthouse 13.5.0, emulación móvil, `vite preview`:

| Categoría | Resultado |
| --- | --- |
| Performance | 96 / 100 |
| Accessibility | 100 / 100 |
| Best Practices | 100 / 100 |
| SEO | 100 / 100 |
| FCP | 1,5 s |
| LCP | 2,7 s |
| CLS | 0 |
| TBT | 0 ms |

El LCP todavía supera el objetivo de 2,5 s. La medición local no incluye la latencia ni el comportamiento del hosting público. No es una medición de INP de usuarios reales.

## Comprobaciones

- `npm run lint`: sin errores ni advertencias de ESLint.
- `npm run build`: cliente, renderizado en la compilación y HTML estático completos.
- HTML compilado: cuatro proyectos y formulario presentes sin ejecutar JavaScript.
- Chrome con JavaScript desactivado: encabezado y proyectos visibles.
- React: sin errores de ejecución ni de hidratación en la revisión.
- Anchos 320, 390, 768, 1024 y 1440 px: sin desbordamientos horizontales.
- Axe: cero infracciones detectadas en las reglas WCAG A/AA automatizadas revisadas.
- Menú móvil: apertura, navegación y cierre por Escape con restauración de foco.
- Casos de estudio: apertura, cierre, ciclo de Tab, fondo inerte y recuperación del foco.
- BoviSense: detecciones ilustrativas y selección de etapas de arquitectura funcionales.
- Repositorio hospitalario: sin enlace genérico a GitHub; solicitud de acceso desde el caso de estudio.
- CV: descarga PDF válida, A4, una página y texto seleccionable; render revisado visualmente.
- Imágenes: carga correcta, WebP con variantes responsive y etiquetas de recreación conceptual.
- Movimiento reducido: contenido visible y animación del hero desactivada.
- Contacto: éxito, reinicio, errores de campo y del servidor probados con peticiones interceptadas. No se enviaron mensajes reales.
- Eventos locales: descarga del CV y envío exitoso del formulario comprobados. Umami requiere los valores de `.env.example` para enviar eventos a una cuenta real.

Las comprobaciones automáticas no sustituyen una evaluación completa con lector de pantalla ni mediciones de usuarios reales. El proyecto no se publicó como parte de esta revisión.
