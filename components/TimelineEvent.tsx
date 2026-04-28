/**
 * TimelineEvent — centered event block for itineraries
 *
 * Vertical hierarchy: TIME (big tracked accent) → SPOT NAME (huge cream display)
 * → ADDRESS (chrome small caps) → DESCRIPTION (centered body text).
 *
 * Used by Day-by-Day, Night-by-Night, How the Evening Builds, How the Night
 * Actually Goes, and Victory Lap timelines.
 */

import MotionWrapper from "./MotionWrapper";

type Accent = "gold" | "burgundy" | "purple";

interface TimelineEventProps {
  time: string;
  spot: string;
  address?: string;
  desc: string;
  accent?: Accent;
  delay?: number;
}

const accentTimeClass: Record<Accent, string> = {
  gold: "text-dirty-orange",
  burgundy: "text-neon-pink",
  purple: "text-club-purple",
};

export default function TimelineEvent({
  time,
  spot,
  address,
  desc,
  accent = "burgundy",
  delay = 0,
}: TimelineEventProps) {
  return (
    <MotionWrapper delay={delay}>
      <div className="text-center py-12 sm:py-14 px-6">
        {/* TIME — display, uppercase, tracked, accent */}
        <p
          className={`font-[family-name:var(--font-display)] text-xl sm:text-2xl uppercase tracking-[0.35em] ${accentTimeClass[accent]} neon-glow-subtle`}
        >
          {time}
        </p>

        {/* SPOT — biggest, display, cream */}
        <h4 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl lg:text-4xl uppercase text-cream tracking-wide leading-[1.1] mt-4 neon-glow-subtle">
          {spot}
        </h4>

        {/* ADDRESS — heading chrome small caps */}
        {address && (
          <p className="font-[family-name:var(--font-heading)] text-[11px] text-chrome tracking-[0.3em] uppercase mt-3">
            {address}
          </p>
        )}

        {/* DESCRIPTION — body centered narrow */}
        <p className="font-[family-name:var(--font-body)] text-base sm:text-lg text-cream/60 leading-relaxed max-w-xl mx-auto mt-5">
          {desc}
        </p>
      </div>
    </MotionWrapper>
  );
}
