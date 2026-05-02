import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export const Reveal = ({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SectionHeading = ({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) => (
  <Reveal className="mb-12">
    <div className="font-mono text-sm text-primary mb-2">{number}.</div>
    <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
    {subtitle && (
      <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>
    )}
    <div className="mt-6 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
  </Reveal>
);
