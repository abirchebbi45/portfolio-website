import { experiences } from "@/data/portfolio-data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="experience-title">
            Experience
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="space-y-8">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="experience-card bg-card rounded-xl p-6 shadow-sm"
              data-testid={`experience-card-${experience.id}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`experience-title-${experience.id}`}>
                    {experience.title}
                  </h3>
                  <p className="text-primary font-medium mb-2" data-testid={`experience-company-${experience.id}`}>
                    {experience.company} | {experience.type}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4" data-testid={`experience-period-${experience.id}`}>
                    {experience.period}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4" data-testid={`experience-description-${experience.id}`}>
                {experience.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="skill-tag bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                    data-testid={`experience-tech-${experience.id}-${index}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
