import { Reveal, SectionHeading } from "./Reveal";
import { Briefcase } from "lucide-react";

const roles = [
  {
    company: "ADDA EDUCATION",
    role: "Software Development Engineer - 1",
    period: "Mar 2025 — Present",
    location: "Gurugram, Haryana",
    bullets: [
      "Designed an in-house SSO solution for cross-platform authentication.",
      "Architected a Micro Frontend ecosystem using Next.js & Tailwind CSS.",
      "Boosted frontend performance by 50% via code-splitting, memoization & reusable patterns.",
      "Built a modular CMS module, eliminating redundant development cycles.",
      "Shipped a dynamic form generator — reduced new feature cycle by 30%.",
      "Optimized User Microservice APIs achieving a 70% reduction in average response time.",
    ],
  },
  {
    company: "QUICKTOUCH TECHNOLOGIES",
    role: "Frontend Developer",
    period: "Apr 2024 — Mar 2025",
    location: "New Delhi",
    bullets: [
      "Architected onboarding & admin portal with ERP provisioning, billing & app manager.",
      "Implemented RBAC for multi-tier user management.",
      "Built reusable export functionality powered by Web Workers.",
      "Scaled platform to 3,500+ schools and 40k+ students.",
      "Led a 3-person frontend team and mentored backend devs on secure payment APIs.",
    ],
  },
  {
    company: "MINDROPS",
    role: "Software Developer",
    period: "May 2022 — Apr 2024",
    location: "New Delhi",
    bullets: [
      "Built Student/Parent panel with fee payments, notifications & academic reports.",
      "Supervised a 2-person team building a visitor management system.",
      "Created reusable data tables, media uploader & dynamic form builder.",
      "Developed a PWA with offline-first architecture, background sync & installability.",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="container mx-auto px-6 pt-24 pb-16">
      <SectionHeading
        number="02"
        title="Experience"
        subtitle="Three companies. Real impact at every step."
      />

      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

        <div className="space-y-12">
          {roles.map((r, i) => (
            <Reveal key={r.company} delay={i * 0.05}>
              <div className="relative md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] md:gap-10">
                <div className="absolute left-4 -translate-x-1/2 top-2 grid h-8 w-8 place-items-center rounded-full bg-background border border-primary shadow-neon">
                  <Briefcase className="h-3.5 w-3.5 text-primary" />
                </div>

                <div className="pl-14 md:pl-14">
                  <div className="font-mono text-xs text-primary">{r.period}</div>
                  <h3 className="mt-1 font-display text-xl font-semibold">{r.role}</h3>
                  <div className="text-muted-foreground">{r.company} · {r.location}</div>
                </div>

                <div className="pl-14 md:pl-0 mt-3 md:mt-0">
                  <ul className="glow-border rounded-xl bg-card/50 p-5 space-y-2 text-sm text-muted-foreground">
                    {r.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
