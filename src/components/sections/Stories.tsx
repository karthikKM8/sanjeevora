import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import story1 from "@/assets/story-1.jpg";
import story2 from "@/assets/story-2.jpg";
import story3 from "@/assets/story-3.jpg";
import { Reveal } from "../site/Reveal";

const STORIES = [
  {
    img: story1,
    name: "Priya, 14 — Bihar",
    story:
      "Priya was helping her mother in the fields at age 9. Today, she's the first girl in her village to qualify for the district science olympiad.",
    impact: "Back in school. Full scholarship secured.",
  },
  {
    img: story2,
    name: "Lakshmi, 42 — Rajasthan",
    story:
      "After our six-month tailoring program, Lakshmi started a small atelier. She now employs four women from her self-help group.",
    impact: "Earns 4× her previous income.",
  },
  {
    img: story3,
    name: "Ramesh, 67 — Uttar Pradesh",
    story:
      "Ramesh lost his eyesight to untreated cataracts. Our mobile clinic restored his sight in a single afternoon — and gave him his independence back.",
    impact: "Full vision restored.",
  },
];

export function Stories() {
  const [i, setI] = useState(0);
  const s = STORIES[i];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Success Stories</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Real people. Real change.
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 grid gap-8 overflow-hidden rounded-3xl border border-border bg-card shadow-sm md:grid-cols-2">
            <img
              key={s.img}
              src={s.img}
              alt={s.name}
              loading="lazy"
              width={600}
              height={600}
              className="h-full max-h-[420px] w-full object-cover"
            />
            <div className="flex flex-col justify-between p-7 sm:p-10">
              <div>
                <Quote className="h-8 w-8 text-primary" />
                <p className="mt-4 font-display text-lg font-medium leading-snug text-foreground sm:text-xl">
                  "{s.story}"
                </p>
                <p className="mt-4 text-sm font-semibold text-foreground">{s.name}</p>
                <p className="mt-1 inline-block rounded-full bg-green-tint px-3 py-1 text-xs font-semibold text-primary">
                  {s.impact}
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {STORIES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setI(idx)}
                      aria-label={`Story ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === i ? "w-8 bg-primary" : "w-3 bg-border"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setI((i - 1 + STORIES.length) % STORIES.length)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setI((i + 1) % STORIES.length)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}