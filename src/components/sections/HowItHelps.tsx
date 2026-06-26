import { Heart, BookOpen, Sparkles, GraduationCap } from "lucide-react";
import { Reveal } from "../site/Reveal";

const TIERS = [
  { amount: 1, icon: Heart, title: "Step 1: Nourish", desc: "We begin by ensuring children have access to nutritious meals and essential support." },
  { amount: 2, icon: BookOpen, title: "Step 2: Educate", desc: "We provide educational resources, mentoring, and learning opportunities to keep children in school." },
  { amount: 3, icon: Sparkles, title: "Step 3: Empower", desc: "Children develop confidence, leadership skills, digital literacy, and practical knowledge." },
  { amount: 4, icon: GraduationCap, title: "Step 4: Build Futures", desc: "Young adults receive career guidance, skill training, and opportunities that help them become independent and successful." },
];

export function HowItHelps() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">How We Create Impact</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Every Child's Journey Matters
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {TIERS.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.amount} delay={i * 0.08}>
                <div className="group relative flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-brand text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold">{t.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-foreground/70">{t.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}