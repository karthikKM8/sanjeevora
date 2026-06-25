import { BookOpen, Stethoscope, Home } from "lucide-react";
import { Reveal } from "../site/Reveal";
import { Link } from "@tanstack/react-router";

const TIERS = [
  { amount: 800, icon: BookOpen, title: "Educational Materials", desc: "Notebooks, textbooks, uniforms and stationery for one child for a full school term." },
  { amount: 1200, icon: Stethoscope, title: "Healthcare Support", desc: "A complete health check-up, essential medicines, and follow-up care for one beneficiary." },
  { amount: 3000, icon: Home, title: "Community Development Package", desc: "Contribute to clean water access, sanitation, or livelihood training for a rural family." },
];

export function HowItHelps() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">How Your Donation Helps</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Every rupee, accounted for.
            </h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TIERS.map((t, i) => {
            const Icon = t.icon;
            return (
              <Reveal key={t.amount} delay={i * 0.08}>
                <div className="group relative flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl gradient-brand text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-5 font-display text-3xl font-extrabold text-foreground">
                    ₹{t.amount.toLocaleString("en-IN")}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-bold">{t.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-foreground/70">{t.desc}</p>
                  <Link
                    to="/donate"
                    search={{ amount: t.amount }}
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow transition group-hover:bg-foreground"
                  >
                    Give ₹{t.amount.toLocaleString("en-IN")}
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}