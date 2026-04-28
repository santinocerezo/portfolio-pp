export const projects = [
  {
    id: 1,
    name: "Sistema Logístico STN",
    year: 2024,
    description:
      "Plataforma de gestión logística integral construida con React + Vite en el frontend y Node.js + Express en el backend. Incluye autenticación JWT con refresh tokens, roles de usuario, seguimiento de envíos en tiempo real vía Socket.io, panel de administración, rate limiting, encriptación AES-256-GCM y base de datos PostgreSQL. Deployado en Railway como servicio único.",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Socket.io", "JWT", "TypeScript", "Tailwind CSS"],
    url: "https://stn-logistics-web-production.up.railway.app",
    github: "https://github.com/santinocerezo/sistema_logistico_stn",
    category: "Full Stack",
  },
  {
    id: 2,
    name: "GOADs — Funnel de Conversión",
    year: 2026,
    description:
      "Plataforma full stack que implementa un funnel de venta completo para un infoproducto de Marketing Digital: landing → checkout → upsell → downsell → acceso. Incluye captura de leads con tracking de UTMs, motor propio de A/B testing por variante asignada por sesión, integración con Stripe (modo test) y webhook handler, emails transaccionales con Resend, eventos a Meta Pixel y GA4 (PageView, Lead, InitiateCheckout, Purchase) y panel de admin con JWT que muestra KPIs, embudo y breakdown por variante. Frontend React + Vite + Tailwind, backend Node + Express + PostgreSQL, deploy en Railway vía Docker.",
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "Stripe", "JWT", "Docker"],
    url: "https://goads-server-production-32b7.up.railway.app",
    github: "https://github.com/santinocerezo/Goads",
    category: "Full Stack",
  },
  {
    id: 3,
    name: "Búsqueda de Clientes (Demo)",
    year: 2026,
    description:
      "Herramienta de prospección comercial: identifica negocios locales sin sitio web pero con teléfono, los muestra en un mapa interactivo y permite gestionarlos como pipeline (contactado, interesado, cliente, descartado) con notas persistentes. Esta es la demo pública con 500 negocios ficticios — el mapa usa Leaflet + OpenStreetMap y el estado se guarda en el browser (localStorage). La versión de producción (privada) scrapea negocios reales con Google Places API y usa FastAPI + SQLite + Google Maps.",
    technologies: ["React", "Leaflet", "OpenStreetMap", "Python", "HTML5", "CSS3"],
    url: "https://buscador-clientes-demo-pp-production.up.railway.app",
    github: "https://github.com/santinocerezo/buscador-clientes-demo-pp",
    category: "Frontend / Demo",
  },
  {
    id: 4,
    name: "Portfolio Personal",
    year: 2026,
    description:
      "Este sitio. Portfolio con navegación tipo app (sidebar fijo + vistas que se intercambian sin scroll gracias a react-router), estética minimal dark y tipografía con carácter. Construido con React + Vite, deployado en Railway.",
    technologies: ["React", "Vite", "React Router", "CSS Modules"],
    url: "https://portfolio-pp-production.up.railway.app",
    github: "https://github.com/santinocerezo/portfolio-pp",
    category: "Frontend",
  },
  {
    id: 5,
    name: "Neon Slither",
    year: 2025,
    description:
      "Clon de Slither.io con estética neon construido con HTML5 Canvas y vanilla JS. Incluye 9 bots con IA reactiva, historial de scores por apodo sin contraseña, leaderboard global en tiempo real vía Socket.io y soporte móvil con joystick virtual. Optimizado con viewport culling para alto rendimiento. Persistencia en PostgreSQL.",
    technologies: ["Node.js", "Socket.io", "HTML5 Canvas", "PostgreSQL", "Express.js", "Vanilla JS"],
    url: "https://slither-pp-production.up.railway.app",
    github: "https://github.com/santinocerezo/slither-pp",
    category: "Game / Full Stack",
  },
  {
    id: 6,
    name: "Tetris Neon Edition",
    year: 2025,
    description:
      "Tetris clásico en el navegador con estética neon construido con HTML5 Canvas y vanilla JS. Incluye sistema de niveles, historial de mejores partidas por apodo, leaderboard en tiempo real vía Socket.io y controles táctiles para móvil (swipe, doble tap para hard drop). Persistencia en PostgreSQL.",
    technologies: ["Node.js", "Socket.io", "HTML5 Canvas", "PostgreSQL", "Express.js", "Vanilla JS"],
    url: "https://tetris-pp-production.up.railway.app",
    github: "https://github.com/santinocerezo/tetris-pp",
    category: "Game / Full Stack",
  },
];
