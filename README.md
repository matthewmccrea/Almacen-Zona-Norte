# Almacén Zona Norte

Landing de una sola página para un almacén de productos naturales y a granel en zona norte del GBA (Olivos, Vicente López). Sitio estático, sin build, sin dependencias — HTML, CSS y JS vanilla.

## Estructura

```
.
├── index.html       # Markup de la página
├── styles.css       # Todos los estilos
├── script.js        # Pestañas del catálogo + armado de links de WhatsApp/Maps
├── config.js         # Datos del negocio (teléfono, dirección, semana destacada)
├── catalogo.js       # Productos por categoría (A granel / Sin TACC / Almacén)
└── img/
    ├── hero.webp
    └── destacado-1.webp
```

## Correrlo en local

No hace falta build ni instalar nada. Alcanza con servir la carpeta:

```bash
npx serve .
```

o directamente abrir `index.html` con doble clic.

## Editar contenido

- **Teléfono, dirección, semana destacada** → `config.js`
- **Productos del catálogo** (por pestaña) → `catalogo.js`
- **Textos de la página, horarios, destacados de la semana** → directo en `index.html` (es un sitio sin build, así que el texto vive ahí)

Si cambiás un valor en `config.js`, actualizá también el texto equivalente en `index.html` — no hay nada que los sincronice automáticamente.

## Pendiente

- Fotos reales del local y de los productos (hoy hay 2 destacados de "Esta semana" sin foto, marcados como placeholder).
- Confirmar teléfono, dirección y zona de envío definitivos (los actuales son de ejemplo).

## Deploy

Sitio 100% estático — se publica tal cual en Netlify, Vercel, Cloudflare Pages o GitHub Pages. Sin variables de entorno ni configuración de build.
