import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary">Visit</span>
          <h2 className="font-display text-5xl sm:text-6xl font-light mt-4">
            Come <span className="italic text-gold-gradient">say hello</span>
          </h2>
          <p className="text-muted-foreground mt-6 max-w-md">
            Step into our atelier in the heart of the city — a sanctuary designed for transformation.
          </p>

          <div className="mt-10 space-y-6">
            {[
              { icon: MapPin, label: "Address", value: "127 Rue Saint-Honoré, Paris 75001" },
              { icon: Phone, label: "Phone", value: "+33 1 42 86 00 00" },
              { icon: Mail, label: "Email", value: "concierge@elegance-studio.com" },
              { icon: Clock, label: "Hours", value: "Tue–Sat · 10:00 – 20:00" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-2xl glass flex items-center justify-center text-primary shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{c.label}</p>
                    <p className="mt-1 text-foreground">{c.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden glass-strong aspect-square lg:aspect-auto min-h-[400px]"
        >
          <iframe
            title="ÉLÉGANCE Studio location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=2.328%2C48.862%2C2.338%2C48.868&layer=mapnik"
            className="absolute inset-0 h-full w-full grayscale contrast-110 opacity-70"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-primary/10 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
