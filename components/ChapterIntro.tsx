import MotionWrapper from "./MotionWrapper";

interface ChapterIntroProps {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  quote?: string;
  variant?: "dark" | "light" | "warm";
}

export default function ChapterIntro({
  id,
  eyebrow,
  title,
  intro,
  quote,
  variant = "dark",
}: ChapterIntroProps) {
  const isDark = variant === "dark" || variant === "warm";
  const accentColor = variant === "warm" ? "text-dirty-orange" : "text-neon-pink";
  const dividerBg = variant === "warm" ? "bg-dirty-orange/30" : "bg-neon-pink/30";

  return (
    <div
      id={id}
      className={`py-16 sm:py-24 px-6 lg:px-12 ${isDark ? "bg-midnight" : "bg-cream"}`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <MotionWrapper>
          <div className={`w-16 h-px ${dividerBg} mx-auto mb-8`} />
        </MotionWrapper>

        <MotionWrapper delay={50}>
          <p
            className={`font-[family-name:var(--font-heading)] text-[11px] tracking-[0.5em] uppercase mb-6 ${accentColor} neon-glow-subtle`}
          >
            {eyebrow}
          </p>
        </MotionWrapper>

        <MotionWrapper delay={100}>
          <h2
            className={`font-[family-name:var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] tracking-tight uppercase ${
              isDark ? "text-cream neon-glow-subtle" : "text-midnight"
            }`}
          >
            {title}
          </h2>
        </MotionWrapper>

        {intro && (
          <MotionWrapper delay={200}>
            <p
              className={`font-[family-name:var(--font-body)] text-lg sm:text-xl mt-8 leading-relaxed mx-auto max-w-2xl ${
                isDark ? "text-cream/60" : "text-midnight/70"
              }`}
            >
              {intro}
            </p>
          </MotionWrapper>
        )}

        {quote && (
          <MotionWrapper delay={300}>
            <blockquote
              className={`font-[family-name:var(--font-display)] text-xl sm:text-2xl mt-10 px-6 italic uppercase tracking-wide ${
                isDark
                  ? `${accentColor} neon-glow-subtle`
                  : "text-deep-maroon"
              }`}
            >
              &ldquo;{quote}&rdquo;
            </blockquote>
          </MotionWrapper>
        )}

        <MotionWrapper delay={350}>
          <div className={`w-16 h-px ${dividerBg} mx-auto mt-12`} />
        </MotionWrapper>
      </div>
    </div>
  );
}
