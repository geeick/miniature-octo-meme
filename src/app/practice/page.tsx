"use client";

import { useEffect, useMemo, useState } from "react";

type PracticeProblem = {
  id: string;
  title: string;
  date?: string;
  prompt: string;
  solution: string;
  tags?: string[];
  images?: string[]; // paths under /public, e.g. "/practice/physics-1c/rl-diagram.png"
};

type CoursePractice = {
  courseId: string;
  title: string;
  blurb?: string;
  problems: PracticeProblem[];
};

const PRACTICE: CoursePractice[] = [
  {
    courseId: "physics-1c",
    title: "Physics 1C",
    blurb: "Circuits, magnetism, induction. Problems + solutions + common traps.",
    problems: [
      {
        id: "p1c-rl-001",
        title: "RL Step Response (Solve i(t))",
        date: "2026-02-19",
        tags: ["RL", "transients"],
        prompt:
          "An RL circuit with resistance R and inductance L is connected to a DC source V at t=0.\n\n(1) Derive i(t).\n(2) Find i(∞).\n(3) Identify the time constant.\n\nWrite your steps clearly.",
        solution:
          "Use KVL: V = L di/dt + Ri.\n\nRearrange: di/dt + (R/L)i = V/L.\nSolve first-order linear ODE.\nHomogeneous: i_h = C e^{-(R/L)t}.\nParticular: i_p = V/R.\nSo i(t) = V/R + C e^{-(R/L)t}.\nWith i(0)=0: 0 = V/R + C ⇒ C = -V/R.\n\nFinal:\n i(t) = (V/R)(1 - e^{-t/τ}), where τ = L/R.\n\ni(∞)=V/R.",
        images: ["/practice/physics-1c/rl-diagram.png"],
      },
      {
        id: "p1c-biot-001",
        title: "Biot–Savart: Field on Axis",
        date: "2026-02-20",
        tags: ["magnetism", "biot-savart"],
        prompt:
          "A circular loop of radius a carries current I.\n\n(1) Derive B at a point on the axis a distance x from the center.\n(2) Give limiting cases x>>a and x<<a.\n\nAssume μ0 is known.",
        solution:
          "Standard result for loop on-axis:\nB(x) = (μ0 I a^2) / (2 (a^2 + x^2)^{3/2}).\n\nLimits:\n- x >> a: B ≈ (μ0 I a^2)/(2 x^3) (dipole-like).\n- x << a: B ≈ μ0 I / (2a).",
        images: ["/practice/physics-1c/loop-axis.png", "/practice/physics-1c/geometry.png"],
      },
    ],
  },
  {
    courseId: "cs-180",
    title: "CS 180",
    blurb: "Algorithms practice: runtimes, proofs, DP, greedy, graphs.",
    problems: [
      {
        id: "cs180-dp-001",
        title: "DP: Weighted Interval Scheduling",
        date: "2026-02-12",
        tags: ["DP"],
        prompt:
          "Given intervals with (start, finish, value), compute max total value of non-overlapping intervals.\n\n(1) Define subproblem.\n(2) Write recurrence.\n(3) Give runtime.",
        solution:
          "Sort by finish time.\nLet p(j) = rightmost interval i<j that doesn't overlap j.\nLet OPT(j) = best value using intervals 1..j.\nRecurrence:\nOPT(j) = max( value[j] + OPT(p(j)), OPT(j-1) ).\nBase OPT(0)=0.\n\nCompute p(j) via binary search ⇒ O(n log n), DP O(n). Total O(n log n).",
        images: [],
      },
    ],
  },
];

function fmtDate(date?: string) {
  if (!date) return "";
  return date;
}

