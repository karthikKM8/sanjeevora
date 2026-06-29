import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sanjeevora Vidya Mission" },
      { name: "description", content: "Sanjeevora Vidya Mission's mission, vision, and the impact of our community-led work across India." },
      { property: "og:title", content: "About Sanjeevora Vidya Mission" },
      { property: "og:description", content: "Compassion translated into action — our mission, vision, and impact." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: () => (
    <SiteShell>
      <div className="gradient-soft py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">About Sanjeevora Vidya Mission</h1>
          <p className="mt-3 max-w-2xl text-foreground/70">
            We've been walking with India's most underserved communities since 2014.
          </p>
        </div>
      </div>
      <About />
      <Testimonials />
    </SiteShell>
  ),
});