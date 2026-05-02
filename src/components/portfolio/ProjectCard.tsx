import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  metric?: string;
  tech: string[];
  category: string;
  featured?: boolean;
  url?: string;
}

export const ProjectCard = ({
  title,
  tagline,
  description,
  metric,
  tech,
  category,
  featured = false,
  url,
}: ProjectCardProps) => {
  const Wrapper: React.ElementType = url ? motion.a : motion.article;
  const wrapperProps = url
    ? { href: url, target: "_blank", rel: "noreferrer" }
    : {};
  return (
    <Wrapper
      {...wrapperProps}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      className={`glow-border group relative flex h-full flex-col overflow-hidden rounded-2xl bg-card/60 p-6 md:p-8 shadow-card ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="font-mono text-xs text-primary uppercase tracking-wider">{category}</div>
            <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{tagline}</p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-all group-hover:border-primary group-hover:text-primary group-hover:rotate-45">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">{description}</p>

        {metric && (
          <div className="mt-5 inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs font-mono text-primary self-start">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {metric}
          </div>
        )}

        <div className="mt-auto pt-6 flex flex-wrap gap-2">
          {tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-secondary/60 px-2.5 py-1 text-xs font-mono text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Wrapper>

  );
};
