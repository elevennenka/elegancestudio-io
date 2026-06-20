import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, Mic, X, Bot } from "lucide-react";

type Msg = { role: "user" | "ai"; text: string };

const suggestions = [
  "Recommend a hairstyle for an oval face",
  "What's trending this season?",
  "Help me pick a bridal package",
  "Skincare tips for dry skin",
];

const canned: Record<string, string> = {
  default: "I'd love to help with that. Tell me a bit about your hair length, lifestyle and the vibe you're going for, and I'll craft a personalized recommendation from our master stylists.",
  hairstyle: "For an oval face shape, soft layered cuts, textured lobs and side-swept waves elevate your natural symmetry. Our Creative Director Isabella specializes in exactly this — shall I check her availability?",
  trending: "This season is all about glossy chocolate brunettes, lived-in balayage and architectural blunt cuts. Editorial textures with a 90s revival are dominating our atelier this month.",
  bridal: "Our Signature Bridal package includes a styling trial, day-of hair & makeup, plus a touch-up kit. Most brides also add scalp therapy the week prior. Want me to start a booking?",
  skin: "For dry skin we recommend our Gold-Infusion facial paired with a daily ceramide-rich routine. I can flag products our skincare specialist tailors to your concerns.",
};

function reply(text: string) {
  const t = text.toLowerCase();
  if (t.includes("hair") && t.includes("face")) return canned.hairstyle;
  if (t.includes("trend") || t.includes("season")) return canned.trending;
  if (t.includes("bridal") || t.includes("wedding")) return canned.bridal;
  if (t.includes("skin")) return canned.skin;
  return canned.default;
}

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "ai", text: "Welcome to ÉLÉGANCE. I'm Aurora, your AI beauty concierge. How may I elevate your look today?" },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, { role: "ai", text: reply(text) }]);
      setTyping(false);
    }, 1200);
  };

  return (
    <>
      <section id="ai" className="py-32 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary">Innovation</span>
            <h2 className="font-display text-5xl sm:text-6xl font-light mt-4 leading-tight">
              Meet <span className="italic text-gold-gradient">Aurora</span>
              <br />Your AI beauty concierge
            </h2>
            <p className="mt-6 text-muted-foreground max-w-lg leading-relaxed">
              Aurora combines computer-vision face analysis with our master stylists' expertise to recommend hairstyles, colors and treatments tailored to you — available 24/7.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Face shape analysis", "Style recommendations", "Voice input", "Booking assistance"].map((t) => (
                <span key={t} className="glass rounded-full px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
            <button
              onClick={() => setOpen(true)}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-4 text-xs uppercase tracking-[0.25em] font-medium gold-border-glow"
            >
              <Sparkles className="h-4 w-4" /> Chat with Aurora
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl" />
            <div className="relative glass-strong rounded-[2rem] p-8 gold-border-glow">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse-glow">
                  <Bot className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display text-lg">Aurora AI</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-primary flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" /> Online
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-4 text-sm">
                <div className="glass rounded-2xl rounded-tl-sm p-4 max-w-[85%]">
                  Hi! Want a hairstyle that complements your face shape?
                </div>
                <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm p-4 max-w-[85%] ml-auto">
                  Yes, I have an oval face and shoulder-length hair.
                </div>
                <div className="glass rounded-2xl rounded-tl-sm p-4 max-w-[85%]">
                  <span className="shimmer-text">Analyzing...</span> a soft textured lob with curtain bangs would be stunning on you ✨
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center animate-pulse-glow shadow-2xl"
        aria-label="Open AI assistant"
      >
        <Sparkles className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[min(420px,calc(100vw-2rem))] h-[600px] max-h-[80vh] glass-strong rounded-3xl flex flex-col overflow-hidden gold-border-glow"
          >
            <div className="flex items-center justify-between p-5 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Bot className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-display text-base leading-none">Aurora</p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-primary mt-0.5">AI Concierge</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 space-y-3 text-sm">
              {msgs.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[85%] p-3.5 rounded-2xl ${
                    m.role === "ai"
                      ? "glass rounded-tl-sm"
                      : "bg-primary text-primary-foreground rounded-tr-sm ml-auto"
                  }`}
                >
                  {m.text}
                </motion.div>
              ))}
              {typing && (
                <div className="glass max-w-[60%] p-3.5 rounded-2xl rounded-tl-sm flex gap-1.5">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="h-2 w-2 rounded-full bg-primary animate-bounce"
                      style={{ animationDelay: `${d * 0.15}s` }}
                    />
                  ))}
                </div>
              )}
              <div ref={endRef} />
            </div>

            {msgs.length <= 2 && (
              <div className="px-5 pb-3 flex flex-wrap gap-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-[10px] uppercase tracking-[0.18em] glass rounded-full px-3 py-1.5 text-muted-foreground hover:text-primary transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => { e.preventDefault(); send(input); }}
              className="p-4 border-t border-border flex items-center gap-2"
            >
              <button type="button" className="h-10 w-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary">
                <Mic className="h-4 w-4" />
              </button>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Aurora anything..."
                className="flex-1 bg-transparent border border-border rounded-full px-4 py-2.5 text-sm outline-none focus:border-primary transition"
              />
              <button
                type="submit"
                className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
