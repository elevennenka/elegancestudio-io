import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

const items = [
  { name: "Sophia L.", role: "Vogue Contributor", text: "ÉLÉGANCE doesn't cut hair, they sculpt identity. Every visit feels like a private show. Isabella is a true artist." },
  { name: "Marcus T.", role: "Creative Director", text: "From the moment I step in, the atmosphere is unlike any salon I've experienced. The attention to detail is intoxicating." },
  { name: "Priya R.", role: "Bride, 2025", text: "My wedding look was beyond what I dreamed. Amara understood me in 5 minutes and delivered absolute magic on the day." },
  { name: "Elena K.", role: "Model", text: "I fly across the country for my appointments. There's simply no one else who can do color like this team." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = items[i];
  return (
    <section id="testimonials" className="py-32 relative">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] text-primary">Praise</span>
        <h2 className="font-display text-5xl sm:text-6xl font-light mt-4">
          Words from our <span className="italic text-gold-gradient">clients</span>
        </h2>

        <div className="mt-16 relative h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 glass-strong rounded-3xl p-12 flex flex-col items-center justify-center gold-border-glow"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-display text-2xl sm:text-3xl italic leading-relaxed text-foreground/90 max-w-2xl">
                "{t.text}"
              </p>
              <div className="mt-8">
                <p className="font-display text-lg">{t.name}</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">{t.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              className={`h-1 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-4 bg-border"}`}
              aria-label={`Slide ${k + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
