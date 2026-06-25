import { Reveal } from "../site/Reveal";
import { Counter } from "../site/Counter";
import { Target, Eye } from "lucide-react";

const STATS = [
  { label: "Children Supported", value: 24500, suffix: "+" },
  { label: "Trees Planted", value: 86000, suffix: "+" },
  { label: "Communities Reached", value: 320, suffix: "" },
  { label: "Healthcare Beneficiaries", value: 41000, suffix: "+" },
];

export function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">About Sanjeevora</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Compassion, translated into action.
            </h2>
            <p className="mt-4 text-base text-foreground/70">
              Founded in 2014, Sanjeevora works alongside India's most underserved
              communities — listening first, building together, and staying long
              enough to see change take root.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-green-tint/60 p-7">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">Our Mission</h3>
              <p className="mt-2 text-foreground/75">
                To unlock dignity, education, and opportunity for every child and
                family we serve — through honest, transparent, community-led work.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-border bg-sky-tint/60 p-7">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-blue text-white">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">Our Vision</h3>
              <p className="mt-2 text-foreground/75">
                A more equal India — where access to learning, healthcare, and a
                healthy planet is a birthright, not a privilege.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 rounded-3xl border border-border bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="text-center">
                <div className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}