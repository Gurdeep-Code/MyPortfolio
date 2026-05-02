import { Reveal, SectionHeading } from "./Reveal";
import { GraduationCap } from "lucide-react";

const edu = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Chandigarh University, Chandigarh",
    year: "2021 – 2023",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Guru Gobind Singh Indraprastha University, Delhi",
    year: "2018 – 2021",
  },
];

export const Education = () => (
  <section id="education" className="container mx-auto px-6 py-20">
    <SectionHeading number="05" title="Education" />
    <div className="grid gap-5 md:grid-cols-2">
      {edu.map((e, i) => (
        <Reveal key={e.degree} delay={i * 0.05}>
          <div className="glow-border h-full rounded-xl bg-card/50 p-6 flex gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
              <GraduationCap className="h-6 w-6" />
            </span>
            <div>
              <div className="font-mono text-xs text-primary">{e.year}</div>
              <h3 className="mt-1 font-display text-lg font-semibold">{e.degree}</h3>
              <p className="text-sm text-muted-foreground">{e.school}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
