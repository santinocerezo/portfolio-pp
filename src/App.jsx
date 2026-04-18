import { HashRouter, Routes, Route } from "react-router-dom";
import SiteLayout from "./layouts/SiteLayout";
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import ExperienceView from "./views/ExperienceView";
import ProjectsView from "./views/ProjectsView";
import FormationView from "./views/FormationView";
import ContactView from "./views/ContactView";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomeView />} />
          <Route path="about" element={<AboutView />} />
          <Route path="experience" element={<ExperienceView />} />
          <Route path="projects" element={<ProjectsView />} />
          <Route path="formation" element={<FormationView />} />
          <Route path="contact" element={<ContactView />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
