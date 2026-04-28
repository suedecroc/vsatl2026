import MotionWrapper from "./MotionWrapper";

interface PlaceCardProps {
  name: string;
  address?: string;
  description?: string;
  mustOrder?: string;
  tags?: string[];
  delay?: number;
  /** Color hint for accents — "warm" = gold/dirty-orange, otherwise burgundy/neon-pink */
  tagVariant?: "default" | "glow" | "warm";
  website?: string;
  mapUrl?: string;
  /** Legacy props kept for compatibility — no longer affect styling */
  dark?: boolean;
  glow?: boolean;
}

export default function PlaceCard({
  name,
  address,
  description,
  mustOrder,
  tags = [],
  delay = 0,
  tagVariant = "default",
  website,
  mapUrl,
}: PlaceCardProps) {
  const accentColor = tagVariant === "warm" ? "text-dirty-orange" : "text-neon-pink";
  const accentHover = tagVariant === "warm" ? "hover:text-dirty-orange" : "hover:text-neon-pink";

  return (
    <MotionWrapper delay={delay}>
      <article className="text-center py-14 sm:py-20 px-6">
        {/* NAME — biggest, display, cream, glow */}
        <h3 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl uppercase text-cream tracking-wide leading-[1.05] neon-glow-subtle">
          {name}
        </h3>

        {/* ADDRESS — heading, chrome (gray), small caps tracked */}
        {address && (
          <p className="font-[family-name:var(--font-heading)] text-[11px] text-chrome tracking-[0.3em] uppercase mt-4">
            {address}
          </p>
        )}

        {/* TAGS — heading, dim, middot text */}
        {tags.length > 0 && (
          <p className="font-[family-name:var(--font-heading)] text-[10px] text-cream/30 tracking-[0.3em] uppercase mt-5">
            {tags.join(" · ")}
          </p>
        )}

        {/* DESCRIPTION — body, cream/60, narrow centered column */}
        {description && (
          <p className="font-[family-name:var(--font-body)] text-base sm:text-lg text-cream/60 leading-relaxed max-w-2xl mx-auto mt-8">
            {description}
          </p>
        )}

        {/* MUST ORDER — heading italic accent color */}
        {mustOrder && (
          <p className={`font-[family-name:var(--font-heading)] text-xs italic tracking-wide mt-6 ${accentColor}`}>
            must order: {mustOrder}
          </p>
        )}

        {/* LINKS — centered row */}
        {(website || mapUrl) && (
          <div className="flex gap-10 justify-center mt-8">
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-[family-name:var(--font-heading)] text-[11px] tracking-[0.3em] uppercase text-cream/40 ${accentHover} transition-colors`}
              >
                website ↗
              </a>
            )}
            {mapUrl && (
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-[family-name:var(--font-heading)] text-[11px] tracking-[0.3em] uppercase text-cream/40 ${accentHover} transition-colors`}
              >
                maps ↗
              </a>
            )}
          </div>
        )}
      </article>
    </MotionWrapper>
  );
}
