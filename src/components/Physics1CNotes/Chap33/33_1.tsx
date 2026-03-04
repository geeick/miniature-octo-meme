import Image from "next/image";
import WordPopup from "@/components/WordPopup";

export default function Notes33() {
  return (
    <div>
      <h3 className="mt-2 text-black/80 text-center font-semibold">
        33: Special Relativity
      </h3>

      <ul className="mt-4 list-disc pl-5 text-black/80 space-y-3">
        <li>
          <strong>Experimental Fact:</strong> Speed of light is the same in all
          inertial frames
        </li>

        <li>
          Einstein: Take this as a fundamental postulate
        </li>

        <li>
          Galilean Transformation (classical mechanics)
          <ul className="mt-2 list-disc pl-5 text-black/80 space-y-2">
            <li>x&apos; = x − ut</li>
            <li>t&apos; = t (time is absolute)</li>
            <li>Valid only when u ≪ c</li>
          </ul>
        </li>

        <li>
          <strong>Lorentz Transformation</strong>
          <ul className="mt-2 list-disc pl-5 text-black/80 space-y-2">
            <li>x&apos; = γ(x − ut)</li>
            <li>t&apos; = γ(t − ux / c²)</li>
            <li>x = γ(x&apos; + ut&apos;)</li>
            <li>t = γ(t&apos; + ux&apos; / c²)</li>
            <li>
              γ = 1 / √(1 − u² / c²)
            </li>
          </ul>
        </li>

        <li>
          <strong>Spacetime</strong>
          <ul className="mt-2 list-disc pl-5 text-black/80 space-y-2">
            <li>
              In classical mechanics: space and time are treated as separate
              entities
            </li>
            <li>Space: 3D</li>
            <li>Time: absolute</li>
            <li>
              In special relativity: spacetime is a 4D structure combining space
              and time
            </li>
          </ul>
        </li>

        <li>
          <strong>Spacetime Interval</strong>
          <ul className="mt-2 list-disc pl-5 text-black/80 space-y-2">
            <li>
              ds² = c²dt² − (dx² + dy² + dz²)
            </li>
            <li>Invariant in all inertial frames</li>
          </ul>
        </li>

        <li>
          <strong>Relativity of Simultaneity</strong>
          <ul className="mt-2 list-disc pl-5 text-black/80 space-y-2">
            <li>
              <WordPopup trigger="Event" title="What is an Event?">
                <p>
                  An event is a specific point in spacetime defined by
                  coordinates (x, t).
                </p>
              </WordPopup>
            </li>

            <li>
              Frame S:
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Event 1: (x₁, t₁)</li>
                <li>Event 2: (x₂, t₂)</li>
                <li>Δx = x₂ − x₁</li>
                <li>Δt = t₂ − t₁</li>
              </ul>
            </li>

            <li>
              Frame S&apos;:
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>x&apos; = γ(x − ut)</li>
                <li>t&apos; = γ(t − ux / c²)</li>
                <li>Δx&apos; = γ(Δx − uΔt)</li>
                <li>Δt&apos; = γ(Δt − uΔx / c²)</li>
              </ul>
            </li>

            <li>
              If two events are simultaneous in S (Δt = 0) but Δx ≠ 0:
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Δt&apos; = −γ(uΔx / c²) ≠ 0</li>
                <li>Simultaneity is frame dependent</li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <strong>Causality</strong>
          <ul className="mt-2 list-disc pl-5 text-black/80 space-y-2">
            <li>
              Principle that a cause precedes its effect in all inertial frames
            </li>
            <li>Nothing travels faster than light</li>
          </ul>
        </li>

        <li>
          <strong>Case 1: Causal Events</strong>
          <ul className="mt-2 list-disc pl-5 text-black/80 space-y-2">
            <li>Event 1: Apple falls from a tree (cause)</li>
            <li>Event 2: Apple hits Newton’s head (effect)</li>
            <li>
              For time order to reverse:
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Δt&apos; = γ(Δt − uΔx / c²) &lt; 0</li>
                <li>This would require Δx &gt; cΔt</li>
                <li>
                  That implies faster-than-light propagation, which is
                  impossible
                </li>
              </ul>
            </li>
            <li>Causality is preserved</li>
          </ul>
        </li>

        <li>
          <strong>Case 2: Non-Causal Events</strong>
          <ul className="mt-2 list-disc pl-5 text-black/80 space-y-2">
            <li>Event 1: Emma takes notes in classroom</li>
            <li>Event 2: Jamie checks phone next to Emma</li>
            <li>
              If events are spacelike separated:
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>Δt&apos; = γ(Δt − uΔx / c²)</li>
                <li>Time order can reverse in another frame</li>
                <li>No causal relationship</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}