import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Loader2, MapPin, Phone, Mail } from "lucide-react";
import { sendContactMessage } from "@/lib/db";
import { Reveal } from "../site/Reveal";

export function Contact() {
  const [busy, setBusy] = useState(false);
  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setBusy(true);
    try {
      await sendContactMessage({
        full_name: String(fd.get("name") || "").trim(),
        email: String(fd.get("email") || "").trim(),
        subject: String(fd.get("subject") || "").trim(),
        message: String(fd.get("message") || "").trim(),
      });
      toast.success("Message sent. We'll respond within 1 business day.");
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      toast.error("Couldn't send. Please try again.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact Us</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Let's start a conversation</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <div className="rounded-3xl border border-border bg-card p-6">
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-primary" /><div><p className="text-sm font-semibold">Office</p><p className="text-sm text-muted-foreground">12, Green Avenue, New Delhi 110001</p></div></div>
              <div className="mt-4 flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-primary" /><div><p className="text-sm font-semibold">Phone</p><p className="text-sm text-muted-foreground">+91 98765 43210</p></div></div>
              <div className="mt-4 flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-primary" /><div><p className="text-sm font-semibold">Email</p><p className="text-sm text-muted-foreground">hello@sanjeevora.org</p></div></div>
            </div>
            <div className="aspect-[16/10] overflow-hidden rounded-3xl border border-border bg-secondary">
              <iframe
                title="Sanjeevora office location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.20%2C28.61%2C77.24%2C28.64&layer=mapnik"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
          <form onSubmit={onSubmit} className="grid gap-4 rounded-3xl border border-border bg-card p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input name="name" label="Name" required />
              <Input name="email" type="email" label="Email" required />
            </div>
            <Input name="subject" label="Subject" required />
            <div>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70">Message</label>
              <textarea name="message" rows={5} required className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary" />
            </div>
            <button disabled={busy} className="inline-flex items-center justify-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 disabled:opacity-60">
              {busy && <Loader2 className="h-4 w-4 animate-spin" />} Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-foreground/70">{label}</label>
      <input name={name} type={type} required={required} className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-primary" />
    </div>
  );
}