const BUILD_LOG = [
  {
    title: "Started portfolio site",
    date: "2026-02-19",
    summary: "Set up Next.js + routing. Hardcoding content first.",
    body: "Longer writeup here...\n- What worked\n- What broke\n- Next steps",
  },
];

export default function BuildLogPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Build Log</h1>
      <p className="text-black/70">Short updates. Hardcoded entries.</p>

      <div className="space-y-3">
        {BUILD_LOG.map((e, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-black/10 bg-white p-5"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">{e.title}</h2>
              <span className="text-sm text-black/50">{e.date}</span>
            </div>
            {e.summary ? (
              <p className="mt-2 text-sm text-black/70">{e.summary}</p>
            ) : null}
            <p className="mt-3 whitespace-pre-wrap text-black/80">{e.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
