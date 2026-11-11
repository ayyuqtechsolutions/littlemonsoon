import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Clock, MapPin, MessageCircle, Phone, Users } from "lucide-react";
import { MAPS_URL, PHONE, WHATSAPP } from "@/data/menu";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Little Monsoon Cafe, Thane" },
      { name: "description", content: "Find Little Monsoon at Hiranandani Estate, Thane West. Open Mon–Sun, 8 AM – 11 PM. Walk-ins only." },
      { property: "og:title", content: "Visit Little Monsoon, Thane" },
      { property: "og:description", content: "Hiranandani Estate, Thane West. 22 seats, one long table." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("General enquiry");
  const [message, setMessage] = useState("");
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hi Little Monsoon! I'm ${name}.\nTopic: ${topic}\n\n${message}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, "_blank");
  };
  const input = "w-full rounded-xl border border-input bg-card px-4 py-3.5 text-base font-semibold outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/20";

  return (
    <div className="mx-auto max-w-6xl px-5 pt-16">
      <p className="eyebrow text-sage">Contact & location</p>
      <h1 className="mt-3 text-6xl font-bold md:text-7xl">Find the <em className="text-primary">long table.</em></h1>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <div className="space-y-6">
          {[
            { icon: MapPin, label: "Address", value: "Hiranandani Estate, Thane West, Maharashtra" },
            { icon: Clock, label: "Hours", value: "Mon – Sun: 8:00 AM – 11:00 PM" },
            { icon: Users, label: "Seating", value: "22 Seats, 1 Long Table (Walk-ins only)" },
            { icon: Phone, label: "Phone", value: "+91 84528 86999" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-4 border-b border-border pb-6">
              <Icon className="mt-1 h-6 w-6 text-primary" strokeWidth={1.75} />
              <div>
                <p className="eyebrow text-muted-foreground">{label}</p>
                <p className="mt-1 font-serif text-3xl font-bold">{value}</p>
              </div>
            </div>
          ))}
          <div className="flex flex-wrap gap-3 pt-2">
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="btn-primary"><MapPin className="h-4 w-4" />Open in Google Maps</a>
            <a href={`tel:${PHONE}`} className="btn-outline"><Phone className="h-4 w-4" />Call Cafe</a>
          </div>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Little Monsoon on the map"
              src="https://www.google.com/maps?q=Hiranandani+Estate+Thane+West&output=embed"
              className="h-64 w-full grayscale-[60%] sepia-[25%]"
              loading="lazy"
            />
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl bg-secondary p-6">
            <h2 className="text-4xl font-bold">Get in Touch / Coffee Bean Orders</h2>
            <p className="mt-2 text-base font-semibold text-muted-foreground">Your message opens straight in WhatsApp.</p>
            <div className="mt-5 space-y-3">
              <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={input} />
              <select className={input} value={topic} onChange={(e) => setTopic(e.target.value)}>
                <option>General enquiry</option>
                <option>Coffee bean order</option>
                <option>Events & long table</option>
              </select>
              <textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" className={input} />
              <button type="submit" className="btn-primary w-full"><MessageCircle className="h-4 w-4" />Send on WhatsApp</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
