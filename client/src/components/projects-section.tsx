import { Microscope, MessageCircle, GraduationCap, Image } from "lucide-react";
import { projects } from "@/data/portfolio-data";

const iconMap = {
  microscope: Microscope,
  comments: MessageCircle,
  "graduation-cap": GraduationCap,
  image: Image
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="projects-title">
            Academic Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const IconComponent = iconMap[project.icon as keyof typeof iconMap];
            return (
              <div
                key={project.id}
                className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                data-testid={`project-card-${project.id}`}
              >
                <div className="mb-4">
                  <div className="bg-primary/10 rounded-full p-3 w-12 h-12 mb-4 flex items-center justify-center">
                    <IconComponent className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3" data-testid={`project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4" data-testid={`project-description-${project.id}`}>
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      data-testid={`project-tech-${project.id}-${index}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
