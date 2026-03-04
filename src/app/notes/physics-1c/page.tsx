"use client";

import Notes31_1 from "@/components/Physics1CNotes/Chap31/31_1";
import Notes31_2 from "@/components/Physics1CNotes/Chap31/31_2";
import Notes33_1 from "@/components/Physics1CNotes/Chap33/33_1";


const FORMULAS_PDF_PATH = "physics-1c/1C-Physics-Formula-Sheet.pdf";

export default function Physics1CPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-center">Physics 1C</h1>

      <section className="rounded-2xl border border-black/10 bg-white p-5">
        <h2 className="font-semibold text-center">Key Concepts</h2>
        <ul className="mt-2 list-disc pl-5 text-black/80">
          <li>Magnetic Field and Magnetic Forces</li>
          <li>Sources of Magnetic Field</li>
          <li>Electromagnetic Induction</li>
          <li>Inductance</li>
          <li>Alternating Currents</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-black/10 bg-white p-5">
      <h2 className="font-semibold text-center">Alternating Currents</h2>
      <Notes31_1 />
      <br></br>
      <Notes31_2 />
      </section>

      <section className="rounded-2xl border border-black/10 bg-white p-5">
      <h2 className="font-semibold text-center">Special Relativity</h2>
      <Notes33_1 />
      <br></br>
      </section>

      <section className="rounded-2xl border border-black/10 bg-white p-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-semibold">Important Formulas</h2>
          <a
            href={FORMULAS_PDF_PATH}
            target="_blank"
            rel="noreferrer"
            className="text-sm underline text-black/70 hover:text-black"
          >
            View PDF
          </a>
        </div>
      </section>
    </div>
  );
}