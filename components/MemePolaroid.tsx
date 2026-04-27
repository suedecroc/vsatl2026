/**
 * MemePolaroid — compact polaroid-style frame for chaos/humor photos
 *
 * Small (~200px), tilted, white polaroid background with caption inside the frame.
 * Designed to sit alone or line up in a row like a fridge wall.
 */

interface MemePolaroidProps {
  src: string;
  alt: string;
  caption?: string;
  /** Rotation in degrees. Defaults to a slight 2deg tilt. */
  rotate?: number;
  /** Width in pixels (defaults to 200). */
  size?: number;
}

export default function MemePolaroid({
  src,
  alt,
  caption,
  rotate = 2,
  size = 200,
}: MemePolaroidProps) {
  return (
    <figure
      className="inline-block bg-[#f5f2ec] p-2 pb-4 shadow-[0_8px_24px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.6)] hover:rotate-0 transition-all duration-300"
      style={{ transform: `rotate(${rotate}deg)`, width: `${size}px` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full aspect-[4/5] object-cover object-center block"
      />
      {caption && (
        <figcaption className="font-[family-name:var(--font-heading)] text-midnight/70 text-[10px] tracking-[0.2em] uppercase text-center mt-2 px-1">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * MemeStrip — wraps multiple MemePolaroids in a centered flex row that wraps.
 */
interface MemeStripProps {
  children: React.ReactNode;
  className?: string;
}

export function MemeStrip({ children, className = "" }: MemeStripProps) {
  return (
    <div className={`flex flex-wrap justify-center items-center gap-6 sm:gap-8 py-12 px-6 ${className}`}>
      {children}
    </div>
  );
}
