import { createFileRoute, Link } from "@tanstack/react-router";
import { Armchair, Bean, CloudRain } from "lucide-react";
import hero from "@/assets/hero.jpg";
import latte from "@/assets/latte.jpg";
import coldbrew from "@/assets/coldbrew.jpg";
import akuri from "@/assets/akuri.jpg";
import bunmaska from "@/assets/bunmaska.jpg";
import { DietDot } from "@/components/SiteChrome";
import { Slideshow, type Slide } from "@/components/Slideshow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Little Monsoon — A Cafe for Slow Mornings in Thane" },
      { name: "description", content: "Small-batch coffee, chai poured the long way and a simple kitchen at Hiranandani Estate, Thane." },
      { property: "og:title", content: "Little Monsoon — A Cafe for Slow Mornings" },
      { property: "og:description", content: "Come in when it rains. Stay till it stops. Hiranandani Estate, Thane." },
    ],
  }),
  component: Index,
});

const slides: Slide[] = [
  { img: hero, alt: "Coffee pouring into a ceramic cup by a rainy window", tag: "08:00 · The kettle goes on", caption: "First pour of the day, always before the rain." },
  { img: latte, alt: "House latte with cardamom and jaggery", tag: "House latte", caption: "Jaggery, cardamom, a pinch of sea salt." },
  { img: bunmaska, alt: "Bun maska and cutting chai on a tray", tag: "The 4 o'clock ritual", caption: "Cold salted butter, soft pav, long-poured chai." },
  { img: akuri, alt: "Akuri on toasted sourdough", tag: "From the kitchen", caption: "Parsi-style akuri on buttered sourdough." },
  { img: coldbrew, alt: "Rose cold brew tonic with rose petals", tag: "When the sky turns grey", caption: "Rose cold brew tonic over big ice." },
];

const highlights = [
  { icon: Armchair, title: "22 Seats, One Long Table", text: "Communal, quiet, cozy seating designed for slow conversations and rainy mornings." },
  { icon: Bean, title: "Chikmagalur Arabica", text: "House beans from Chikmagalur washed arabica, roasted a few kilos at a time." },
  { icon: CloudRain, title: "The Rainy Day Set (₹299)", text: "Cutting chai, bun maska, and a slice of mawa cake. Served whenever the sky turns grey." },
];

const favorites = [
  { img: latte, name: "The Little Monsoon House Latte", price: "₹240", desc: "Jaggery, cardamom, sea salt.", diet: "veg" as const },
  { img: coldbrew, name: "Rose Cold Brew Tonic", price: "₹220", desc: "18-hour cold brew, tonic, rose petals.", diet: "veg" as const },
  { img: akuri, name: "Akuri on Toast", price: "₹260", desc: "Parsi-style spiced scrambled eggs, buttered sourdough.", diet: "nonveg" as const },
  { img: bunmaska, name: "Bun Maska & Cutting Chai", price: "₹120 / ₹60", desc: "Cold salted butter, soft pav & Mumbaikar chai.", diet: "veg" as const },
];

function Index() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-12 md:grid-cols-[1.1fr_1fr] md:pt-20">
        <div className="animate-fade-up">
          <span className="eyebrow inline-block rounded-full border border-primary/30 px-3 py-1.5 text-primary">
            A cafe for slow mornings • Hiranandani Estate
          </span>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.02] md:text-7xl">
            Come in when it rains. <em className="text-primary">Stay till it stops.</em>
          </h1>
          <p className="mt-6 max-w-md text-xl font-medium text-muted-foreground">
            Coffee roasted in small batches, chai poured the long way, and a kitchen that keeps things simple.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/menu" className="btn-primary">Explore Menu</Link>
            <Link to="/contact" className="btn-outline">Find Us</Link>
          </div>
        </div>
        <Slideshow
          slides={slides}
          className="aspect-[4/5] w-full animate-fade-up [animation-delay:150ms]"
        />
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-3">
        {highlights.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-7 transition-transform hover:-translate-y-1">
            <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
            <h3 className="mt-5 text-3xl font-semibold">{title}</h3>
            <p className="mt-3 text-base font-medium leading-relaxed text-muted-foreground">{text}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-24">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-sage">House favourites</p>
            <h2 className="mt-2 text-5xl font-semibold md:text-6xl">What regulars order</h2>
          </div>
          <Link to="/menu" className="hidden text-base font-bold text-primary underline-offset-4 hover:underline sm:block">Full menu →</Link>
        </div>
        <div className="-mx-5 mt-10 flex snap-x gap-5 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-4 md:overflow-visible md:px-0">
          {favorites.map((f) => (
            <article key={f.name} className="group w-64 shrink-0 snap-start md:w-auto">
              <div className="relative overflow-hidden rounded-2xl">
                <img src={f.img} alt={f.name} loading="lazy" width={800} height={1008} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-sm font-bold text-primary-foreground">{f.price}</span>
              </div>
              <div className="mt-4 flex items-start gap-2">
                <span className="mt-1.5"><DietDot diet={f.diet} /></span>
                <div>
                  <h3 className="text-2xl font-semibold leading-tight">{f.name}</h3>
                  <p className="mt-1 text-base font-medium text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
