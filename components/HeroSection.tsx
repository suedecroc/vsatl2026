import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden grain">
      {/* Burgundy radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(122,28,46,0.18)_0%,transparent_70%)]" />

      {/* Suede polaroid — absolute top-right */}
      <div className="absolute top-24 right-6 md:right-12 lg:right-20 z-10">
        <div className="photo-polaroid w-[120px] md:w-[200px] lg:w-[240px]">
          <Image
            src="/photos/suede-hero.png"
            alt="Suede"
            width={240}
            height={320}
            priority
            className="w-full block object-cover object-top"
            style={{ aspectRatio: "3/4" }}
          />
        </div>
      </div>

      {/* Bottom content */}
      <div className="relative z-10 px-6 sm:px-10 pb-16 sm:pb-20 max-w-7xl mx-auto w-full">
        {/* Date pill */}
        <div className="hero-pill mb-6 inline-flex items-center gap-2 border border-cream/10 rounded-full px-3 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-pink" />
          <span className="font-[family-name:var(--font-heading)] text-[10px] tracking-[0.25em] text-cream/50 uppercase">
            April 29 – May 3, 2026
          </span>
        </div>

        {/* Main title */}
        <h1 className="font-[family-name:var(--font-display)] leading-[0.85] tracking-tight text-cream">
          <span className="block hero-word-1 text-[clamp(5rem,18vw,14rem)]">atl</span>
          <span className="block hero-word-2 text-[clamp(5rem,18vw,14rem)] text-dirty-orange italic">anna.</span>
        </h1>

        {/* Bottom bar */}
        <div className="hero-bottom mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
          <p className="font-[family-name:var(--font-body)] text-cream/50 text-sm leading-relaxed max-w-xs">
            east side energy. magic city nights. lemon pepper theology.
          </p>
          <p className="font-[family-name:var(--font-heading)] text-[10px] tracking-[0.25em] text-cream/25 uppercase sm:ml-auto">
            suede + versace slippers
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="font-[family-name:var(--font-heading)] text-neon-pink/40 text-[10px] tracking-[0.3em]">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-neon-pink/40 to-transparent" />
      </div>
    </section>
  );
}
