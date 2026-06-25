import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Causes } from "@/components/sections/Causes";
import { Stories } from "@/components/sections/Stories";
import { Impact } from "@/components/sections/Impact";
import { HowItHelps } from "@/components/sections/HowItHelps";
import { VolunteerForm } from "@/components/sections/VolunteerForm";
import { Testimonials } from "@/components/sections/Testimonials";
import { Updates } from "@/components/sections/Updates";
import { Partners } from "@/components/sections/Partners";
import { Newsletter } from "@/components/sections/Newsletter";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sanjeevora — Together We Can Create Lasting Change" },
      { name: "description", content: "Support education, healthcare, environmental sustainability, and community development through Sanjeevora. Donate today." },
      { property: "og:title", content: "Sanjeevora — Together We Can Create Lasting Change" },
      { property: "og:description", content: "Support education, healthcare, environmental sustainability, and community development through Sanjeevora." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteShell>
      <Hero />
      <About />
      <Causes />
      <Stories />
      <Impact />
      <HowItHelps />
      <VolunteerForm />
      <Testimonials />
      <Updates />
      <Partners />
      <Newsletter />
      <Contact />
    </SiteShell>
  );
}
