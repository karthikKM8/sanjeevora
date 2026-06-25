import education from "@/assets/cause-education.jpg";
import healthcare from "@/assets/cause-healthcare.jpg";
import women from "@/assets/cause-women.jpg";
import child from "@/assets/cause-child.jpg";
import environment from "@/assets/cause-environment.jpg";
import rural from "@/assets/cause-rural.jpg";
import { BookOpen, HeartPulse, Sparkles, Baby, Leaf, Home as HomeIcon } from "lucide-react";

export const CAUSES = [
  { slug: "education", title: "Education Support", image: education, icon: BookOpen, description: "Books, fees, and after-school programs that keep children in classrooms — not factories." },
  { slug: "healthcare", title: "Healthcare Assistance", image: healthcare, icon: HeartPulse, description: "Mobile clinics, free check-ups, and life-saving medicines for the families who need them most." },
  { slug: "women", title: "Women Empowerment", image: women, icon: Sparkles, description: "Vocational training and micro-enterprise support so women can earn, lead, and rise." },
  { slug: "child", title: "Child Welfare", image: child, icon: Baby, description: "Nutrition, shelter, and protection for children at risk across underserved communities." },
  { slug: "environment", title: "Environmental Protection", image: environment, icon: Leaf, description: "Tree plantation drives, clean water access, and climate-resilient community initiatives." },
  { slug: "rural", title: "Rural Development", image: rural, icon: HomeIcon, description: "Infrastructure, livelihood, and dignity projects co-designed with the villages we serve." },
] as const;

export type Cause = (typeof CAUSES)[number];