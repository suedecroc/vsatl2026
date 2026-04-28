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

  return (
    <div
      id={id}
      className={`py-12 sm:py-16 px-6 lg:px-12 ${isDark ? "bg-midnight" : "bg-cream"}`}
    >
      <div className="max-w-3xl mx-auto text-center">
        <MotionWrapper>
          <p
            className={`font-[family-name:var(--font-heading)] text-[11px] tracking-[0.4em] uppercase mb-5 ${accentColor} neon-glow-subtle`}
          >
            {eyebrow}
          </p>
        </MotionWrapper>

        <MotionWrapper delay={100}>
          <h2
            className={`font-[family-name:var(--font-display)] text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.05] tracking-tight uppercase ${
              isDark ? "text-cream neon-glow-subtle" : "text-midnight"
            }`}
          >
            {title}
          </h2>
        </MotionWrapper>

        {intro && (
          <MotionWrapper delay={200}>
            <p
              className={`font-[family-name:var(--font-body)] text-base sm:text-lg mt-6 leading-relaxed mx-auto max-w-2xl ${
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
              className={`font-[family-name:var(--font-display)] text-xl sm:text-2xl mt-8 px-6 italic uppercase tracking-wide ${
                isDark
                  ? `${accentColor} neon-glow-subtle`
                  : "text-deep-maroon"
              }`}
            >
              &ldquo;{quote}&rdquo;
            </blockquote>
          </MotionWrapper>
        )}
      </div>
    </div>
  );
}
