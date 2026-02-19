
export default function AvailableSoon() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-6 transition hover:shadow-sm">
      
      {/* Soft pastel accent bar */}
      <div className="absolute left-0 top-0 h-full w-1 bg-blush" />

      <div className="space-y-2 pl-2">
        <h2 className="text-lg font-semibold">Available Soon</h2>

        <p className="text-sm text-black/60">
          I’m actively building this section. Notes and resources will be added as I refine them.
        </p>

        <div className="pt-2 text-xs text-black/40">
          In progress · Updated regularly
        </div>
      </div>
    </section>
  );
}
