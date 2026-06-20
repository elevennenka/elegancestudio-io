import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="font-display text-3xl tracking-[0.25em] text-gold-gradient font-light">
              ÉLÉGANCE
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              A modern luxury atelier where master craftsmanship meets thoughtful innovation.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex max-w-md gap-2"
            >
              <input
                type="email"
                placeholder="Subscribe to our newsletter"
                className="flex-1 bg-transparent border border-border rounded-full px-5 py-3 text-sm outline-none focus:border-primary transition placeholder:text-muted-foreground"
              />
              <button className="rounded-full bg-primary text-primary-foreground px-5 py-3 text-xs uppercase tracking-[0.2em]">
                Join
              </button>
            </form>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-5">Studio</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["Services", "Stylists", "Pricing", "Gallery"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-primary transition">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>127 Rue Saint-Honoré</li>
              <li>Paris 75001</li>
              <li>+33 1 42 86 00 00</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row gap-4 justify-between items-center">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} ÉLÉGANCE Studio. All rights reserved.</p>
          <div className="flex gap-3">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary transition">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
