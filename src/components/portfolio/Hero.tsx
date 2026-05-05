import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden />

      <div className="container relative mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-mono text-primary mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight"
          >
            Hello, I'm <span className="text-gradient">Gurdeep Singh</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground"
          >
            A Software Development Engineer with{" "}
            <span className="text-primary font-mono">4 years</span> architecting
            high-performance React, Next.js & Node.js platforms serving hundreds
            of thousands of users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-mono text-sm font-medium text-primary-foreground shadow-neon transition-all hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)]"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://github.com/Gurdeep-Code"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-mono text-sm hover:border-primary/50 hover:text-primary transition-colors"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gurdeep-9999867846-dev"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-mono text-sm hover:border-primary/50 hover:text-primary transition-colors"
            >
              <LinkedinIcon className="h-4 w-4" /> LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="hidden lg:block lg:col-span-4"
        >
          <div className="glow-border rounded-xl bg-card/60 p-6 font-mono text-sm shadow-card">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
              <span className="ml-3 text-xs text-muted-foreground">
                ~/gurdeep/profile.ts
              </span>
            </div>
            <pre className="text-xs leading-relaxed text-muted-foreground">
              <span className="text-primary">const</span>{" "}
              <span className="text-foreground">engineer</span> = {"{"}
              {"\n  "}name:{" "}
              <span className="text-emerald-400">'Gurdeep Singh'</span>,{"\n  "}
              role: <span className="text-emerald-400">'SDE-1'</span>,{"\n  "}
              stack: [<span className="text-emerald-400">'React.js'</span>,
              {"\n          "}
              <span className="text-emerald-400">'Next.js'</span>,
              {"\n          "}
              <span className="text-emerald-400">'Node.js'</span>,
              {"\n          "}
              <span className="text-emerald-400">'JavaScript'</span>,
              {"\n          "}
              <span className="text-emerald-400">'TypeScript'</span>,{"\n  "}
              focus: <span className="text-emerald-400">'performance'</span>,
              {"\n  "}Experience: <span className="text-emerald-400">'4'</span>,
              {"\n  "}shipping: <span className="text-primary">true</span>,
              {"\n"}
              {"}"};
            </pre>
            <div className="mt-4 flex items-center gap-2 text-xs text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Crafted with intent.
            </div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
};
