export default function ProjectsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-black/70">
        I’m not showcasing projects yet. This page will grow as I ship new work.
      </p>

      <div className="rounded-2xl border border-black/10 bg-white p-6">
        <p className="text-sm text-black/70">
          (Available soon.)
        </p>
        <ul className="mt-3 list-disc pl-5 text-sm text-black/70">
          <li>What it does</li>
          <li>Stack</li>
          <li>Hard part you solved</li>
          <li>What you would improve next</li>
          <li>Links: GitHub, demo, write-up</li>
        </ul>
      </div>
    </div>
  );
}