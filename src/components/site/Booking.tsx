import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Check } from "lucide-react";

const services = ["Hair Styling", "Hair Coloring", "Makeup Artistry", "Bridal Package", "Spa & Wellness", "Skin Care"];
const times = ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30"];

export function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", service: services[0], date: "", time: times[0] });

  return (
    <section id="booking" className="py-32 relative">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-primary">Reserve</span>
          <h2 className="font-display text-5xl sm:text-6xl font-light mt-4">
            Book your <span className="italic text-gold-gradient">experience</span>
          </h2>
        </div>

        <div className="glass-strong rounded-3xl p-8 sm:p-12 gold-border-glow relative overflow-hidden">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-20 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.7 }}
                  className="mx-auto h-20 w-20 rounded-full bg-primary flex items-center justify-center animate-pulse-glow"
                >
                  <Check className="h-10 w-10 text-primary-foreground" />
                </motion.div>
                <h3 className="font-display text-3xl mt-6">Reservation confirmed</h3>
                <p className="text-muted-foreground mt-3">
                  We've sent a confirmation to {form.email}. We can't wait to see you.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-xs uppercase tracking-[0.25em] text-primary hover:underline"
                >
                  Make another booking
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="grid sm:grid-cols-2 gap-5"
              >
                <Field label="Full Name">
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="input-luxury"
                    placeholder="Jane Doe"
                  />
                </Field>
                <Field label="Email">
                  <input
                    required type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="input-luxury"
                    placeholder="you@example.com"
                  />
                </Field>
                <Field label="Service">
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="input-luxury"
                  >
                    {services.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="Date" icon={<Calendar className="h-4 w-4" />}>
                  <input
                    required type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="input-luxury"
                  />
                </Field>
                <div className="sm:col-span-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5" /> Time
                  </label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {times.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setForm({ ...form, time: t })}
                        className={`px-4 py-2 rounded-full text-xs transition ${
                          form.time === t
                            ? "bg-primary text-primary-foreground"
                            : "glass text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  type="submit"
                  className="sm:col-span-2 mt-4 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] font-medium hover:scale-[1.01] transition gold-border-glow"
                >
                  Confirm Reservation
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        .input-luxury {
          width: 100%;
          background: transparent;
          border: 1px solid var(--color-border);
          border-radius: 9999px;
          padding: 0.75rem 1.25rem;
          color: var(--color-foreground);
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input-luxury:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px oklch(0.78 0.13 80 / 0.15);
        }
        .input-luxury::placeholder { color: var(--color-muted-foreground); }
      `}</style>
    </section>
  );
}

function Field({ label, icon, children }: { label: string; icon?: React.ReactNode; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2 mb-3">
        {icon}{label}
      </span>
      {children}
    </label>
  );
}
