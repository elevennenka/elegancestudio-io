import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";

const items = [
  { src: g1, h: "row-span-2", label: "Editorial" },
  { src: g2, h: "row-span-1", label: "Makeup" },
  { src: g3, h: "row-span-2", label: "Bridal" },
  { src: g4, h: "row-span-1", label: "Spa" },
  { src: g5, h: "row-span-2", label: "Color" },
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  return (
    <section id="gallery" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary">Portfolio</span>
          <h2 className="font-display text-5xl sm:text-6xl font-light mt-4">
            Recent <span className="italic text-gold-gradient">work</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-4">
          {items.concat(items.slice(0, 3)).map((it, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 5) * 0.08 }}
              onClick={() => setLightbox(it.src)}
              className={`group relative overflow-hidden rounded-2xl ${it.h}`}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition" />
              <div className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.3em] text-primary opacity-0 group-hover:opacity-100 transition">
                {it.label}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
          >
            <button className="absolute top-6 right-6 h-10 w-10 rounded-full glass flex items-center justify-center">
              <X className="h-5 w-5" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={lightbox}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
              alt=""
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
