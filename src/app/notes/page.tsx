import Link from "next/link";

const CLASSES = [
  {
    slug: "physics-1c",
    title: "Physics 1C",
    description: "E&M, circuits, magnetism, Maxwell.",
  },
  {
    slug: "cs-180",
    title: "CS 180",
    description: "Algorithms + proofs.",
  },
];

export default function NotesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Class Notes</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        {CLASSES.map((c) => (
          <Link
            key={c.slug}
            href={`/notes/${c.slug}`}
            className="rounded-2xl border border-black/10 bg-white p-5 hover:shadow-sm transition"
          >
            <h2 className="font-semibold">{c.title}</h2>
            <p className="mt-2 text-sm text-black/60">{c.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
