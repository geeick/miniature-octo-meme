"use client";

import Image from "next/image";
import WordPopup from "@/components/WordPopup";

const FORMULAS_PDF_PATH = "/physics-1c/important-formulas.pdf";

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

      <h2 className="font-semibold text-center">Alternating Currents</h2>

      <section className="rounded-2xl border border-black/10 bg-white p-5">
        <h3 className="mt-2 text-black/80 text-center font-semibold">
          31.1: Phasors and Alternating Current
        </h3>

        <ul className="mt-4 list-disc pl-5 text-black/80 space-y-3">
          <li>
            Coil of wire rotating with constant angular velocity in a magnetic
            field causes an alternating current through emf
          </li>

          <li>
            AC Source Symbol:
            <div className="flex justify-center">
              <Image
                src="/physics-1c/ac-source-symbol.png"
                alt="AC Source Symbol"
                width={200}
                height={80}
                className="mt-2 rounded-lg"
              />
            </div>
          </li>

          <li>v = Vcos(ωt)</li>

          <li>
            Phasor Diagrams
            <div className="flex justify-center">
              <iframe
                src="https://www.youtube.com/embed/mKFvAEeLKTQ?start=37&autoplay=1&mute=1&loop=1&playlist=mKFvAEeLKTQ"
                width="400"
                height="225"
                allow="autoplay"
                className="mt-2 rounded-lg"
              />
            </div>
          </li>

          <li>
            Rectified alternating current
            <ul className="mt-2 list-disc pl-5 text-black/80 space-y-2">
              <li>
                I<sub>rav</sub> = Rectified alternating current
              </li>
              <li>
                It's essentially the average value of the current, which is 0.637
                times the maximum current (I<sub>max</sub>) for a sinusoidal AC
                waveform.
              </li>
              <li>
                To get one-way current we can use{" "}
                <WordPopup trigger="diodes" title="What is a Diode?">
                  <p>
                    A device that conducts better in one direction than in the other;
                    an ideal diode has zero resistance for one direction 
                    of current and infinite resistance for the other.
                  </p>

                  <ul className="mt-3 list-disc pl-5 space-y-1">
                    <li>Used for rectifying AC into DC</li>
                    <li>Forward bias: conducts</li>
                    <li>Reverse bias: blocks</li>
                  </ul>
                </WordPopup>
                . A diode is a device that conducts better in one direction than
                in the other.
              </li>
            </ul>
          </li>
        </ul>
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