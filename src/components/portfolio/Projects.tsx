import { Reveal, SectionHeading } from "./Reveal";
import { ProjectCard, type ProjectCardProps } from "./ProjectCard";
import projectSample1 from "@/assets/project-sample-1.png";

const projects: ProjectCardProps[] = [
  {
    title: "CSC Bal Vidyalaya",
    tagline: "Government of India flagship EdTech initiative",
    description:
      "Tech-enabled preschool education powered by an IIT Delhi curriculum. Built ERP-integrated workflows including a Web Worker-based export pipeline.",
    metric: "3,500+ centers across India",
    category: "Government · ERP",
    tech: ["React.js", "Material UI", "jsPDF", "SheetJS", "Web Workers"],
    images: [projectSample1, projectSample1, projectSample1],
  },
  {
    title: "Vein India",
    tagline: "Multi-tenant recruitment ecosystem",
    description:
      "High-performance dashboards for super admins, companies & candidates with intelligent matching algorithms bridging job seekers and corporates.",
    metric: "Multi-tenant SaaS architecture",
    category: "Recruitment · SaaS",
    tech: ["Next.js", "React.js", "Tailwind CSS", "Shadcn"],
  },
  {
    title: "Optimus Assessment",
    tagline: "Placement-prep assessment engine",
    description:
      "MCQ tests, coding challenges and analytics. Designed core test execution, evaluation and progress tracking flows.",
    category: "Assessments",
    tech: ["React.js", "Node.js", "MongoDB", "Material UI"],
  },
  {
    title: "Interactive Lead Generation Chatbot",
    tagline: "Conversational lead capture for higher conversion",
    description:
      "Developed a custom, chat-like lead form designed to increase user engagement. The system captures user inquiries in real-time and uses an API integration to store all submitted data directly into a Google Sheet for seamless lead management.",
    category: "Freelance · Lead Gen",
    tech: ["React.js", "JavaScript", "Google Sheets API", "Responsive CSS"],
    url: "https://airhostessinstitute.com/admission-chat/",
  },
  {
    title: "Prepinsta Prime",
    tagline: "OTT-style EdTech subscription platform",
    description:
      "200+ courses spanning upskilling, coding & placement preparation. Architected the subscriber experience serving end-to-end career development for a massive paying audience.",
    metric: "300,000+ paid subscribers",
    category: "EdTech · Production",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Material UI"],
    // featured: true,
  },
  {
    title: "Quick Campus",
    tagline: "School ERP platform",
    description:
      "A comprehensive School ERP (Enterprise Resource Planning) platform designed to digitize school administration. The system centralizes critical operations including student attendance, fee management, academic reporting, and visitor tracking, providing a unified dashboard for administrators, teachers, and parents to improve institutional efficiency.",
    category: "ERP",
    tech: ["React.js", "Material UI"],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="container mx-auto px-6 pt-24 pb-16">
      <SectionHeading
        number="03"
        title="Projects"
        subtitle="Platforms shipped to real users at real scale."
      />
      <div className="grid gap-6 lg:grid-cols-2 auto-rows-fr">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05} className={`h-full ${p.featured ? "lg:col-span-2" : ""}`}>
            <ProjectCard {...p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
};
