import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";

import img1 from "@/assets/1 (1).jpeg";
import img2 from "@/assets/1 (2).jpeg";
import img3 from "@/assets/1 (3).jpeg";
import img4 from "@/assets/1 (4).jpeg";
import img5 from "@/assets/1 (5).jpeg";
import img6 from "@/assets/1 (6).jpeg";
import img7 from "@/assets/1 (7).jpeg";
import img8 from "@/assets/1 (8).jpeg";

const GALLERY_IMAGES = [
  { src: img1, alt: "Impact 1", className: "md:col-span-2 md:row-span-2" },
  { src: img2, alt: "Impact 2", className: "md:col-span-1 md:row-span-1" },
  { src: img5, alt: "Impact 5", className: "md:col-span-1 md:row-span-1" },
  { src: img3, alt: "Impact 3", className: "md:col-span-2 md:row-span-1" },
  { src: img4, alt: "Impact 4", className: "md:col-span-1 md:row-span-2" },
  { src: img6, alt: "Impact 6", className: "md:col-span-1 md:row-span-1" },
  { src: img7, alt: "Impact 7", className: "md:col-span-2 md:row-span-1" },
  { src: img8, alt: "Impact 8", className: "md:col-span-2 md:row-span-1" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Jeevora Foundation" },
      { name: "description", content: "Explore the moments of joy, learning, and transformation captured across our programs." },
      { property: "og:title", content: "Gallery — Jeevora Foundation" },
      { property: "og:description", content: "Explore the moments of joy, learning, and transformation captured across our programs." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: () => (
    <SiteShell>
      <div className="gradient-soft py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Gallery</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl lg:text-6xl">Moments of Impact</h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-foreground/70">
            A visual journey through the lives we touch, the smiles we share, and the futures we help build.
          </p>
        </div>
      </div>
      
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[250px] md:gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <Reveal key={i} delay={i * 0.05} className={`h-full ${img.className || ""}`}>
                <div 
                  className="group relative h-full w-full overflow-hidden rounded-2xl bg-muted shadow-sm transition-all hover:shadow-xl hover:shadow-primary/20"
                >
                  <div className="absolute inset-0 z-10 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  ),
});
