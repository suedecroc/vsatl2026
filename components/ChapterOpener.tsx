/**
 * ChapterOpener — full-viewport chapter intro for the single-page scroll
 *
 * Each chapter starts with one of these. Giant chapter number on the left,
 * eyebrow + title + intro on the right. Sized to feel like turning a page.
 */

import MotionWrapper from "./MotionWrapper";

type Accent = "gold" | "burgundy" | "purple";

interface ChapterOpenerProps {
  id: string;
  number: string;
  eyebrow: string;
  title: string;
  intro: string;
  accent?: Accent;
  /** Optional kicker shown above title, italic — e.g. "the in-between" */
  kicker?: string;
}

const accentTextClass: Record<Accent, string> = {
  gold: "text-dirty-orange",
  burgundy: "text-neon-pink",
  purple: "text-club-purple",
};

const accentBorderClass: Record<Accent, string> = {
  gold: "bg-dirty-orange/40",
  burgundy: "bg-neon-pink/40",
  purple: "bg-club-purple/40",
};

export default function ChapterOpener({
  id,
  number,
  eyebrow,
  title,
  intro,
  accent = "burgundy",
  kicker,
}: ChapterOpenerProps) {
  return (
    <section
      id={id}
      className="relative min-h-[80vh] flex items-center px-6 sm:px-10 lg:px-12 py-20 lg:py-28 grain scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Big number */}
          <div className="lg:col-span-4">
            <MotionWrapper>
              <p
                className={`font-[family-name:var(--font-display)] text-[clamp(6rem,16vw,14rem)] leading-[0.85] tracking-tight tabular-nums ${accentTextClass[accent]} neon-glow-subtle`}
              >
                {number}
              </p>
            </MotionWrapper>
          </div>

          {/* Title + intro */}
          <div className="lg:col-span-8 lg:pl-8 lg:border-l lg:border-cream/10 min-w-0">
            <MotionWrapper delay={100}>
              <p
                className={`font-[family-name:var(--font-heading)] text-[11px] sm:text-xs tracking-[0.4em] uppercase mb-6 ${accentTextClass[accent]} neon-glow-subtle`}
              >
                {eyebrow}
              </p>
            </MotionWrapper>

            {kicker && (
              <MotionWrapper delay={150}>
                <p className="font-[family-name:var(--font-display)] text-base sm:text-lg italic text-cream/40 mb-2">
                  {kicker}
                </p>
              </MotionWrapper>
            )}

            <MotionWrapper delay={200}>
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(3rem,8vw,7rem)] leading-[0.9] tracking-tight uppercase text-cream neon-glow-subtle break-words">
                {title}
              </h2>
            </MotionWrapper>

            <MotionWrapper delay={300}>
              <div className={`h-[2px] w-12 ${accentBorderClass[accent]} mt-8 mb-8`} />
            </MotionWrapper>

            <MotionWrapper delay={400}>
              <p className="font-[family-name:var(--font-body)] text-base sm:text-lg text-cream/60 leading-relaxed max-w-xl">
                {intro}
              </p>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
