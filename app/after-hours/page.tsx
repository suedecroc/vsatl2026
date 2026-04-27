import Nav from "@/components/Nav";
import ChapterIntro from "@/components/ChapterIntro";
import PlaceCard from "@/components/PlaceCard";
import QuoteBlock from "@/components/QuoteBlock";
import AmbientMediaLayer from "@/components/AmbientMediaLayer";
import FloatingCTA from "@/components/FloatingCTA";
import FooterFrame from "@/components/FooterFrame";
import MotionWrapper from "@/components/MotionWrapper";
import ChapterNav from "@/components/ChapterNav";
import PhotoCard from "@/components/PhotoCard";
import PhotoBleed from "@/components/PhotoBleed";

const lateNightFood = [
  {
    name: "Waffle House",
    address: "Everywhere",
    tags: ["3AM", "sacred", "no judgment"],
    description:
      "it's 3AM. you're in a waffle house parking lot. somebody's arguing about hash brown preparation. scattered, smothered, covered. this is the real itinerary.",
    website: "https://wafflehouse.com",
    mapUrl: "https://maps.google.com/?q=Waffle+House,+Atlanta,+GA",
  },
  {
    name: "The Varsity",
    address: "61 North Ave NW",
    tags: ["legendary", "late", "messy"],
    description:
      "what'll ya have? what'll ya have? the largest drive-in restaurant in the world and it's open late. chili dogs at 2AM. no regrets until 6AM.",
    website: "https://thevarsity.com",
    mapUrl: "https://maps.google.com/?q=The+Varsity,+61+North+Ave+NW,+Atlanta,+GA",
  },
  {
    name: "Sublime Doughnuts",
    address: "535 10th St NW",
    tags: ["late", "sweet", "reward"],
    description:
      "open late. the a-town cream doughnut. you earned this. whatever happened tonight, this fixes it.",
    website: "https://sublimedoughnuts.com",
    mapUrl: "https://maps.google.com/?q=Sublime+Doughnuts,+535+10th+St+NW,+Atlanta,+GA",
  },
  {
    name: "Lemon Pepper Wings",
    address: "Various Locations",
    tags: ["sacred", "mandatory", "3AM"],
    description:
      "it's 3AM. somebody brought lemon pepper wings. you don't ask where from. you just eat. this is the real itinerary.",
    mapUrl: "https://maps.google.com/?q=lemon+pepper+wings,+Atlanta,+GA",
  },
];

const chaosTimeline = [
  {
    time: "12:00 AM",
    spot: "The Decision Point",
    desc: "the club just hit its stride. you have two options: stay or go. there is no wrong answer. there is only the answer you'll tell the story about.",
  },
  {
    time: "1:00 AM",
    spot: "The Second Wind",
    desc: "you stayed. the DJ switched up. the energy shifted. you're in it now. no looking back.",
  },
  {
    time: "2:00 AM",
    spot: "The Exodus",
    desc: "the lights come on somewhere. not here. but somewhere. the parking lot becomes the after-party. somebody has a speaker.",
  },
  {
    time: "3:00 AM",
    spot: "The Real Itinerary",
    desc: "waffle house or wings. the uber driver knows exactly what kind of night it was. the city is quiet enough to hear yourself think and loud enough that you don't want to.",
  },
  {
    time: "4:00 AM",
    spot: "The Honest Hour",
    desc: "you're in the hotel. shoes still on. phone charging. scrolling through the photos you took. none of them capture it. that's how you know it was real.",
  },
  {
    time: "10:00 AM",
    spot: "The Morning After",
    desc: "coffee. water. sunglasses indoors. the beltline looks different when you're running on four hours of sleep and no regrets.",
  },
];

const saturdayWindDown = [
  {
    time: "10:00 AM",
    spot: "Murphy's Brunch",
    address: "997 Virginia Ave NE",
    desc: "virginia highland. 40+ years. legendary brunch. benedicts hit different when you need them most. mimosas. the cure.",
  },
  {
    time: "1:00 PM",
    spot: "Final Beltline Walk",
    desc: "one more lap. take it in. buy some art. stop at a patio. your last atlanta afternoon. walk slower than you did on day one.",
  },
  {
    time: "3:00 PM",
    spot: "Pack & Prep",
    desc: "back to hotel. pack your shit. leave room for the memories. leave room for the t-shirt you bought. leave room.",
  },
  {
    time: "EVENING",
    spot: "Beltline Lantern Parade",
    address: "Eastside Trail",
    desc: "may 3. celebrates AAPI heritage month. if timing works before the airport, it's worth it. colorful. community. atlanta at its best.",
  },
  {
    time: "6:00 PM",
    spot: "Departure",
    desc: "uber to airport. already planning the return trip. the city didn't break you. it just rearranged you.",
  },
];

