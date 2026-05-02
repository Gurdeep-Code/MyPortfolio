import { Reveal, SectionHeading } from "./Reveal";
import { Layout, Server, Wrench, Database, Users } from "lucide-react";

const groups = [
  {
    icon: Layout,
    title: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Zustand", "Redux Toolkit", "TanStack Query", "React Hook Form", "PWA", "Web Workers"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Express.js", "Microservices", "REST APIs", "WebRTC", "Socket.IO", "Redis", "AWS SQS", "AWS Lambda", "AWS Amplify"],
  },
  {
    icon: Database,
    title: "Database",
    items: ["MongoDB", "Redis"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git & GitHub", "CI/CD", "Webpack", "NPM", "Jira"],
  },
  {
    icon: Users,
    title: "Leadership",
    items: ["Team Leadership", "Code Reviews", "Mentoring", "Cross-functional", "Tech Docs"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="container mx-auto px-6 py-28">
      <SectionHeading
        number="02"
        title="Skills & Toolbox"
        subtitle="A curated stack honed across enterprise, EdTech, and government-scale platforms."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.05}>
            <div className="group glow-border h-full rounded-xl bg-card/50 p-6 transition-all hover:bg-card hover:-translate-y-1 hover:shadow-card">
              <div className="flex items-center gap-3 mb-4">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <g.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs font-mono text-muted-foreground"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
