import { Brain, Code, Microchip } from "lucide-react";
import { aboutInfo } from "@/data/portfolio-data";

const iconMap = {
  brain: Brain,
  code: Code,
  microchip: Microchip
};

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="about-title">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary/50 rounded-xl p-8 mb-8">
            {aboutInfo.description.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-muted-foreground leading-relaxed mb-6 last:mb-0"
                data-testid={`about-description-${index}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutInfo.specializations.map((spec, index) => {
              const IconComponent = iconMap[spec.icon as keyof typeof iconMap];
              return (
                <div key={index} className="text-center" data-testid={`specialization-${spec.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="text-primary h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{spec.title}</h3>
                  <p className="text-muted-foreground text-sm">{spec.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