export default function AfterHoursPage() {
  return (
    <main>
      <Nav />
      <FloatingCTA />

      {/* ===== HERO ===== */}
      <AmbientMediaLayer gradient="purple">
        <div className="pt-28 sm:pt-32 pb-0">
          <ChapterIntro
            eyebrow="Chapter Four"
            title="After Hours"
            intro="the truth shows up after midnight. the city strips down to what it actually is. the neon is still on but the performance is over. what's left is the real thing -- messy, honest, funny, exhausted, and still somehow going."
          />
          <div className="px-6 lg:px-12 pb-12">
            <div className="max-w-7xl mx-auto">
              <PhotoCard
                src="/photos/jordan-edboy.jpg"
                alt="Jordan as Ed Edd n Eddy -- ed boy energy"
                variant="meme"
                landscape
                caption="that's my horse"
                priority
              />
            </div>
          </div>
        </div>
      </AmbientMediaLayer>

      <QuoteBlock
        text="I am your mother"
        attribution="-- Nick Colletti, vine legend"
      />

      {/* ===== 01 — FEED THE CHAOS ===== */}
      <ChapterIntro
        eyebrow="01 — 3AM Menu"
        title="Feed the Chaos"
        intro="the restaurants closed hours ago. the real food map opens now. waffle house. wings. somebody's trunk. this is where the stories come from."
      />

      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <PhotoCard
            src="/photos/meme-wine.jpg"
            alt="B&W man with wine -- the vibe"
            variant="meme"
            caption="the situation"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lateNightFood.map((spot, i) => (
              <PlaceCard key={spot.name} {...spot} glow delay={i * 100} tagVariant="glow" />
            ))}
          </div>
        </div>
      </section>

      <PhotoBleed
        variant="accent"
        src="/photos/versace-boot.jpg"
        alt="Versace leg in medical boot -- pimp down moment"
        tint="purple"
        objectPosition="center 60%"
        captionEyebrow="aftermath"
        caption="pimp down! pimp down...."
      />

      {/* ===== 02 — THE REAL SCHEDULE ===== */}
      <section className="bg-sweat grain py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <MotionWrapper>
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 mb-16 items-end">
              <div className="lg:col-span-5">
                <p className="font-[family-name:var(--font-heading)] text-xs tracking-[0.3em] uppercase mb-4 text-club-purple neon-glow-subtle">
                  02 — The Real Schedule
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-[clamp(2rem,8vw,5rem)] leading-[0.9] tracking-tight uppercase text-cream neon-glow-subtle">
                  How the Night Actually Goes
                </h2>
              </div>
              <div className="lg:col-span-7 lg:pb-3">
                <p className="font-[family-name:var(--font-body)] text-base sm:text-lg leading-relaxed text-cream/60">
                  nobody follows the itinerary after midnight. here&apos;s what actually happens.
                </p>
              </div>
            </div>
          </MotionWrapper>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4 lg:border-l-2 lg:border-club-purple/20 lg:pl-8 hidden lg:block">
              <p className="font-[family-name:var(--font-heading)] text-xs tracking-[0.3em] text-club-purple/60 uppercase mb-3">the descent</p>
              <p className="font-[family-name:var(--font-body)] text-cream/40 text-sm leading-relaxed">
                midnight to noon. the chapters between the official ones.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-6">
              {chaosTimeline.map((event, i) => (
                <MotionWrapper key={event.time} delay={i * 80}>
                  <div className="flex gap-4">
                    <span className="font-[family-name:var(--font-heading)] text-xs text-club-purple/60 tracking-wide min-w-[70px] sm:min-w-[90px] pt-1 shrink-0">
                      {event.time}
                    </span>
                    <div>
                      <p className="font-[family-name:var(--font-body)] text-cream text-sm sm:text-base font-medium">
                        {event.spot}
                      </p>
                      <p className="font-[family-name:var(--font-body)] text-cream/40 text-sm mt-1">
                        {event.desc}
                      </p>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="px-6 lg:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          <PhotoCard
            src="/photos/meme-boot.jpeg"
            alt="Snapchat pimp down moment"
            variant="meme"
            caption="pimp down! pimp down...."
          />
        </div>
      </div>

      <QuoteBlock
        text="this is fine"
        attribution="-- you, at 3AM in the waffle house"
      />

      <MotionWrapper>
        <div className="py-8 px-6 lg:px-12">
          <p className="font-[family-name:var(--font-body)] text-cream/30 text-sm text-center max-w-2xl mx-auto leading-relaxed">
            the after hours chapter is not about destinations. it&apos;s about what happens when the plan dissolves. the parking lot conversations. the uber ride confessionals. the hotel lobby at 4AM when you&apos;re the only person alive who&apos;s not sleeping. future is playing from someone&apos;s phone. bass heavy, slow confidence. you&apos;re not tired. you&apos;re just honest.
          </p>
        </div>
      </MotionWrapper>

      {/* ===== 03 — VICTORY LAP ===== */}
      <ChapterIntro
        eyebrow="03 — The Last Day"
        title="Victory Lap"
        intro="saturday. you made it. everything hurts but nothing is broken. time to eat brunch like you earned it, because you did."
      />
      <section className="pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-4 lg:border-l-2 lg:border-club-purple/20 lg:pl-8 hidden lg:block">
              <p className="font-[family-name:var(--font-heading)] text-xs tracking-[0.3em] text-club-purple/60 uppercase mb-3">the wind-down</p>
              <p className="font-[family-name:var(--font-body)] text-cream/40 text-sm leading-relaxed">
                last brunch. last walk. last airport curb. earn every minute.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-6">
              {saturdayWindDown.map((event, i) => (
                <MotionWrapper key={event.time} delay={i * 80}>
                  <div className="flex gap-4">
                    <span className="font-[family-name:var(--font-heading)] text-xs text-club-purple/40 tracking-wide min-w-[70px] sm:min-w-[90px] pt-1 shrink-0">
                      {event.time}
                    </span>
                    <div>
                      <p className="font-[family-name:var(--font-body)] text-cream text-sm sm:text-base font-medium">
                        {event.spot}
                      </p>
                      {event.address && (
                        <p className="font-[family-name:var(--font-heading)] text-cream/30 text-xs mt-0.5">
                          {event.address}
                        </p>
                      )}
                      <p className="font-[family-name:var(--font-body)] text-cream/40 text-sm mt-1">
                        {event.desc}
                      </p>
                    </div>
                  </div>
                </MotionWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ChapterNav
        prev={{ href: "/nightlife", label: "Nightlife" }}
        next={{ href: "/day", label: "Day" }}
      />
      <FooterFrame />
    </main>
  );
}
