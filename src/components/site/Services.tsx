import { useState } from "react";
import { motion } from "framer-motion";
import { Scissors, Palette, Brush, Heart, Flower2, Sparkles, Plus } from "lucide-react";

const services = [
  { icon: Scissors, title: "Hair Styling", price: "from $85", desc: "Precision cuts, blowouts and editorial styling crafted by award-winning artists." },
  { icon: Palette, title: "Hair Coloring", price: "from $140", desc: "Balayage, dimensional color and luxury gloss using premium European pigments." },
  { icon: Brush, title: "Makeup Artistry", price: "from $120", desc: "Editorial, bridal and special-event makeup with pro-grade luxury cosmetics." },
  { icon: Heart, title: "Bridal Packages", price: "from $580", desc: "Full bridal-party experience including trial, day-of styling and touch-up kit." },
  { icon: Flower2, title: "Spa & Wellness", price: "from $95", desc: "Restorative facials, scalp therapy and signature gold-infused treatments." },
  { icon: Sparkles, title: "Skin Care", price: "from $110", desc: "Medical-grade facials, microdermabrasion and bespoke skincare protocols." },
];

export function Services() {
  const [expanded, setExpanded] = useState<number | null>(null);
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary">Our Craft</span>
          <h2 className="font-display text-5xl sm:text-6xl font-light mt-4">
            Signature <span className="italic text-gold-gradient">services</span>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Every service is choreographed by a master artist using the world's finest products and a process refined over a decade.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isOpen = expanded === i;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                onClick={() => setExpanded(isOpen ? null : i)}
                className="group cursor-pointer glass rounded-3xl p-8 hover-tilt relative overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition" />
                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-2xl glass flex items-center justify-center text-primary group-hover:scale-110 transition">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Plus
                      className={`h-4 w-4 text-muted-foreground transition-transform ${
                        isOpen ? "rotate-45 text-primary" : ""
                      }`}
                    />
                  </div>
                  <h3 className="mt-8 font-display text-2xl">{s.title}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-primary">{s.price}</p>
                  <motion.p
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    className="overflow-hidden text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="block pt-4">{s.desc}</span>
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
