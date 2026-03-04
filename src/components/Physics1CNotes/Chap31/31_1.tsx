import Image from "next/image";
import WordPopup from "@/components/WordPopup";

export default function Notes31_1() {
  return (
    <div>
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
                It&apos;s essentially the average value of the current, which is
                0.637 times the maximum current (I<sub>max</sub>) for a sinusoidal
                AC waveform.
              </li>
              <li>
                To get one-way current we can use{" "}
                <WordPopup trigger="diodes" title="What is a Diode?">
                  <p>
                    A device that conducts better in one direction than in the
                    other; an ideal diode has zero resistance for one direction
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
              <li>
                We can convert a rectifying ammeter into a volmeter by adding a
                series resistor
              </li>
            </ul>
          </li>

          <li>
            Root mean squared value
            <ul className="mt-2 list-disc pl-5 text-black/80 space-y-2">
              <li>
                Another way to describe a pos/neg current is the root-mean-square
                (rms) value
              </li>
              <li>
                This makes it so it is never negative unless negative at every
                point
              </li>
              <li>
                The average of the square of the current is relevant because the
                rate at which energy dissipates in a resistor is i²R, so{" "}
                <u>
                  i²<sub>av</sub>R = I<sub>rms</sub>²R
                </u>
              </li>
              <li>The rms value of a sinusoidally varying current is A/sqrt(2)</li>
            </ul>
          </li>
        </ul>
    </div>
  );
}