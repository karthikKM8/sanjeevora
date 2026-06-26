import education from "@/assets/1 (2).jpeg";
import healthcare from "@/assets/1 (3).jpeg";
import women from "@/assets/1 (4).jpeg";
import child from "@/assets/1 (5).jpeg";
import { BookOpen, Utensils, Sparkles, GraduationCap } from "lucide-react";

export const CAUSES = [
  { slug: "nutrition", title: "Nutrition Support", image: child, icon: Utensils, description: "Healthy children learn better. We provide nutritious meals and food support to help children stay healthy, improve school attendance, and focus on their education." },
  { slug: "education", title: "Education Support", image: education, icon: BookOpen, description: "Education opens the door to endless possibilities. Our education initiatives include school supplies, learning resources, digital education support, scholarships, and academic mentoring." },
  { slug: "child-development", title: "Child Development", image: healthcare, icon: Sparkles, description: "Building confidence beyond the classroom. We encourage leadership, creativity, life skills, sports, arts, and emotional well-being to help children become confident and responsible." },
  { slug: "career-readiness", title: "Career Readiness", image: women, icon: GraduationCap, description: "Preparing young adults for successful careers. Through skill development, digital literacy, communication training, mentorship, and career guidance, we help young adults become job-ready." },
] as const;

export type Cause = (typeof CAUSES)[number];