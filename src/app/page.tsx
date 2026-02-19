import Hero from "@/components/Hero";
import Card from "@/components/Card";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <Hero />

      <section className="grid gap-4 md:grid-cols-3">
        <Card title="Projects" href="/projects" blurb="Available soon" badge="Soon" />
        <Card title="Class Notes" href="/notes" blurb="Physics 1C first. More classes later." badge="Live" />
        <Card title="Practice" href="/practice" blurb="Problems, solutions, and common traps." badge="Live" />
      </section>
    </div>
  );
}