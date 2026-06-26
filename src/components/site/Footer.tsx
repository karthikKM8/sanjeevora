import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube, Mail, MapPin, Phone, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-to-b from-secondary/40 to-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Jeevora Foundation" width={36} height={36} className="h-9 w-9 object-contain" />
              <span className="font-display text-xl font-bold">Jeevora Foundation</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground">
              Jeevora Foundation is dedicated to empowering underprivileged children and young adults through nutrition, education, mentorship, skill development, and career opportunities. Together, we are building a future where every child has the chance to learn, grow, and succeed.
            </p>
            <div className="mt-4 flex gap-2">
              {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary shadow-sm transition-colors hover:bg-primary hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/mission" className="hover:text-primary">Our Mission</Link></li>
              <li><Link to="/programs" className="hover:text-primary">Our Programs</Link></li>
              <li><Link to="/volunteer" className="hover:text-primary">Volunteer</Link></li>
              <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> No. 33, Top Floor, CBI Main Road, Pilappa Garden, Ganganagar, Bengaluru – 560032</li>
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /> +91 70198 27645</li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /> hello@jeevorafoundation.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Get Involved
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground mb-4">
              <li><Link to="/donate" className="hover:text-primary">Donate</Link></li>
              <li><Link to="/volunteer" className="hover:text-primary">Volunteer</Link></li>
              <li><Link to="/partner" className="hover:text-primary">Partner With Us</Link></li>
            </ul>
            <Link
              to="/donate"
              className="inline-flex items-center gap-2 rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-white shadow"
            >
              <Heart className="h-4 w-4 fill-current" /> Donate now
            </Link>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:grid-cols-4">
          <Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
          <Link to="/terms-conditions" className="hover:text-primary">Terms & Conditions</Link>
          <Link to="/refund-policy" className="hover:text-primary">Refund Policy</Link>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 Jeevora Foundation. Empowering Children Through Food, Education, Opportunity & Hope.</p>
          <p>"Together, we can build a future where every child has the opportunity to dream, learn, and thrive."</p>
        </div>
      </div>
    </footer>
  );
}