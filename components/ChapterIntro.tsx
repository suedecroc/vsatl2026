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
      className={`py-20 sm:py-28 px-6 lg:px-12 ${isDark ? "bg-midnight" : "bg-cream"}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <MotionWrapper>
              <p
                className={`font-[family-name:var(--font-heading)] text-xs tracking-[0.3em] uppercase mb-4 ${accentColor} neon-glow-subtle`}
              >
                {eyebrow}
              </p>
            </MotionWrapper>

            <MotionWrapper delay={100}>
              <h2
                className={`font-[family-name:var(--font-display)] text-[clamp(2rem,8vw,5rem)] leading-[0.9] tracking-tight uppercase ${
                  isDark ? "text-cream neon-glow-subtle" : "text-midnight"
                }`}
              >
                {title}
              </h2>
            </MotionWrapper>
          </div>

          {(intro || quote) && (
            <div className="lg:col-span-5 lg:pb-3 space-y-6">
              {intro && (
                <MotionWrapper delay={200}>
                  <p
                    className={`font-[family-name:var(--font-body)] text-base sm:text-lg leading-relaxed ${
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
                    className={`font-[family-name:var(--font-display)] text-xl sm:text-2xl pl-6 border-l-2 uppercase tracking-wide ${
                      isDark
                        ? `${accentColor} border-neon-pink/30 neon-glow-subtle`
                        : "text-deep-maroon border-deep-maroon/30"
                    }`}
                  >
                    {quote}
                  </blockquote>
                </MotionWrapper>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
