import Image from "next/image";
import WordPopup from "@/components/WordPopup";

export default function Notes31_2() {
  return (
    <div>
        <h3 className="mt-2 text-black/80 text-center font-semibold">
          31.2: Resistance and Reactance
        </h3>

        <ul className="mt-4 list-disc pl-5 text-black/80 space-y-3">
        <li>
            This chapter derives voltage-current relationships for individual circuit elements carrying a sinusoidal current
        </li>

        <li>
          The <u>voltage</u> V for a <u>current</u> of i = Icos(ωt) and a <u>resistance</u> of R is (IR)cos(ωt).
        </li>

        <li>
            The voltage for the same circuit with an inductor instead of a resistor is -IωLsin(ωt) or IωLcos(ωt + π/2). It's basically a cosine function with a "headstart". The amplitude of the voltage is IωL.
        </li>
        
        <li>
          <u>Inductive reactance</u> X<sub>L</sub> is the self-induced emf that opposes the changes in the current through an inductor. It increases with more rapid variation in current (increasing ω) and with a larger inductance L.
        </li>
        
        </ul>
    </div>
  );
}