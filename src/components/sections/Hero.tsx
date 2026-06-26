import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import hero from "@/assets/1 (1).jpeg";
import { QuickDonate } from "./QuickDonate";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-soft" aria-hidden />
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent-blue/20 blur-3xl" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-20 pt-10 sm:px-6 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:gap-8 lg:px-8 lg:pt-12">
        <div className="flex flex-col justify-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-3.5 py-1.5 text-xs font-medium text-primary shadow-sm backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Trusted by 12,000+ donors across India
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Every Child Deserves <br />
            <span className="text-gradient-brand">Food, Education & Opportunity</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-xl text-base text-foreground/70 sm:text-lg"
          >
            <strong>Poverty should never decide a child's future.</strong><br/><br/>
            At Jeevora Foundation, we are committed to transforming lives by providing nutritious meals, quality education, mentorship, and opportunities that empower children to build brighter, more independent futures. Every contribution helps create lasting change—one child, one family, and one community at a time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:scale-[1.03]"
            >
              Donate Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-primary hover:text-primary"
            >
              Learn More
            </Link>
          </motion.div>


        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center justify-start gap-8 lg:items-end"
        >
          <QuickDonate />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden w-full max-w-md overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10 lg:block"
          >
            <img
              src={hero}
              alt="Children at a Sanjeevora-supported school smiling and learning"
              width={1600}
              height={1024}
              className="h-64 w-full object-cover"
            />
          </motion.div>
        </motion.div>

        <div className="lg:hidden">
          <img
            src={hero}
            alt="Children smiling in a Sanjeevora-supported classroom"
            width={1600}
            height={1024}
            className="rounded-3xl border border-border object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}