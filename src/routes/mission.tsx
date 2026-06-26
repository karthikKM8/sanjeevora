import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { Target, Eye } from "lucide-react";

export const Route = createFileRoute("/mission")({
  head: () => ({
    meta: [
      { title: "Our Mission & Vision — Jeevora Foundation" },
      { name: "description", content: "Empowering underprivileged children and young adults to build independent, confident, and meaningful lives." },
      { property: "og:title", content: "Our Mission & Vision — Jeevora Foundation" },
      { property: "og:description", content: "Empowering underprivileged children and young adults to build independent, confident, and meaningful lives." },
      { property: "og:url", content: "/mission" },
    ],
    links: [{ rel: "canonical", href: "/mission" }],
  }),
  component: () => (
    <SiteShell>
      <div className="gradient-soft py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Purpose & Goal</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl lg:text-6xl">Our Mission & Vision</h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
            Building brighter, more independent futures for every child, guided by a steadfast commitment to equality and opportunity.
          </p>
        </div>
      </div>
      
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-secondary/30" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="group h-full rounded-[2rem] border border-border bg-green-tint/40 p-10 backdrop-blur-sm transition-all duration-300 hover:bg-green-tint/60 hover:shadow-2xl hover:shadow-primary/10">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl gradient-brand text-white shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                  <Target className="h-8 w-8" />
                </div>
                <h2 className="mt-8 font-display text-3xl font-extrabold text-foreground">Our Mission</h2>
                <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                  To empower underprivileged children and young adults by providing <strong className="text-foreground">nutritious food, quality education, mentorship, skill development, and career opportunities</strong>, enabling them to build independent, confident, and meaningful lives.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="group h-full rounded-[2rem] border border-border bg-sky-tint/40 p-10 backdrop-blur-sm transition-all duration-300 hover:bg-sky-tint/60 hover:shadow-2xl hover:shadow-accent-blue/10">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-blue to-blue-600 text-white shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Eye className="h-8 w-8" />
                </div>
                <h2 className="mt-8 font-display text-3xl font-extrabold text-foreground">Our Vision</h2>
                <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                  To create a future where <strong className="text-foreground">every child, regardless of their socioeconomic background, has equal access</strong> to education, opportunity, and the support needed to reach their full potential and become a positive force in society.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteShell>
  ),
});
