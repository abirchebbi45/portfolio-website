import { Code, Layers, Database, Wrench, Brain, Monitor } from "lucide-react";
import { skillCategories } from "@/data/portfolio-data";

const iconMap = {
  code: Code,
  "layer-group": Layers,
  database: Database,
  tools: Wrench,
  brain: Brain,
  desktop: Monitor
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="skills-title">
            Skills
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            return (
              <div
                key={category.id}
                className="bg-background rounded-xl p-6"
                data-testid={`skill-category-${category.id}`}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 rounded-full p-2 mr-3">
                    <IconComponent className="text-primary h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground" data-testid={`skill-category-title-${category.id}`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="skill-tag bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      data-testid={`skill-${category.id}-${index}`}
                    >
                      {skill}
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
