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
    id: 3,
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
