import { type ReactNode } from "react";
import { AnimateOnScroll } from "./AnimateOnScroll";

interface HeroProps {
  title: string;
  description: string;
  category?: string;
  example?: string;
  badge?: string;
  gradient?: string;
  variant?: "default" | "glass";
  stats?: { label: string; value: ReactNode; icon?: ReactNode }[];
}

export function Hero({
  title,
  description,
  category,
  example,
  badge,
  gradient,
  variant = "default",
  stats,
}: HeroProps) {
  const Content = (
    <div className={gradient ? "max-inline-3xl" : "text-center"}>
      <AnimateOnScroll animation="fade-up" delay={100}>
        <div
          className={`mbe-4 flex flex-wrap items-center gap-3 ${!gradient ? "justify-center" : ""}`}
        >
          {category && (
            <span
              className={`inline-block rounded-full px-6 py-2 font-bold ${gradient ? "bg-black/20 text-sm text-white" : "bg-linear-to-br from-yellow to-orange text-xl text-black shadow-lg shadow-yellow/20"}`}
            >
              {category}
            </span>
          )}
          {badge && (
            <span
              className={`inline-block rounded-lg px-3 py-1.5 text-sm font-bold shadow-sm ${gradient ? "bg-white/20 text-white" : "bg-mist-900/50 text-mist-500"}`}
            >
              {badge}
            </span>
          )}
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="blur-in" delay={300} duration={1000}>
        <h1
          className={`mbe-2 text-4xl font-bold text-shadow-sm md:text-[2.5rem] ${gradient ? "text-white drop-shadow-[0_2px_10_rgb(0_0_0/20%)]" : "bg-linear-to-br from-white to-slate-200 bg-clip-text text-transparent"}`}
        >
          {title}
        </h1>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={500}>
        <p
          className={`m-0 text-lg md:text-xl ${gradient ? "text-white/90" : "text-mist-500"}`}
        >
          {description}
        </p>
      </AnimateOnScroll>

      {example && (
        <AnimateOnScroll animation="fade-in" delay={500}>
          <p className="mbs-4 text-base text-white/80">
            <em>{example}</em>
          </p>
        </AnimateOnScroll>
      )}

      {stats && (
        <AnimateOnScroll animation="fade-up" delay={700}>
          <dl className="mbs-8 flex flex-wrap justify-center gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="m-0 flex items-center gap-2 text-base text-mist-500">
                  {stat.icon && <span className="text-xl">{stat.icon}</span>}
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </AnimateOnScroll>
      )}
    </div>
  );

  return (
    <AnimateOnScroll
      animation="fade-in"
      duration={1000}
      className="relative mbe-12 overflow-hidden rounded-3xl p-8 shadow-2xl md:p-12"
      style={{
        ...(gradient && variant !== "glass"
          ? { background: gradient }
          : {
              background: "var(--color-card)",
              borderColor: "var(--glass-border)",
              borderWidth: "1px",
              borderStyle: "solid",
            }),
      }}
    >
      {Content}
    </AnimateOnScroll>
  );
}
