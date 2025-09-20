export interface Experience {
  id: string;
  title: string;
  company: string;
  type: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  subtitle: string;
  provider: string;
  icon: string;
  color: string;
}

export const personalInfo = {
  name: "Abir Chebbi",
  title: "Software Engineer | AI & Machine Learning Specialist",
  location: "Sousse, Tunisia",
  phone: "(+216) 29855993",
  email: "abirc240@gmail.com",
  github: "https://github.com/abirchebbi45",
  linkedin: "https://linkedin.com/in/abir-chebbi-049119216/",
  summary: "Building innovative AI-driven solutions and scalable software applications with expertise in machine learning, full-stack development, and embedded systems."
};

export const aboutInfo = {
  description: [
    "Recent Software Engineering graduate with strong expertise in software development, artificial intelligence, and data-driven solutions. I specialize in building end-to-end applications across AI, web, and embedded systems.",
    "My experience spans from developing maritime surveillance systems with computer vision to creating AI-powered chatbots and voice transcription applications. I'm passionate about designing scalable architectures, integrating advanced machine learning models, and delivering innovative solutions in multidisciplinary environments."
  ],
  specializations: [
    {
      icon: "brain",
      title: "AI & Machine Learning",
      description: "Specializing in computer vision, NLP, and deep learning solutions"
    },
    {
      icon: "code",
      title: "Full-Stack Development",
      description: "Building scalable web applications with modern technologies"
    },
    {
      icon: "microchip",
      title: "Embedded Systems",
      description: "Developing real-time systems and IoT solutions"
    }
  ]
};

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Voice-based Transcription and Speaker Identification Web App",
    company: "Upwork",
    type: "Freelance",
    period: "Jun 2025 - Present",
    description: "Collaborated with a freelancer to develop a web application for meeting transcription and speaker identification. Integrated Pyannote AI for diarization and Whisper for high-accuracy speech-to-text transcription.",
    technologies: ["Python", "FastAPI", "React", "NLP", "Speech Recognition"]
  },
  {
    id: "2",
    title: "Sailor Vision AI: Embedded Vision Module for Maritime Surveillance",
    company: "AVIONAV",
    type: "Graduation Project",
    period: "Feb 2025 - Sep 2025",
    description: "Developed and integrated Sailor Vision AI, a comprehensive maritime surveillance desktop application for the SailorTech drone, featuring intelligent and autonomous vision module leveraging advanced AI for real-time detection of floating objects.",
    technologies: ["Python", "YOLOv8", "NVIDIA Orin", "ROS", "Computer Vision"]
  },
  {
    id: "3",
    title: "AI Model Training for Text Extraction & Compliance Analysis",
    company: "Upwork",
    type: "Freelance",
    period: "Mar 2025 - Apr 2025",
    description: "Designed and implemented compliance analysis pipelines with OCR-based text extraction for PDF/DOCX documents and integrated BERT-based compliance model trained on ISO 27001 and PCI DSS datasets.",
    technologies: ["Python", "Flask", "OCR", "BERT", "NLP"]
  },
  {
    id: "4",
    title: "E-commerce Platform Development",
    company: "Maison du Web",
    type: "Internship",
    period: "Sep 2024 - Oct 2024",
    description: "Developed an e-commerce platform using Laravel, Filament and Livewire. Designed and implemented the admin panel and customer portal for enhanced user experience.",
    technologies: ["PHP", "Laravel", "Livewire", "MySQL", "Tailwind"]
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Skin Cancer Detection with Deep Learning",
    description: "Advanced computer vision system using deep learning models for automated skin cancer detection and classification.",
    technologies: ["PyTorch", "EfficientNet", "Computer Vision"],
    icon: "microscope"
  },
  {
    id: "2",
    title: "Conversational Chatbot with Reinforcement Learning",
    description: "Intelligent chatbot system based on Seq2Seq model with attention mechanism and reinforcement learning optimization.",
    technologies: ["TensorFlow", "LSTM", "Reinforcement Learning"],
    icon: "comments"
  },
  {
    id: "3",
    title: "School Guidance System",
    description: "AI-powered recommendation system to help students make informed decisions about their academic and career paths.",
    technologies: ["Python", "Scikit-Learn", "FastAPI"],
    icon: "graduation-cap"
  },
  {
    id: "4",
    title: "Media Conversion & Compression API",
    description: "High-performance API for image and video conversion, compression, and format optimization using modern codecs.",
    technologies: ["Flask", "FFmpeg", "WebP"],
    icon: "image"
  }
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Software Engineering Degree",
    institution: "Higher Institute of Information and Communication Sciences and Technologies",
    period: "Sep 2022 - Sep 2025",
    icon: "laptop-code"
  },
  {
    id: "2",
    degree: "Information Systems Development Degree",
    institution: "Higher Institute of Technological Studies",
    period: "Sep 2019 - Jun 2022",
    icon: "database"
  },
  {
    id: "3",
    degree: "Baccalaureate in Experimental Sciences",
    institution: "Bir El Haffey High School",
    period: "Jun 2018 - Jun 2019",
    icon: "flask"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "1",
    title: "Programming Languages",
    icon: "code",
    skills: ["Python", "Java", "C/C++", "C#", "JavaScript", "PHP", "Dart"]
  },
  {
    id: "2",
    title: "Frameworks & Libraries",
    icon: "layer-group",
    skills: ["TensorFlow", "PyTorch", "React", "Flask", "FastAPI", "Laravel", "Spring Boot", "Flutter"]
  },
  {
    id: "3",
    title: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"]
  },
  {
    id: "4",
    title: "Tools & DevOps",
    icon: "tools",
    skills: ["Git", "Docker", "GitHub Actions", "Jira"]
  },
  {
    id: "5",
    title: "AI & Machine Learning",
    icon: "brain",
    skills: ["Computer Vision", "NLP", "Deep Learning", "YOLO", "BERT"]
  },
  {
    id: "6",
    title: "Operating Systems",
    icon: "desktop",
    skills: ["Windows", "Ubuntu", "Linux"]
  }
];

export const certifications: Certification[] = [
  {
    id: "1",
    title: "AWS Academy Graduate",
    subtitle: "Cloud Foundations",
    provider: "AWS",
    icon: "aws",
    color: "orange"
  },
  {
    id: "2",
    title: "AWS Academy Graduate",
    subtitle: "Machine Learning Foundations",
    provider: "AWS",
    icon: "aws",
    color: "orange"
  },
  {
    id: "3",
    title: "Microsoft Technology Associate",
    subtitle: "HTML & CSS Programming",
    provider: "Microsoft",
    icon: "microsoft",
    color: "blue"
  }
];
