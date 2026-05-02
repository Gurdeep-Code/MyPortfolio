import { Reveal } from "./Reveal";
import { Gauge, Cpu, Wifi, Zap, FileDown, Download, Eye } from "lucide-react";

const items = [
  { icon: Zap, label: "Frontend Perf", value: "+50%", desc: "via code-splitting & memoization" },
  { icon: Gauge, label: "API Latency", value: "−70%", desc: "User microservice optimization" },
  { icon: Cpu, label: "Web Workers", value: "Heavy compute", desc: "Off-main-thread exports" },
  { icon: Wifi, label: "PWA", value: "Offline-first", desc: "Background sync & install" },
];

const RESUME_FILE_ID = "1EMu_je6NKUpIrFbKra92yjCDc58RGglu";
const RESUME_VIEW_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/view`;
const RESUME_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`;

export const Performance = () => {
  return (
    <section className="container mx-auto px-6 py-20 space-y-12">
      <Reveal>
        <div className="glow-border relative overflow-hidden rounded-2xl bg-card/60 p-8 md:p-10">
          <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" aria-hidden />
          <div className="relative grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
            <div className="grid h-16 w-16 place-items-center rounded-xl border border-primary/40 bg-primary/10 text-primary shadow-neon">
              <FileDown className="h-7 w-7" />
            </div>

            <div>
              <div className="font-mono text-xs text-primary uppercase tracking-wider">// resume</div>
              <h3 className="mt-2 font-display text-2xl md:text-3xl font-bold">
                Grab a copy of my resume
              </h3>
              <p className="mt-2 text-sm md:text-base text-muted-foreground">
                A concise PDF — experience, projects, stack and impact metrics in one page.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href={RESUME_DOWNLOAD_URL}
                download
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-sm text-primary-foreground shadow-neon hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all"
                aria-label="Download resume PDF"
              >
                <Download className="h-4 w-4" /> Download
              </a>
              <a
                href={RESUME_VIEW_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm hover:border-primary/50 hover:text-primary transition-colors"
                aria-label="View resume in a new tab"
              >
                <Eye className="h-4 w-4" /> View
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
