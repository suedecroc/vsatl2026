/**
 * PhotoBleed — full-bleed photo sections with tinted overlays
 *
 * variant="hero": chapter-top section, photo fills viewport, eyebrow + title + intro overlaid
 * variant="accent": mid-page anchor moment, photo fills section, caption overlaid
 *
 * Photos are tinted with a burgundy or gold wash so they read as part of the site palette
 * rather than dropped-in cards. Top + bottom dark gradients keep nav and text legible.
 */

import MotionWrapper from "./MotionWrapper";

type Tint = "burgundy" | "gold" | "purple";

interface PhotoBleedProps {
  variant: "hero" | "accent";
  src: string;
  alt: string;
  tint?: Tint;
  objectPosition?: string;
  // Hero only
  eyebrow?: string;
  title?: string;
  intro?: string;
  // Accent only
  caption?: string;
  captionEyebrow?: string;
  /** Renders as edge-to-edge — pulls out of parent container padding. Default true. */
  fullBleed?: boolean;
}

const tintClass = (tint: Tint, variant: "hero" | "accent") => {
  const heroOpacity = { burgundy: "bg-neon-pink/25", gold: "bg-dirty-orange/20", purple: "bg-club-purple/25" };
  const accentOpacity = { burgundy: "bg-neon-pink/15", gold: "bg-dirty-orange/12", purple: "bg-club-purple/15" };
  return variant === "hero" ? heroOpacity[tint] : accentOpacity[tint];
};

const accentColorClass = (tint: Tint) =>
  tint === "gold" ? "text-dirty-orange" : "text-neon-pink";

export default function PhotoBleed({
  variant,
  src,
  alt,
  tint = "burgundy",
  objectPosition = "center",
  eyebrow,
  title,
  intro,
  caption,
  captionEyebrow,
  fullBleed = true,
}: PhotoBleedProps) {
  const minH =
    variant === "hero" ? "min-h-[85vh]" : "min-h-[55vh] sm:min-h-[60vh]";
  // Break out of any parent max-width + padding by spanning full viewport width
  const breakout = fullBleed
    ? "relative left-1/2 right-1/2 -translate-x-1/2 w-screen"
    : "";

  return (
    <section
      className={`relative ${minH} ${breakout} overflow-hidden grain flex items-end`}
    >
      {/* Photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition }}
        loading={variant === "hero" ? "eager" : "lazy"}
      />

      {/* Color tint wash */}
      <div className={`absolute inset-0 ${tintClass(tint, variant)} mix-blend-multiply`} />

      {/* Top dark gradient — keeps nav + ticker legible */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-midnight/70 via-midnight/20 to-transparent pointer-events-none" />

      {/* Bottom dark gradient — text legibility */}
      <div
        className={`absolute inset-x-0 bottom-0 ${
          variant === "hero" ? "h-2/3" : "h-1/2"
        } bg-gradient-to-t from-midnight via-midnight/70 to-transparent pointer-events-none`}
      />

      {/* Subtle vignette on sides */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(10,10,10,0.4)_100%)] pointer-events-none" />

      {/* Content overlay */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-12 pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto">
          {variant === "hero" && (
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-end">
              <div className="lg:col-span-7">
                {eyebrow && (
                  <MotionWrapper>
                    <p
                      className={`font-[family-name:var(--font-heading)] text-xs tracking-[0.3em] uppercase mb-4 ${accentColorClass(
                        tint
                      )} neon-glow-subtle`}
                    >
                      {eyebrow}
                    </p>
                  </MotionWrapper>
                )}
                {title && (
                  <MotionWrapper delay={100}>
                    <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.5rem,9vw,6rem)] leading-[0.9] tracking-tight uppercase text-cream neon-glow-subtle">
                      {title}
                    </h1>
                  </MotionWrapper>
                )}
              </div>
              {intro && (
                <div className="lg:col-span-5 lg:pb-3">
                  <MotionWrapper delay={200}>
                    <p className="font-[family-name:var(--font-body)] text-base sm:text-lg leading-relaxed text-cream/75">
                      {intro}
                    </p>
                  </MotionWrapper>
                </div>
              )}
            </div>
          )}

          {variant === "accent" && (caption || captionEyebrow) && (
            <MotionWrapper>
              <div className="max-w-3xl">
                {captionEyebrow && (
                  <p
                    className={`font-[family-name:var(--font-heading)] text-xs tracking-[0.3em] uppercase mb-3 ${accentColorClass(
                      tint
                    )} neon-glow-subtle`}
                  >
                    {captionEyebrow}
                  </p>
                )}
                {caption && (
                  <p
                    className={`font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)] leading-[1] tracking-tight text-cream uppercase ${
                      tint === "gold" ? "italic" : ""
                    }`}
                  >
                    {caption}
                  </p>
                )}
              </div>
            </MotionWrapper>
          )}
        </div>
      </div>
    </section>
  );
}
