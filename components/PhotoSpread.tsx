/**
 * PhotoSpread — editorial 50/50 split layout for photo + text
 *
 * Replaces PhotoBleed. Photos display at NATURAL aspect ratio (no force-cropping)
 * inside a tinted container. Text sits on the other side.
 *
 * variant="hero": A24 movie-poster split — text on left col-span-5, photo on right col-span-7
 * variant="accent": editorial spread with caption — photo on one side, caption on the other.
 *                   align="right" (default) puts photo on right; align="left" puts it on left.
 */

import MotionWrapper from "./MotionWrapper";

type Tint = "burgundy" | "gold" | "purple";
type Align = "left" | "right";

interface PhotoSpreadProps {
  variant: "hero" | "accent";
  src: string;
  alt: string;
  tint?: Tint;
  // hero only
  eyebrow?: string;
  title?: string;
  intro?: string;
  // accent only
  caption?: string;
  captionEyebrow?: string;
  align?: Align;
}

const tintBgClass: Record<Tint, string> = {
  burgundy: "bg-neon-pink/25",
  gold: "bg-dirty-orange/20",
  purple: "bg-club-purple/25",
};

const tintAccentBgClass: Record<Tint, string> = {
  burgundy: "bg-neon-pink/15",
  gold: "bg-dirty-orange/12",
  purple: "bg-club-purple/15",
};

const accentColorClass = (tint: Tint) =>
  tint === "gold" ? "text-dirty-orange" : "text-neon-pink";

function PhotoSide({
  src,
  alt,
  tint,
  variant,
  priority,
}: {
  src: string;
  alt: string;
  tint: Tint;
  variant: "hero" | "accent";
  priority?: boolean;
}) {
  const tintBg = variant === "hero" ? tintBgClass[tint] : tintAccentBgClass[tint];
  return (
    <div className={`relative w-full h-full ${tintBg} grain overflow-hidden`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="absolute inset-0 w-full h-full object-contain object-center"
      />
      {/* color tint blend over photo */}
      <div className={`absolute inset-0 ${tintBg} mix-blend-multiply pointer-events-none`} />
      {/* subtle vignette on edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(10,10,10,0.5)_100%)] pointer-events-none" />
    </div>
  );
}

export default function PhotoSpread(props: PhotoSpreadProps) {
  if (props.variant === "hero") return <HeroSpread {...props} />;
  return <AccentSpread {...props} />;
}

function HeroSpread({
  src,
  alt,
  tint = "burgundy",
  eyebrow,
  title,
  intro,
}: PhotoSpreadProps) {
  return (
    <section className="relative min-h-[85vh] grid lg:grid-cols-12 overflow-hidden bg-midnight">
      {/* Photo side — appears on top on mobile, right side on desktop */}
      <div className="relative order-1 lg:order-2 lg:col-span-7 min-h-[55vh] lg:min-h-0">
        <PhotoSide src={src} alt={alt} tint={tint!} variant="hero" priority />
        {/* Edge fade into text side (desktop only) */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-midnight to-transparent pointer-events-none" />
      </div>

      {/* Text side */}
      <div className="relative order-2 lg:order-1 lg:col-span-5 flex flex-col justify-end p-8 sm:p-12 lg:p-16 xl:p-20 z-10">
        {eyebrow && (
          <MotionWrapper>
            <p
              className={`font-[family-name:var(--font-heading)] text-xs tracking-[0.3em] uppercase mb-4 ${accentColorClass(
                tint!
              )} neon-glow-subtle`}
            >
              {eyebrow}
            </p>
          </MotionWrapper>
        )}
        {title && (
          <MotionWrapper delay={100}>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(3rem,9vw,7rem)] leading-[0.9] tracking-tight uppercase text-cream neon-glow-subtle">
              {title}
            </h1>
          </MotionWrapper>
        )}
        {intro && (
          <MotionWrapper delay={200}>
            <p className="font-[family-name:var(--font-body)] text-base sm:text-lg leading-relaxed text-cream/75 mt-6 max-w-md">
              {intro}
            </p>
          </MotionWrapper>
        )}
      </div>
    </section>
  );
}

function AccentSpread({
  src,
  alt,
  tint = "burgundy",
  caption,
  captionEyebrow,
  align = "right",
}: PhotoSpreadProps) {
  const photoOnLeft = align === "left";
  const photoCol = photoOnLeft
    ? "lg:col-start-1 lg:col-span-7"
    : "lg:col-start-6 lg:col-span-7";
  const captionCol = photoOnLeft
    ? "lg:col-start-8 lg:col-span-5"
    : "lg:col-start-1 lg:col-span-5";

  return (
    <section className="relative min-h-[55vh] sm:min-h-[60vh] grid lg:grid-cols-12 overflow-hidden bg-midnight">
      {/* Photo — DOM-first so mobile shows photo on top */}
      <div className={`relative min-h-[40vh] lg:min-h-0 ${photoCol}`}>
        <PhotoSide src={src} alt={alt} tint={tint!} variant="accent" />
      </div>

      {/* Caption */}
      <div className={`relative flex flex-col justify-center p-8 sm:p-12 lg:p-16 z-10 ${captionCol}`}>
        <MotionWrapper>
          {captionEyebrow && (
            <p
              className={`font-[family-name:var(--font-heading)] text-xs tracking-[0.3em] uppercase mb-3 ${accentColorClass(
                tint!
              )} neon-glow-subtle`}
            >
              {captionEyebrow}
            </p>
          )}
          {caption && (
            <p
              className={`font-[family-name:var(--font-display)] text-[clamp(1.5rem,3.5vw,2.5rem)] leading-[1.05] tracking-tight text-cream uppercase ${
                tint === "gold" ? "italic" : ""
              }`}
            >
              {caption}
            </p>
          )}
        </MotionWrapper>
      </div>
    </section>
  );
}
