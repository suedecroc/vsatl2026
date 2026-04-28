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
      <article className="py-5 sm:py-6 group">
        {/* Top row — name on left, tags + links on right */}
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2 mb-2">
          <h3 className="font-[family-name:var(--font-display)] text-lg sm:text-xl tracking-wide uppercase text-cream">
            {name}
          </h3>
          {address && (
            <span className="font-[family-name:var(--font-heading)] text-[11px] text-cream/40 tracking-wide">
              {address}
            </span>
          )}
          {tags.length > 0 && (
            <span className="font-[family-name:var(--font-heading)] text-[10px] text-cream/30 tracking-[0.18em] uppercase sm:ml-auto">
              {tags.join(" · ")}
            </span>
          )}
        </div>

        {/* Description */}
        {description && (
          <p className="font-[family-name:var(--font-body)] text-sm sm:text-[15px] text-cream/65 leading-relaxed">
            {description}
          </p>
        )}

        {/* Must order */}
        {mustOrder && (
          <p className={`font-[family-name:var(--font-heading)] text-[11px] tracking-wide italic mt-2 ${accentColor}`}>
            must order: {mustOrder}
          </p>
        )}

        {/* Links */}
        {(website || mapUrl) && (
          <div className="flex gap-5 mt-3">
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-[family-name:var(--font-heading)] text-[10px] tracking-[0.2em] uppercase text-cream/40 ${accentHover} transition-colors`}
              >
                website ↗
              </a>
            )}
            {mapUrl && (
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-[family-name:var(--font-heading)] text-[10px] tracking-[0.2em] uppercase text-cream/40 ${accentHover} transition-colors`}
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
