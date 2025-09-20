import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="py-8 bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground" data-testid="footer-copyright">
              &copy; 2025 {personalInfo.name}. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-link-github"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-link-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
              data-testid="footer-link-email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <div className="flex items-center space-x-4 text-muted-foreground text-sm">
              <div className="flex items-center" data-testid="footer-location">
                <MapPin className="h-4 w-4 mr-1" />
                {personalInfo.location}
              </div>
              <div className="flex items-center" data-testid="footer-phone">
                <Phone className="h-4 w-4 mr-1" />
                {personalInfo.phone}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
