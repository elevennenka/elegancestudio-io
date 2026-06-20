import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Stylists } from "@/components/site/Stylists";
import { Gallery } from "@/components/site/Gallery";
import { Pricing } from "@/components/site/Pricing";
import { AIAssistant } from "@/components/site/AIAssistant";
import { Testimonials } from "@/components/site/Testimonials";
import { Booking } from "@/components/site/Booking";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ÉLÉGANCE Studio — Luxury Salon & AI Beauty Concierge" },
      { name: "description", content: "Where beauty meets innovation. Master stylists, bespoke services and an AI beauty concierge in a modern luxury atelier." },
      { property: "og:title", content: "ÉLÉGANCE Studio — Luxury Salon" },
      { property: "og:description", content: "Award-winning luxury salon experience powered by master craftsmanship and AI." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Stylists />
      <Gallery />
      <Pricing />
      <AIAssistant />
      <Testimonials />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}
