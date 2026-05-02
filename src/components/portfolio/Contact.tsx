import { useState } from "react";
import { Reveal, SectionHeading } from "./Reveal";
import { Copy, Check, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import { toast } from "sonner";

const EMAIL = "s.gurdeep9986@gmail.com";
const PHONE = "+91 9560513039";

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — please copy manually");
    }
  };

  return (
    <section id="contact" className="container mx-auto px-6 py-28">
      <SectionHeading
        number="06"
        title="Let's build something."
        subtitle="Open to senior frontend, full-stack and engineering roles. The fastest way to reach me is email."
      />

      <Reveal>
        <div className="glow-border rounded-2xl bg-card/60 p-8 md:p-12 text-center shadow-card">
          <div className="relative z-10">
            <Mail className="mx-auto h-10 w-10 text-primary pointer-events-none" />
            <h3 className="mt-4 font-display text-2xl md:text-3xl font-semibold">Drop me a line</h3>

            <button
              type="button"
              onClick={copyEmail}
              className="group mt-6 inline-flex items-center gap-3 rounded-lg border border-border bg-background/60 px-5 py-3 font-mono text-sm md:text-base hover:border-primary/60 transition-colors"
              aria-label="Copy email address"
            >
              <span className="text-foreground">{EMAIL}</span>
              <span className="grid h-7 w-7 place-items-center rounded-md bg-primary/10 text-primary">
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              </span>
            </button>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="relative z-10 inline-flex cursor-pointer items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-sm text-primary-foreground shadow-neon hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all"
              >
                <Mail className="h-4 w-4 shrink-0 pointer-events-none" aria-hidden /> Send Email
              </a>
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm hover:border-primary/50 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
              <a
                href="https://github.com/Gurdeep-Code"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm hover:border-primary/50 hover:text-primary transition-colors"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/gurdeep-9999867846-dev"
                target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm hover:border-primary/50 hover:text-primary transition-colors"
              >
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      <footer className="mt-20 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-border/60 pt-8 font-mono text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Gurdeep Singh. Crafted with React + Framer Motion.</div>
        <div>Designed & built in <span className="text-primary">/dev</span></div>
      </footer>
    </section>
  );
};
