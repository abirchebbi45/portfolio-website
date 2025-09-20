import { Cloud, Computer } from "lucide-react";
import { certifications } from "@/data/portfolio-data";

const iconMap = {
  aws: Cloud,
  microsoft: Computer
};

const colorMap = {
  orange: "bg-orange-100 text-orange-600",
  blue: "bg-blue-100 text-blue-600"
};

export default function CertificationsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="certifications-title">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => {
            const IconComponent = iconMap[cert.icon as keyof typeof iconMap];
            const colorClass = colorMap[cert.color as keyof typeof colorMap];
            
            return (
              <div
                key={cert.id}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                data-testid={`certification-card-${cert.id}`}
              >
                <div className="flex items-center mb-3">
                  <div className={`rounded-full p-2 mr-3 ${colorClass}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground" data-testid={`certification-title-${cert.id}`}>
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`certification-subtitle-${cert.id}`}>
                      {cert.subtitle}
                    </p>
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
