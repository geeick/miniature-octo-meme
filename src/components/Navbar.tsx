import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/notes", label: "Class Notes" },
  { href: "/build-log", label: "Build Log" },
  { href: "/practice", label: "Practice" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-paper/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Georgia
        </Link>

        <nav className="hidden gap-4 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm hover:underline">
              {n.label}
            </Link>
          ))}
        </nav>

        <a
          href="/resume.pdf"
          className="rounded-xl border border-black/10 bg-mist px-3 py-2 text-sm font-medium hover:opacity-90"
          download
        >
          Download Resume
        </a>
      </div>
    </header>
  );
}