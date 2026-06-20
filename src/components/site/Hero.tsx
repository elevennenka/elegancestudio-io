import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Hero3D } from "./Hero3D";
import heroBg from "@/assets/hero-salon.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Luxury salon interior"
          className="h-full w-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      <Hero3D />

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto max-w-7xl px-6 w-full pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Award-winning luxury salon · Est. 2014
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-light leading-[0.95] text-foreground">
              Where{" "}
              <span className="italic shimmer-text">Beauty</span>
              <br />
              Meets{" "}
              <span className="italic text-gold-gradient">Innovation</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              Experience luxury salon services powered by creativity, technology, and personalized care —
              crafted by master stylists in an atmosphere designed to feel like nowhere else.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <a
                href="#booking"
                className="group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:scale-[1.02] transition gold-border-glow"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-3 rounded-full glass px-7 py-4 text-xs uppercase tracking-[0.25em] font-medium text-foreground hover:bg-secondary transition"
              >
                Explore Services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-20 grid grid-cols-3 gap-8 max-w-md"
            >
              {[
                { n: "12+", l: "Years" },
                { n: "8K", l: "Clients" },
                { n: "4.9", l: "Rating" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-gold-gradient">{s.n}</div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-primary to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
