# Next Template

Plantilla minimalista de Next.js enfocada en internacionalización y cambio de tema con una estructura clara lista para escalar. Incluye configuración de Docker y Tailwind CSS 4.

[![Deploy](https://github.com/Ismola/template-next/actions/workflows/deploy.yml/badge.svg)](https://github.com/Ismola/template-next/actions/workflows/deploy.yml)

## Demo

DEMO: <https://next-template.ismola.dev>

## Características

- Next.js 16 (App Router) con React 19 y TypeScript.
- Tailwind CSS 4 con variantes `dark` declaradas en [app/[locale]/globals.css](app/%5Blocale%5D/globals.css).
- Internacionalización básica (es/en) con traducción de slugs para rutas amigables; selección automática desde la URL.
- Selector de idioma y switcher de tema (light/dark/system) con persistencia en `localStorage` y sincronización con `prefers-color-scheme`.
- Redirección inicial al locale por defecto y rutas dinámicas por idioma, incluido ejemplo de página de juego.
- Configuración lista para contenedores vía Docker y Docker Compose.

## Estructura principal

- Página raíz redirige a /es: [app/page.tsx](app/page.tsx).
- Layout por idioma y metadatos: [app/[locale]/layout.tsx](app/%5Blocale%5D/layout.tsx) (inserta script de tema antes de la hidratación).
- Home localizada: [app/[locale]/page.tsx](app/%5Blocale%5D/page.tsx) con CTA hacia el juego.
- Página del juego: [app/[locale]/[game]/page.tsx](app/%5Blocale%5D/%5Bgame%5D/page.tsx) con cabecera reutilizable.
- Componentes comunes: [app/components/Header.tsx](app/components/Header.tsx), [app/components/LanguageSwitcher.tsx](app/components/LanguageSwitcher.tsx), [app/components/ThemeSwitcher.tsx](app/components/ThemeSwitcher.tsx).
- Mensajes de i18n: [messages/es.json](messages/es.json) y [messages/en.json](messages/en.json); configuración en [config/text.ts](config/text.ts) e idiomas definidos en [i18n.config.ts](i18n.config.ts).
- Traducción de slugs y paths: [config/routes.ts](config/routes.ts) genera correspondencia canónica por locale.
- Datos de ejemplo para futuras vistas: [config/info.json](config/info.json).

## Internacionalización

- Locales soportados: `es` (default) y `en` ([i18n.config.ts](i18n.config.ts)).
- `LanguageSwitcher` usa `translatePath` para mantener la ruta activa traduciendo cada segmento según los slugs definidos en los mensajes (`slug.*`).
- Metadatos se derivan de los textos localizados en el layout; la URL siempre incluye el locale como primer segmento.

## Temas

- `ThemeSwitcher` permite elegir `light`, `dark` o `system`, persiste en `localStorage` y aplica la clase `dark` al `<html>`.
- Script inline en el `<head>` (layout) garantiza evitar parpadeos antes de la hidratación.
- Variables CSS en [app/[locale]/globals.css](app/%5Blocale%5D/globals.css) definen fondo y texto para ambos temas.

## Estilos

- Tailwind CSS 4 con import directo en `globals.css` y variante `dark` declarada vía `@custom-variant`.
- Fuente Geist (sans y mono) preconfigurada en el layout.

## Scripts disponibles

- `npm run dev`: entorno de desarrollo.
- `npm run build`: build de producción.
- `npm start`: servir el build.
- `npm run lint`: linting JS/TS con ESLint.
- `npm run lint:css`: linting de CSS con Stylelint.

## Docker

- Construcción y levantado: `docker compose up --build`.
- Dockerfile base para la app y Dockerfile específico para Nginx listos para orquestación.

## Cómo empezar

1) Instala dependencias: `npm install`.
2) Ejecuta el entorno dev: `npm run dev` y abre <http://localhost:3000>.
3) Cambia idioma con el switcher y verifica que las rutas se traduzcan (por ejemplo, `/es/juego` ↔ `/en/game`).
4) Prueba el cambio de tema y que persista al recargar.

## Notas

- No hay almacenamiento de servidor ni base de datos; todo es estático/client-side en este punto.
- Los datos de [config/info.json](config/info.json) son de muestra y pueden integrarse en futuras vistas (líneas de tiempo, etc.).
