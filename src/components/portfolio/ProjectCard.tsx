import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useMemo, useRef } from "react";

export interface ProjectCardProps {
  title: string;
  tagline: string;
  description: string;
  metric?: string;
  tech: string[];
  category: string;
  featured?: boolean;
  url?: string;
  images?: string[];
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
  images = [],
}: ProjectCardProps) => {
  const autoplay = useRef(
    Autoplay({
      delay: 2000,
      stopOnInteraction: true,
      stopOnMouseEnter: false,
    }),
  );
  const plugins = useMemo(() => (images.length >= 2 ? [autoplay.current] : []), [images.length]);

  useEffect(() => {
    const el = autoplay.current;
    // ensure it doesn't run while slider is hidden
    el.stop();
  }, []);

  const Wrapper: React.ElementType = url ? motion.a : motion.article;
  const wrapperProps = url
    ? { href: url, target: "_blank", rel: "noreferrer" }
    : {};
  return (
    <Wrapper
      {...wrapperProps}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      onMouseEnter={() => {
        if (images.length >= 2) autoplay.current.play();
      }}
      onMouseLeave={() => autoplay.current.stop()}
      className={`glow-border group relative flex h-full flex-col overflow-hidden rounded-2xl bg-card/60 p-6 md:p-8 shadow-card ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden />

      {images.length > 0 && (
        <div className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 bg-background/75 backdrop-blur-sm" aria-hidden />
          <div className="absolute inset-0 p-4 md:p-6">
            <div className="relative h-full w-full overflow-hidden rounded-xl border border-border/60 bg-background/40">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />

              <div className="pointer-events-auto h-full">
                <Carousel className="h-full" opts={{ loop: true, align: "start" }} plugins={plugins}>
                  <CarouselContent className="h-full">
                    {images.map((src, idx) => (
                      <CarouselItem key={`${src}-${idx}`} className="h-full">
                        <div className="aspect-[16/9] w-full">
                          <img
                            src={src}
                            alt={`${title} screenshot ${idx + 1}`}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious
                    className="left-3 top-1/2 -translate-y-1/2"
                    onMouseDown={(e) => e.preventDefault()}
                  />
                  <CarouselNext
                    className="right-3 top-1/2 -translate-y-1/2"
                    onMouseDown={(e) => e.preventDefault()}
                  />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      )}

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
