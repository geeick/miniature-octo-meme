export default function Hero() {
  return (
    <section className="rounded-2xl border border-black/10 bg-white p-8">
      <div className="flex flex-col gap-4">

        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          CS + embedded + education tools. I like hard problems and clean UX.
        </h1>

        <p className="max-w-2xl text-black/70">
          This is my space for projects, class notes, build logs, and practice problems.
          I’m building in public and keeping my notes useful.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a href="/notes" className="rounded-xl bg-blush px-4 py-2 text-sm font-medium hover:opacity-90">
            Read Physics 1C Notes
          </a>
          <a href="/build-log" className="rounded-xl bg-sand px-4 py-2 text-sm font-medium hover:opacity-90">
            View Build Log
          </a>
          <a href="/practice" className="rounded-xl bg-mist px-4 py-2 text-sm font-medium hover:opacity-90">
            Practice Problems
          </a>
        </div>
      </div>
    </section>
  );
}