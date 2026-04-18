# Portfolio — Santino Cerezo

Portfolio personal. React + Vite, deploy en Railway.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Estructura

- `src/views/` — una vista por ruta (Home, About, Experience, Projects, Formation, Contact)
- `src/layouts/SiteLayout.jsx` — shell con sidebar y navegación
- `src/components/` — `ProjectCard`, `ViewHeader`
- `src/data/` — contenido editable (profile, projects)
- `src/context/ThemeContext.jsx` — toggle dark/light
- `src/hooks/useTypewriter.js` — hook del efecto máquina de escribir

Para actualizar contenido editá `src/data/profile.js` y `src/data/projects.js`.
