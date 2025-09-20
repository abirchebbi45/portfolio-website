import { Mail, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export default function HeroSection() {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navHeight = 80;
      const targetPosition = contactSection.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const navHeight = 80;
      const targetPosition = projectsSection.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-background to-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="hero-name">
            {personalInfo.name}
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-6" data-testid="hero-title">
            {personalInfo.title}
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="hero-summary">
            {personalInfo.summary}
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={handleContactClick}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              data-testid="button-get-in-touch"
            >
              Get In Touch
            </button>
            <button
              onClick={handleProjectsClick}
              className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-secondary transition-colors"
              data-testid="button-view-projects"
            >
              View Projects
            </button>
          </div>
          <div className="flex justify-center space-x-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-github"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-linkedin"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-email"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