export default function PracticePage() {
  const [active, setActive] = useState<{ courseId: string; item: PracticeProblem } | null>(null);
  const [zoomed, setZoomed] = useState<string | null>(null);
  const [revealSolution, setRevealSolution] = useState(false);

  const courseMap = useMemo(() => {
    const m = new Map<string, CoursePractice>();
    for (const c of PRACTICE) m.set(c.courseId, c);
    return m;
  }, []);

  const closeAll = () => {
    setActive(null);
    setRevealSolution(false);
    setZoomed(null);
  };

  // ✅ Lock background scroll while modal is open (or zoom is open)
  useEffect(() => {
    const shouldLock = !!active || !!zoomed;
    if (!shouldLock) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [active, zoomed]);

  // close on ESC, basic keyboard handling
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (zoomed) {
          setZoomed(null);
          return;
        }
        closeAll();
        return;
      }

      if (!active) return;

      const course = courseMap.get(active.courseId);
      if (!course) return;

      const idx = course.problems.findIndex((p) => p.id === active.item.id);
      if (idx < 0) return;

      if (e.key === "ArrowRight") {
        const next = course.problems[idx + 1];
        if (next) {
          setActive({ courseId: course.courseId, item: next });
          setRevealSolution(false);
          setZoomed(null);
        }
      }

      if (e.key === "ArrowLeft") {
        const prev = course.problems[idx - 1];
        if (prev) {
          setActive({ courseId: course.courseId, item: prev });
          setRevealSolution(false);
          setZoomed(null);
        }
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active, zoomed, courseMap]);

  return (
    <div className="space-y-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold">Practice</h1>
        <p className="text-black/70">
          Click a problem to open it. Use <span className="font-medium">←</span>/<span className="font-medium">→</span>{" "}
          to move between problems. Press <span className="font-medium">Esc</span> to close.
        </p>
      </div>

      {/* Course sections */}
      <div className="space-y-12">
        {PRACTICE.map((course) => (
          <section key={course.courseId} className="space-y-4">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-semibold">{course.title}</h2>
                {course.blurb ? <p className="mt-1 text-sm text-black/60">{course.blurb}</p> : null}
              </div>
              <span className="text-sm text-black/50">{course.problems.length} problems</span>
            </div>

            {course.problems.length === 0 ? (
              <div className="rounded-2xl border border-black/10 bg-white p-5">
                <h3 className="font-semibold">Available Soon</h3>
                <p className="mt-1 text-sm text-black/60">I’m still building this set. Check back soon.</p>
              </div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                {course.problems.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setActive({ courseId: course.courseId, item: p });
                      setRevealSolution(false);
                      setZoomed(null);
                    }}
                    className="text-left rounded-2xl border border-black/10 bg-white p-5 hover:shadow-sm transition"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold">{p.title}</h3>
                        {p.tags?.length ? (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {p.tags.map((t) => (
                              <span
                                key={t}
                                className="rounded-full border border-black/10 px-2 py-0.5 text-xs text-black/70"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                      {p.date ? <span className="text-sm text-black/50">{fmtDate(p.date)}</span> : null}
                    </div>

                    <p className="mt-3 text-sm text-black/70 line-clamp-3 whitespace-pre-wrap">{p.prompt}</p>

                    {p.images?.length ? (
                      <p className="mt-3 text-xs text-black/50">
                        {p.images.length} image{p.images.length === 1 ? "" : "s"} attached
                      </p>
                    ) : null}
                  </button>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Problem modal */}
      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-6"
          onClick={closeAll} // ✅ click backdrop closes
        >
          <div
            onClick={(e) => e.stopPropagation()} // ✅ prevent inside clicks from closing
            className="relative w-full max-w-4xl h-[92vh] rounded-2xl bg-white shadow-xl border border-black/10 overflow-hidden"
          >
            {/* header */}
            <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-black/10 bg-white px-5 py-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-sm text-black/60">
                  <span className="font-medium text-black/70">
                    {courseMap.get(active.courseId)?.title ?? "Course"}
                  </span>
                  <span>•</span>
                  {active.item.date ? <span>{fmtDate(active.item.date)}</span> : <span>No date</span>}
                </div>
                <h3 className="mt-1 font-semibold text-lg truncate">{active.item.title}</h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setRevealSolution((v) => !v)}
                  className="rounded-xl border border-black/10 px-3 py-2 text-sm hover:bg-black/[0.03]"
                >
                  {revealSolution ? "Hide solution" : "Reveal solution"}
                </button>

                <button
                  onClick={closeAll}
                  className="rounded-xl border border-black/10 px-3 py-2 text-sm hover:bg-black/[0.03]"
                >
                  Close
                </button>
              </div>
            </div>

            {/* body */}
            <div className="h-[calc(92vh-72px)] overflow-y-auto overscroll-contain px-5 py-5 space-y-6">
              {/* prompt */}
              <div className="rounded-2xl border border-black/10 bg-white p-5">
                <h4 className="font-semibold">Problem</h4>
                <p className="mt-2 text-black/80 whitespace-pre-wrap">{active.item.prompt}</p>

                {/* images */}
                {active.item.images?.length ? (
                  <div className="mt-5 space-y-4">
                    <h5 className="text-sm font-semibold text-black/70">Images</h5>
                    {active.item.images.map((src, i) => (
                      <div
                        key={i}
                        className="overflow-hidden rounded-xl border border-black/10 bg-black/[0.02]"
                      >
                        <img
                          src={src}
                          alt={`${active.item.title} image ${i + 1}`}
                          className="w-full object-contain cursor-zoom-in"
                          onClick={() => setZoomed(src)}
                        />
                      </div>
                    ))}
                    <p className="text-xs text-black/50">Tip: click an image to zoom.</p>
                  </div>
                ) : null}
              </div>

              {/* solution */}
              {revealSolution ? (
                <div className="rounded-2xl border border-black/10 bg-white p-5">
                  <h4 className="font-semibold">Solution</h4>
                  <p className="mt-2 text-black/80 whitespace-pre-wrap">{active.item.solution}</p>
                </div>
              ) : (
                <div className="rounded-2xl border border-black/10 bg-white p-5">
                  <h4 className="font-semibold">Solution</h4>
                  <p className="mt-1 text-sm text-black/60">Click “Reveal solution” when you’re ready.</p>
                </div>
              )}

              {/* footer hint */}
              <div className="text-xs text-black/50">
                Keyboard: <span className="font-medium">←</span>/<span className="font-medium">→</span> to navigate •{" "}
                <span className="font-medium">Esc</span> to close
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {/* zoom overlay */}
      {zoomed ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setZoomed(null)}
        >
          <img
            src={zoomed}
            alt="Zoomed practice image"
            className="max-h-[92vh] max-w-[92vw] rounded-2xl bg-white"
          />
        </div>
      ) : null}
    </div>
  );
}