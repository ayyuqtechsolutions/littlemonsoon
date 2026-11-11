import { Link } from "@tanstack/react-router";
import { BookOpen, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { MAPS_URL, PHONE, WHATSAPP } from "@/data/menu";

export function DietDot({ diet }: { diet: "veg" | "nonveg" }) {
  return (
    <span
      aria-label={diet === "veg" ? "Vegetarian" : "Contains egg or meat"}
      className={`inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-[3px] border ${diet === "veg" ? "border-veg" : "border-nonveg"}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${diet === "veg" ? "bg-veg" : "bg-nonveg"}`} />
    </span>
  );
}

export function Header() {
  const link = "text-base font-bold text-muted-foreground transition-colors hover:text-foreground";
  const active = { className: "text-base font-bold text-foreground" };
  return (
    <>
      <div className="bg-foreground px-4 py-2.5 text-center text-sm font-semibold text-background">
        🌧️ Thane Weather: Rainy? Drop in for <span className="font-semibold text-primary-foreground">'The Rainy Day Set'</span> for ₹299!
      </div>
      <header className="sticky top-0 z-40 border-b border-border bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link to="/" className="font-serif text-3xl font-bold italic leading-none">
            Little Monsoon
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link to="/" className={link} activeProps={active} activeOptions={{ exact: true }}>Home</Link>
            <Link to="/menu" className={link} activeProps={active}>Story & Menu</Link>
            <Link to="/contact" className={link} activeProps={active}>Contact</Link>
          </nav>
          <div className="flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-2 text-sm font-bold">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
            </span>
            <span className="hidden sm:inline">22 Seats, 1 Long Table •</span> Open Today
          </div>
        </div>
        <nav className="flex justify-center gap-6 border-t border-border py-2 md:hidden">
          <Link to="/" className={link} activeProps={active} activeOptions={{ exact: true }}>Home</Link>
          <Link to="/menu" className={link} activeProps={active}>Story & Menu</Link>
          <Link to="/contact" className={link} activeProps={active}>Contact</Link>
        </nav>
      </header>
    </>
  );
}

export function Footer() {
  const head = "eyebrow text-primary";
  const fl = "text-lg font-semibold opacity-85 transition hover:text-primary hover:opacity-100";
  return (
    <footer className="mt-24 bg-foreground pb-28 pt-20 text-background md:pb-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <p className="font-serif text-5xl font-bold italic md:text-6xl">Little Monsoon</p>
            <p className="mt-4 max-w-xs text-lg font-medium opacity-75">Come in when it rains. Stay till it stops. A cafe for slow mornings in Thane.</p>
          </div>
          <div>
            <p className={head}>Quick links</p>
            <ul className="mt-5 space-y-3">
              <li><Link to="/" className={fl}>Home</Link></li>
              <li><Link to="/menu" className={fl}>Story & Menu</Link></li>
              <li><Link to="/contact" className={fl}>Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className={head}>Visit</p>
            <ul className="mt-5 space-y-3 text-lg font-semibold opacity-85">
              <li className="flex gap-2"><Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />Daily · 8 AM – 11 PM</li>
              <li className="flex gap-2"><MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />Hiranandani Estate, Thane West</li>
            </ul>
          </div>
          <div>
            <p className={head}>Reach us</p>
            <ul className="mt-5 space-y-3">
              <li><a href={`tel:${PHONE}`} className={`${fl} inline-flex items-center gap-2`}><Phone className="h-5 w-5 text-primary" />+91 84528 86999</a></li>
              <li><a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className={`${fl} inline-flex items-center gap-2`}><MessageCircle className="h-5 w-5 text-primary" />WhatsApp us</a></li>
              <li><a href={MAPS_URL} target="_blank" rel="noreferrer" className={`${fl} inline-flex items-center gap-2`}><MapPin className="h-5 w-5 text-primary" />Get directions</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-background/20 pt-8 text-base font-semibold opacity-75 md:flex-row md:justify-between">
          <p>© 2026 Little Monsoon Cafe. Hiranandani Estate, Thane.</p>
          <a href="https://www.ayyuq.in/" target="_blank" rel="noreferrer" className="transition hover:text-primary">Made by Ayyuq Tech Solutions</a>
        </div>
      </div>
    </footer>
  );
}

export function MobileQuickBar() {
  const item = "flex flex-1 flex-col items-center gap-1 py-2.5 text-xs font-bold";
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 flex overflow-hidden rounded-2xl border border-border bg-card/90 shadow-lg backdrop-blur-xl md:hidden">
      <Link to="/menu" className={item}><BookOpen className="h-4 w-4 text-primary" />Menu</Link>
      <a href={MAPS_URL} target="_blank" rel="noreferrer" className={`${item} border-x border-border`}><MapPin className="h-4 w-4 text-primary" />Directions</a>
      <a href={`tel:${PHONE}`} className={item}><Phone className="h-4 w-4 text-primary" />Call</a>
    </div>
  );
}
