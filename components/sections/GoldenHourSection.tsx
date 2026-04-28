import ChapterIntro from "@/components/ChapterIntro";
import PlaceCard from "@/components/PlaceCard";
import QuoteBlock from "@/components/QuoteBlock";
import TimelineEvent from "@/components/TimelineEvent";

const sunsetSpots = [
  {
    name: "Ponce City Market Rooftop",
    address: "675 Ponce de Leon Ave NE",
    tags: ["skyline", "golden hour", "drinks"],
    description:
      "the skyline turns orange up here. drink in hand, city below, no agenda. this is the transition you came for.",
    website: "https://poncecitymarket.com",
    mapUrl: "https://maps.google.com/?q=Ponce+City+Market,+675+Ponce+de+Leon+Ave+NE,+Atlanta,+GA",
  },
  {
    name: "Beltline at Dusk",
    address: "Eastside Trail",
    tags: ["walk", "art", "golden hour"],
    description:
      "the beltline changes after 5. the joggers thin out. the light gets long. the murals look different. you walk slower and that's the point.",
    website: "https://beltline.org",
    mapUrl: "https://maps.google.com/?q=Atlanta+Beltline+Eastside+Trail,+Atlanta,+GA",
  },
  {
    name: "Virginia Highland Evening",
    address: "Virginia Ave NE",
    tags: ["stroll", "pre-dinner", "charming"],
    description:
      "tree-lined streets catching the last light. window shopping nobody asked for. the pre-dinner stroll that sets the tone.",
    mapUrl: "https://maps.google.com/?q=Virginia+Highland,+Atlanta,+GA",
  },
  {
    name: "Inman Park at Sunset",
    address: "Euclid Ave NE",
    tags: ["architecture", "golden light", "quiet"],
    description:
      "victorian homes in golden light. the porches. the quiet streets. atlanta's first suburb looking exactly how it's supposed to at this hour.",
    mapUrl: "https://maps.google.com/?q=Inman+Park,+Atlanta,+GA",
  },
];

const transitionSpots = [
  {
    name: "Ticonderoga Club",
    address: "99 Krog St NE",
    tags: ["cocktails", "pre-game", "golden hour"],
    description:
      "the cocktail that bridges afternoon and evening. dive bar space, craft bar execution. you came in daylight, you'll leave in dark.",
    website: "https://ticonderogaclub.com",
    mapUrl: "https://maps.google.com/?q=Ticonderoga+Club,+99+Krog+St+NE,+Atlanta,+GA",
  },
  {
    name: "Barcelona Wine Bar",
    address: "240 N Highland Ave NE",
    tags: ["wine", "patio", "transition"],
    description:
      "the patio at golden hour. rioja in hand. tapas arriving. the city shifting around you while you stay exactly where you are.",
    website: "https://barcelonawinebar.com",
    mapUrl: "https://maps.google.com/?q=Barcelona+Wine+Bar,+240+N+Highland+Ave+NE,+Atlanta,+GA",
  },
  {
    name: "Bread & Butterfly",
    address: "290 Elizabeth St NE",
    tags: ["bistro", "wine", "evening"],
    description:
      "becomes a different place at dinner. the bistro menu. the wine list. steel doors open to a street going gold.",
    mapUrl: "https://maps.google.com/?q=Bread+%26+Butterfly,+290+Elizabeth+St+NE,+Atlanta,+GA",
  },
];

const goldenItinerary = [
  {
    time: "4:00 PM",
    spot: "Ponce City Rooftop",
    desc: "skyline bar. the light is doing something. mini golf if you're still competing. drinks if you've accepted that the day is winding.",
  },
  {
    time: "5:30 PM",
    spot: "Beltline Walk",
    desc: "the eastside trail at dusk. different energy. the art installations catch different light. you're not in a rush anymore.",
  },
  {
    time: "6:30 PM",
    spot: "Pre-Dinner Drinks",
    desc: "ticonderoga club or barcelona patio. this is the pause between acts. the city is shifting and you can feel it.",
  },
  {
    time: "7:30 PM",
    spot: "Early Dinner",
    desc: "beetlecat for seafood. delbar for persian. sotto sotto for italian. pick your lane. the evening decides from here.",
  },
  {
    time: "9:00 PM",
    spot: "The Handoff",
    desc: "golden hour is done. the neon is starting. whatever happens next is night's problem.",
  },
];

export default function GoldenHourSection() {
  return (
    <>
      {/* ===== 01 — THE SHIFT ===== */}
      <ChapterIntro
        eyebrow="01 — The Shift"
        title="When the Light Changes"
        intro="atlanta at golden hour is a different city. the concrete goes warm. the trees cast long shadows on the beltline. every patio becomes the right patio."
        variant="warm"
      />

      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-5xl mx-auto divide-y divide-cream/8">
          {sunsetSpots.map((spot, i) => (
            <PlaceCard key={spot.name} {...spot} delay={i * 60} tagVariant="warm" />
          ))}
        </div>
      </section>

      <QuoteBlock
        text="you're driving through midtown and the light hits the glass buildings and for a second the whole city looks like it was designed for exactly this moment"
      />

      {/* ===== 02 — THE BRIDGE ===== */}
      <ChapterIntro
        eyebrow="02 — The Bridge"
        title="Between Day & Night"
        intro="these are the spots where afternoon becomes evening. you came in daylight. you'll leave in dark. that's the whole trick."
        variant="warm"
      />

      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-5xl mx-auto divide-y divide-cream/8">
          {transitionSpots.map((spot, i) => (
            <PlaceCard key={spot.name} {...spot} delay={i * 60} tagVariant="warm" />
          ))}
        </div>
      </section>

      {/* ===== 03 — THE FLOW ===== */}
      <section className="bg-sweat grain py-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <ChapterIntro
            eyebrow="03 — The Flow"
            title="How the Evening Builds"
            intro="golden hour has a rhythm. you don&rsquo;t force it. you let it carry you from rooftop to beltline to patio to dinner. the city does the work."
            variant="warm"
          />
          <div className="divide-y divide-cream/8 mt-8">
            {goldenItinerary.map((event, i) => (
              <TimelineEvent
                key={event.time}
                time={event.time}
                spot={event.spot}
                desc={event.desc}
                accent="gold"
                delay={i * 60}
              />
            ))}
          </div>
        </div>
      </section>

      <QuoteBlock
        text="the gas station at golden hour. the way the light hits the pump. the way you're standing there and the city sounds different. this is cinematic for no reason."
      />
    </>
  );
}
