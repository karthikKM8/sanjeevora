import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Causes } from "@/components/sections/Causes";
import { HowItHelps } from "@/components/sections/HowItHelps";

export const Route = createFileRoute("/causes")({
  head: () => ({
    meta: [
      { title: "Our Causes — Sanjeevora" },
      { name: "description", content: "Education, healthcare, women empowerment, child welfare, environment, rural development — six fronts of change." },
      { property: "og:title", content: "Our Causes — Sanjeevora" },
      { property: "og:description", content: "Six fronts of change — one shared mission." },
      { property: "og:url", content: "/causes" },
    ],
    links: [{ rel: "canonical", href: "/causes" }],
  }),
  component: () => (
    <SiteShell>
      <div className="gradient-soft py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Our Causes</h1>
          <p className="mt-3 max-w-2xl text-foreground/70">Choose where your support goes — every cause is field-tested, community-led, and measurable.</p>
        </div>
      </div>
      <Causes />
      <HowItHelps />
    </SiteShell>
  ),
});