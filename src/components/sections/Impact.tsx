import { Reveal } from "../site/Reveal";
import { Counter } from "../site/Counter";
import { IndianRupee, Users, CheckCircle2, HandHeart } from "lucide-react";

const ITEMS = [
  { icon: Users, label: "Children Out of School", value: 1.17, prefix: "", suffix: "M" },
  { icon: CheckCircle2, label: "Children Under Five Stunted", value: 35.5, prefix: "", suffix: "%" },
  { icon: HandHeart, label: "Drop Out During Secondary", value: 10, prefix: "1 in ", suffix: "" },
];

export function Impact() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 gradient-brand opacity-95" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-90">The Reality We Face</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              The Problems That Still Remain Unseen
            </h2>
            <p className="mt-4 text-sm opacity-90 text-center max-w-2xl mx-auto">
              Every child deserves the opportunity to learn, grow, and dream. Yet millions across India continue to face challenges that prevent them from reaching their full potential.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-3 mx-auto max-w-5xl">
          {ITEMS.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.label} delay={i * 0.08}>
                <div className="rounded-3xl bg-white/15 p-6 text-white shadow-lg backdrop-blur">
                  <Icon className="h-7 w-7 opacity-90" />
                  <div className="mt-4 font-display text-3xl font-extrabold sm:text-4xl">
                    {"prefix" in it ? it.prefix : ""}
                    <Counter to={it.value} suffix={it.suffix} />
                  </div>
                  <p className="mt-1 text-sm opacity-90">{it.label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.3}>
          <div className="mt-12 text-center text-white/90 text-sm max-w-3xl mx-auto">
            These challenges inspire our commitment to creating opportunities that transform lives through education, nutrition, mentorship, and community support.
          </div>
        </Reveal>
      </div>
    </section>
  );
}