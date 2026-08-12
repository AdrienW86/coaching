import { Hero } from "@/components/Hero";
import { FeaturesAndTestimonials } from "@/components/FeaturesAndTestimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <main className="flex-1">
        <Hero />
        <FeaturesAndTestimonials />
      </main>
    </div>
  );
}