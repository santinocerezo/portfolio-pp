import { projects } from "./data/projects";
import { profile } from "./data/profile";
import ProjectCard from "./components/ProjectCard";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import { useTheme } from "./context/ThemeContext";
import { useTypewriter } from "./hooks/useTypewriter";
import "./App.css";

const typewriterTexts = [
  "Desarrollador Full Stack",
  "Apasionado por la Ciberseguridad",
  "Analista de Datos",
  "Team Leader",
];

export default function App() {
  const { theme, toggle } = useTheme();
  const typed = useTypewriter(typewriterTexts);

  return (
    <div className="page">
      <nav className="navbar">
        <span className="nav-logo">SC</span>
        <button className="theme-toggle" onClick={toggle} aria-label="Cambiar tema">
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </nav>

      <header className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <p className="hero-label">Portafolio</p>
          <h1 className="hero-title">{profile.name}</h1>
          <p className="hero-typed">
            {typed}<span className="cursor">|</span>
          </p>
          <p className="hero-sub">{profile.age} años · {profile.subtitle}</p>
          <div className="hero-actions">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              Contactame
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      <main className="content">
        <AboutSection />
        <ExperienceSection />

        <section className="projects-section">
          <div className="section-header">
            <h2 className="section-title">Proyectos</h2>
            <span className="count">{projects.length} en total</span>
          </div>
          <div className="card-list">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <EducationSection />
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {profile.name} · {profile.email}</p>
      </footer>
    </div>
  );
}
