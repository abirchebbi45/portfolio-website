import { Code, Database, FlaskConical } from "lucide-react";
import { education } from "@/data/portfolio-data";

const iconMap = {
  "laptop-code": Code,
  database: Database,
  flask: FlaskConical
};

export default function EducationSection() {
  return (
    <section id="education" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="education-title">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="space-y-8">
          {education.map((edu) => {
            const IconComponent = iconMap[edu.icon as keyof typeof iconMap];
            return (
              <div
                key={edu.id}
                className="bg-card rounded-xl p-6 shadow-sm"
                data-testid={`education-card-${edu.id}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`education-degree-${edu.id}`}>
                      {edu.degree}
                    </h3>
                    <p className="text-primary font-medium mb-2" data-testid={`education-institution-${edu.id}`}>
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground" data-testid={`education-period-${edu.id}`}>
                      {edu.period}
                    </p>
                  </div>
                  <div className="bg-primary/10 rounded-full p-3">
                    <IconComponent className="text-primary h-6 w-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
