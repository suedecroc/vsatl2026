import Nav from "@/components/Nav";
import FloatingCTA from "@/components/FloatingCTA";
import FooterFrame from "@/components/FooterFrame";
import ChapterOpener from "@/components/ChapterOpener";
import DaySection from "@/components/sections/DaySection";
import GoldenHourSection from "@/components/sections/GoldenHourSection";
import NightlifeSection from "@/components/sections/NightlifeSection";
import AfterHoursSection from "@/components/sections/AfterHoursSection";

export default function Home() {
  return (
    <main>
      <Nav />
      <FloatingCTA />

      <ChapterOpener
        id="day"
        number="01"
        eyebrow="Chapter One"
        kicker="the arrival"
        title="Day"
        intro="you land at 5. you don't check in yet. there's a wing spot that's been waiting since your flight left. the city is hot, bright, and not apologizing for it. you move through it the way you move through everything -- with intention and an appetite."
        accent="gold"
      />
      <DaySection />

      <ChapterOpener
        id="golden-hour"
        number="02"
        eyebrow="Chapter Two"
        kicker="the in-between"
        title="Golden Hour"
        intro="the city shifts around 5. the light gets long and warm. the pace drops half a gear. you're between things -- between day and night, between plans, between versions of yourself. this is the in-between and it's the best part."
        accent="gold"
      />
      <GoldenHourSection />

      <ChapterOpener
        id="nightlife"
        number="03"
        eyebrow="Chapter Three"
        kicker="the only correct answer"
        title="Nightlife"
        intro="the neon comes on and the city changes its mind about everything. edgewood avenue is a decision tree with no wrong answers. buckhead is where the volume goes up. magic city doesn't need your introduction."
        accent="burgundy"
      />
      <NightlifeSection />

      <ChapterOpener
        id="after-hours"
        number="04"
        eyebrow="Chapter Four"
        kicker="future at 3am"
        title="After Hours"
        intro="the truth shows up after midnight. the city strips down to what it actually is. the neon is still on but the performance is over. what's left is the real thing -- messy, honest, funny, exhausted, and still somehow going."
        accent="purple"
      />
      <AfterHoursSection />

      <FooterFrame />
    </main>
  );
}
