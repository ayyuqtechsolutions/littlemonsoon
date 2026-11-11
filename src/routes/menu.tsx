import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CATEGORIES, CATEGORY_NOTES, filterMenu, type Category, type Diet } from "@/data/menu";
import { DietDot } from "@/components/SiteChrome";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Story & Menu — Little Monsoon Cafe, Thane" },
      { name: "description", content: "Our story and full menu: coffee, chai, all-day food and sweets. Open every day 8 AM – 11 PM." },
      { property: "og:title", content: "Story & Menu — Little Monsoon" },
      { property: "og:description", content: "Filter kaapi, akuri on toast, mawa cake and the Rainy Day Set for ₹299." },
    ],
  }),
  component: MenuPage,
});

const DIETS: { id: "all" | Diet; label: string }[] = [
  { id: "all", label: "All" },
  { id: "veg", label: "Pure Veg" },
  { id: "nonveg", label: "Contains Egg/Meat" },
];

function MenuPage() {
  const [cat, setCat] = useState<"all" | Category>("all");
  const [diet, setDiet] = useState<"all" | Diet>("all");
  const items = filterMenu(cat, diet);
  const groups = (cat === "all" ? CATEGORIES.slice(1) : CATEGORIES.filter((c) => c.id === cat)) as { id: Category; label: string }[];

  return (
    <div className="mx-auto max-w-4xl px-5 pt-16">
      <section className="text-center animate-fade-up">
        <p className="eyebrow text-sage">Our story · Est. 2026</p>
        <h1 className="mt-4 text-6xl font-bold md:text-7xl">Last call at eleven, <em className="text-primary">first pour at eight.</em></h1>
        <p className="mx-auto mt-6 max-w-xl text-xl font-semibold text-muted-foreground">
          Little Monsoon was built for slow mornings, quiet afternoons, and long conversations over steaming cups.
        </p>
        <span className="eyebrow mt-8 inline-block rounded-full bg-foreground px-4 py-2 text-background">
          Open every day | 8:00 AM – 11:00 PM
        </span>
      </section>

      <section id="menu" className="mt-20">
        <div className="flex flex-wrap justify-center gap-2" role="tablist">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={cat === c.id}
              onClick={() => setCat(c.id)}
              className={`rounded-full px-5 py-2.5 text-base font-bold transition-colors ${cat === c.id ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-border"}`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
          {DIETS.map((d) => (
            <button
              key={d.id}
              aria-pressed={diet === d.id}
              onClick={() => setDiet(d.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-bold transition-colors ${diet === d.id ? "border-foreground bg-foreground text-background" : "border-border hover:border-foreground"}`}
            >
              {d.id !== "all" && <DietDot diet={d.id} />}
              {d.label}
            </button>
          ))}
        </div>

        <div className="mt-12 space-y-14">
          {groups.map((g) => {
            const list = items.filter((i) => i.category === g.id);
            if (!list.length) return null;
            return (
              <div key={g.id} className="animate-fade-up">
                <h2 className="border-b border-border pb-3 text-4xl font-bold">{g.label}</h2>
                <ul className="mt-4">
                  {list.map((i) => (
                    <li key={i.name} className="-mx-3 rounded-xl px-3 py-3.5 transition-colors hover:bg-accent">
                      <div className="flex items-end">
                        <span className="flex items-center gap-2 font-serif text-2xl font-bold">
                          <DietDot diet={i.diet} />
                          {i.name}
                          {i.special && <span className="eyebrow rounded-full bg-primary px-2 py-0.5 text-[0.55rem] text-primary-foreground">House special</span>}
                        </span>
                        <span className="dot-leader" />
                        <span className="text-lg font-bold text-primary">{i.price}</span>
                      </div>
                      {i.desc && <p className="ml-5.5 mt-1 text-base font-medium text-muted-foreground">{i.desc}</p>}
                    </li>
                  ))}
                </ul>
                {CATEGORY_NOTES[g.id] && (
                  <p className="mt-4 rounded-xl bg-secondary px-4 py-3 text-base font-semibold italic text-secondary-foreground">{CATEGORY_NOTES[g.id]}</p>
                )}
              </div>
            );
          })}
          {!items.length && <p className="text-center text-muted-foreground">Nothing here with that filter.</p>}
        </div>
      </section>

      <section className="mt-20 rounded-3xl border-2 border-primary p-8 text-center md:p-12">
        <p className="eyebrow text-primary">When the sky turns grey</p>
        <h2 className="mt-3 text-5xl font-bold md:text-6xl">The Rainy Day Set — ₹299</h2>
        <p className="mt-4 text-lg font-semibold text-muted-foreground">Cutting chai + Bun maska + Slice of Mawa cake. Served whenever the sky turns grey.</p>
      </section>
    </div>
  );
}
