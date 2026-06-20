import { motion } from "framer-motion";
import { Instagram, Twitter } from "lucide-react";
import s1 from "@/assets/stylist-1.jpg";
import s2 from "@/assets/stylist-2.jpg";
import s3 from "@/assets/stylist-3.jpg";

const stylists = [
  { name: "Isabella Rossi", role: "Creative Director", img: s1, skills: [["Color", 98], ["Styling", 94], ["Bridal", 90]] },
  { name: "Lucas Moreau", role: "Master Stylist", img: s2, skills: [["Cuts", 96], ["Editorial", 92], ["Men's", 95]] },
  { name: "Amara Devereaux", role: "Lead Makeup Artist", img: s3, skills: [["Bridal", 99], ["Editorial", 95], ["Special FX", 88]] },
];

export function Stylists() {
  return (
    <section id="stylists" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 max-w-2xl">
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary">The Atelier</span>
          <h2 className="font-display text-5xl sm:text-6xl font-light mt-4">
            Master <span className="italic text-gold-gradient">artists</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stylists.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden glass hover-tilt"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary">{p.role}</p>
                <h3 className="font-display text-3xl mt-1">{p.name}</h3>

                <div className="mt-5 space-y-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {p.skills.map(([label, val]) => (
                    <div key={label as string}>
                      <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] mb-1">
                        <span className="text-muted-foreground">{label}</span>
                        <span className="text-primary">{val}%</span>
                      </div>
                      <div className="h-px bg-border overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${val}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.3 }}
                          className="h-full bg-gradient-to-r from-primary to-accent"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex gap-3">
                  <a href="#" className="h-9 w-9 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary transition">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href="#" className="h-9 w-9 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary transition">
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
