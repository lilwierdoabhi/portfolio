import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedProject]);

  if (selectedProject !== null) {
    return (
      <ProjectDetail 
        projectId={selectedProject} 
        onBack={() => setSelectedProject(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#fdfcfa]">
      <Navbar />
      <ScrollToTop />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Services />
      </div>
      <div id="projects">
        <Projects onProjectClick={setSelectedProject} />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
