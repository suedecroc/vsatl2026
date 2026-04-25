import MotionWrapper from "./MotionWrapper";

export default function FooterFrame() {
  return (
    <footer className="py-16 sm:py-24 px-6 bg-midnight grain">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <MotionWrapper>
          <p className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl text-cream/80 uppercase tracking-wide mb-4">
            bad ideas,
          </p>
          <p className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl text-dirty-orange uppercase tracking-wide mb-10">
            good outfits.
          </p>
        </MotionWrapper>

        <MotionWrapper delay={200}>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-cream/15 to-transparent mx-auto mb-8" />
        </MotionWrapper>

        <MotionWrapper delay={300}>
          <p className="font-[family-name:var(--font-heading)] text-cream/20 text-xs tracking-[0.3em] uppercase">
            suede + versace slippers · atlanna, ga · april 29 – may 3, 2026
          </p>
        </MotionWrapper>
      </div>
    </footer>
  );
}
