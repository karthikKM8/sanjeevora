import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Causes as ProgramsComponent } from "@/components/sections/Causes";
import { HowItHelps } from "@/components/sections/HowItHelps";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Our Programs — Sanjeevora Vidya Mission" },
      { name: "description", content: "Creating Sustainable Change Through Four Core Programs." },
      { property: "og:title", content: "Our Programs — Sanjeevora Vidya Mission" },
      { property: "og:description", content: "Creating Sustainable Change Through Four Core Programs." },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: () => (
    <SiteShell>
      <div className="gradient-soft py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl font-extrabold sm:text-5xl">Our Programs</h1>
          <p className="mt-3 mx-auto max-w-2xl text-foreground/70">Creating Sustainable Change Through Four Core Programs</p>
        </div>
      </div>
      <ProgramsComponent />
      <HowItHelps />
    </SiteShell>
  ),
});
