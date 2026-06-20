import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Essentials",
    price: "120",
    desc: "Refresh and refine",
    feats: ["Signature cut", "Express blow-dry", "Scalp massage", "Complimentary beverage"],
  },
  {
    name: "Signature",
    price: "320",
    desc: "Our most-loved experience",
    feats: ["Cut & color consultation", "Full balayage or gloss", "Style & finish", "Luxury treatment mask", "Hand & arm ritual"],
    featured: true,
  },
  {
    name: "Atelier",
    price: "680",
    desc: "Bespoke transformation",
    feats: ["Director-level styling", "Custom color formulation", "Full hair + makeup", "Private suite", "Aftercare kit included"],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary">Investment</span>
          <h2 className="font-display text-5xl sm:text-6xl font-light mt-4">
            Curated <span className="italic text-gold-gradient">experiences</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-3xl p-10 ${
                p.featured ? "glass-strong gold-border-glow" : "glass"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary text-primary-foreground px-4 py-1 text-[10px] uppercase tracking-[0.25em] font-medium">
                  Most loved
                </div>
              )}
              <h3 className="font-display text-2xl">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-xs text-muted-foreground">$</span>
                <span className="font-display text-6xl text-gold-gradient">{p.price}</span>
              </div>
              <ul className="mt-8 space-y-3">
                {p.feats.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-xs uppercase tracking-[0.25em] font-medium transition ${
                  p.featured
                    ? "bg-primary text-primary-foreground hover:opacity-90"
                    : "glass text-foreground hover:bg-secondary"
                }`}
              >
                Reserve
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
