import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Slide = {
  img: string;
  alt: string;
  tag: string;
  caption: string;
};

const DURATION = 5200;

export function Slideshow({ slides, className = "" }: { slides: Slide[]; className?: string }) {
  const count = slides.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const go = useCallback(
    (i: number) => setActive(((i % count) + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused || count < 2) return;
    setProgress(0);
    const start = Date.now();
    const id = window.setInterval(() => {
      const p = (Date.now() - start) / DURATION;
      if (p >= 1) setActive((a) => (a + 1) % count);
      else setProgress(p);
    }, 60);
    return () => window.clearInterval(id);
  }, [active, paused, count]);

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Moments from the cafe"
      className={`grain group relative overflow-hidden rounded-[2rem] bg-foreground shadow-2xl ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <div
          key={s.img}
          aria-hidden={i !== active}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.img}
            alt={s.alt}
            width={1280}
            height={1536}
            loading={i === 0 ? "eager" : "lazy"}
            className={`h-full w-full object-cover ${i === active ? "ken-burns" : "scale-[1.04]"}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/15 to-transparent" />
          <div
            className={`absolute inset-x-0 bottom-0 p-6 transition-all duration-700 ease-out md:p-8 ${
              i === active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <p className="eyebrow text-primary-foreground/90">{s.tag}</p>
            <p className="mt-2 max-w-md font-serif text-2xl font-semibold italic leading-tight text-background md:text-3xl">
              {s.caption}
            </p>
          </div>
        </div>
      ))}

      {count > 1 && (
        <>
          <div className="absolute right-4 top-4 z-10 flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s.img}
                type="button"
                aria-label={`Show: ${s.caption}`}
                onClick={() => go(i)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === active ? "w-8 bg-primary-foreground" : "w-2 bg-background/50 hover:bg-background/90"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/85 p-2.5 text-foreground shadow-lg backdrop-blur transition-opacity hover:bg-background focus-visible:opacity-100 md:opacity-0 md:group-hover:opacity-100"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/85 p-2.5 text-foreground shadow-lg backdrop-blur transition-opacity hover:bg-background focus-visible:opacity-100 md:opacity-0 md:group-hover:opacity-100"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute inset-x-0 bottom-0 z-10 h-1 bg-background/25">
            <div
              className="h-full bg-primary-foreground transition-[width] duration-100 ease-linear"
              style={{ width: `${Math.min(progress, 1) * 100}%` }}
            />
          </div>
        </>
      )}
    </div>
  );
}
