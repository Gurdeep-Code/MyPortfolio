import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50"
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2 font-display font-semibold">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/10 text-primary">
            <Code2 className="h-4 w-4" />
          </span>
          <span className="text-foreground">gurdeep<span className="text-primary">.dev</span></span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm font-mono text-muted-foreground">
          {links.map((l, i) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-primary">
                <span className="text-primary/60 mr-1">0{i + 1}.</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-md border border-primary/40 px-4 py-1.5 text-sm font-mono text-primary hover:bg-primary/10 transition-colors"
        >
          Hire me
        </a>
      </nav>
    </motion.header>
  );
};
