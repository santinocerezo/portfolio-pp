# Portfolio — Santino Cerezo

Mi portfolio personal. Una SPA con estilo minimal-dark donde muestro mis proyectos, experiencia, formación y formas de contacto. Construido con React 19 + Vite, deployado en Railway.

> **En vivo:** https://portfolio-pp-production.up.railway.app
> **Repositorio:** https://github.com/santinocerezo/portfolio-pp

---

## Tabla de contenidos

- [Qué hace](#qué-hace)
- [Stack](#stack)
- [Estructura del repo](#estructura-del-repo)
- [Cómo correrlo localmente](#cómo-correrlo-localmente)
- [Cómo editar el contenido](#cómo-editar-el-contenido)
- [Decisiones de diseño](#decisiones-de-diseño)

---

## Qué hace

Un portfolio orientado a quien quiera saber:

- **Quién soy** (Home + About) con un efecto máquina de escribir en la presentación.
- **En qué trabajé** (Experience).
- **Qué construí** (Projects) con tarjetas que enlazan a demo + GitHub de cada proyecto.
- **Qué estudié** (Formation).
- **Cómo contactarme** (Contact).

La navegación se siente como una app: sidebar fijo, vistas que se intercambian sin scroll, transiciones suaves. No es un single-page-scroll clásico — cada sección es una ruta de React Router.

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework UI | React 19 |
| Build tool | Vite 8 |
| Routing | React Router 7 (`HashRouter` para que funcione sin config server-side) |
| Estilos | CSS Modules (un `.module.css` por componente) |
| Linting | ESLint 9 (flat config) + plugin React Hooks + plugin React Refresh |
| Deploy | Railway (build estático con Vite, servido directo) |

Sin Tailwind ni librería de UI: estética hecha a mano con CSS Modules para que cada componente sea autocontenido y sin riesgo de colisión de clases.

---

## Estructura del repo

```
portfolio/
├── index.html                  # Entry HTML
├── vite.config.js              # Config mínima de Vite con plugin de React
├── eslint.config.js            # Flat config de ESLint
└── src/
    ├── main.jsx                # Bootstrap de React
    ├── App.jsx                 # Routes top-level
    ├── index.css               # Reset + variables globales
    ├── layouts/
    │   └── SiteLayout.jsx      # Shell con sidebar + <Outlet/> para las vistas
    ├── views/                  # Una vista por ruta
    │   ├── HomeView.jsx
    │   ├── AboutView.jsx
    │   ├── ExperienceView.jsx
    │   ├── ProjectsView.jsx
    │   ├── FormationView.jsx
    │   └── ContactView.jsx
    ├── components/
    │   ├── ProjectCard.jsx     # Card de proyecto en /projects
    │   └── ViewHeader.jsx      # Header común a todas las views
    ├── context/
    │   ├── ThemeContext.jsx    # Provider del tema
    │   ├── themeContextStore.js
    │   └── useTheme.js         # Hook consumidor
    ├── hooks/
    │   └── useTypewriter.js    # Efecto máquina de escribir en el Home
    └── data/                   # Contenido editable
        ├── profile.js          # Datos personales, bio, experiencia, formación
        └── projects.js         # Listado de proyectos del portfolio
```

---

## Cómo correrlo localmente

**Requisitos:** Node 20+.

```bash
git clone https://github.com/santinocerezo/portfolio-pp.git
cd portfolio-pp
npm install
npm run dev          # http://localhost:5173
```

**Build de producción:**

```bash
npm run build
npm run preview      # sirve el build local
```

**Linting:**

```bash
npm run lint
```

---

## Cómo editar el contenido

Toda la data está separada del código:

- **Datos personales, bio, experiencia, formación →** [`src/data/profile.js`](src/data/profile.js)
- **Listado de proyectos →** [`src/data/projects.js`](src/data/projects.js)

Para agregar un proyecto, push a `projects.js`:

```js
{
  id: 7,
  name: "Nombre del proyecto",
  year: 2026,
  description: "Qué hace y con qué stack.",
  technologies: ["React", "Node.js", "..."],
  url: "https://...",
  github: "https://github.com/...",
  category: "Full Stack",
}
```

`ProjectsView` lo renderiza automáticamente como `ProjectCard`.

---

## Decisiones de diseño

- **Una vista por ruta, no scroll infinito.** Da la sensación de app, no de landing. La navegación es instantánea porque el estado del layout (sidebar) no se desmonta.
- **`HashRouter` en lugar de `BrowserRouter`.** Evita tener que configurar el server para fallback a `index.html` en cada ruta. El portfolio es estático, así que no vale la pena montar un nginx con `try_files` solo para tener URLs sin `#`.
- **CSS Modules.** Cada componente tiene su `.module.css` propio. Cero clases globales, cero riesgo de colisión, y el CSS final tiene los nombres hasheados por Vite.
- **Contenido como datos, no como JSX.** `profile.js` y `projects.js` son arrays/objetos. Editar el portfolio es modificar datos, no tocar componentes — más rápido y más prolijo.
- **Hook custom para el typewriter.** En lugar de meter la lógica del efecto dentro del componente Home, vive en `useTypewriter.js`. Es reutilizable y testeable.
- **Theme via context.** Toggle dark/light con un Provider arriba de todo el árbol. El estado del tema persiste en `localStorage` para que sobreviva recargas.
- **React 19 + Vite 8.** Stack actualizado para aprovechar las mejoras recientes de React (compiler, mejoras en `use` / Suspense) sin cargar un framework completo como Next.

---

## Autor

**Santino Cerezo** — [GitHub](https://github.com/santinocerezo) · santinocerezo11@gmail.com
