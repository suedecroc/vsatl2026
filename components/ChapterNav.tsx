import Link from "next/link";
import MotionWrapper from "./MotionWrapper";

interface ChapterNavProps {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
  bridge?: string;
}

export default function ChapterNav({ prev, next, bridge }: ChapterNavProps) {
  return (
    <section className="bg-sweat grain py-20 sm:py-28 px-6 lg:px-12 relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        <MotionWrapper>
          {bridge && (
            <p className="section-outro mb-10">{bridge}</p>
          )}
          {next ? (
            <Link href={next.href} className="group flex items-center gap-4">
              <span className="font-[family-name:var(--font-heading)] text-[10px] tracking-[0.3em] text-cream/25 uppercase">
                next →
              </span>
              <span className="font-[family-name:var(--font-display)] text-xl sm:text-2xl tracking-wide text-cream/40 group-hover:text-cream transition-colors duration-300 uppercase">
                {next.label}
              </span>
            </Link>
          ) : (
            <p className="font-[family-name:var(--font-display)] text-xl text-cream/20 uppercase">
              that&apos;s a wrap.
            </p>
          )}
        </MotionWrapper>
      </div>
      {prev && (
        <MotionWrapper delay={200}>
          <p className="relative z-10 font-[family-name:var(--font-heading)] text-[10px] tracking-[0.3em] text-cream/15 uppercase mt-10">
            ← {prev.label}
          </p>
        </MotionWrapper>
      )}
    </section>
  );
}
