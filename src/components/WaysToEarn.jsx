import React from "react";

// Top 4 Overlapping Quick Cards (Matches your FlexQash Hero bottom cards)
const TOP_HIGHLIGHTS = [
  {
    title: "Affiliate Network",
    description:
      "Grow your earning circle across 3 tiers and receive instant commission bonuses whenever your team activates.",
    cta: "Explore Tiers",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Forex Lessons",
    description:
      "Master currency markets step-by-step with beginner-friendly modules and connect with verified partner brokers.",
    cta: "View Lessons",
    featured: true,
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Watch & Earn",
    description:
      "Stream curated promotional clips, reels, and creator content from your phone and get credited per completed view.",
    cta: "Start Watching",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Hotel & Ad Tasks",
    description:
      "Rate partner hotels, resorts, and digital brand campaigns to unlock steady daily micro-payouts.",
    cta: "Browse Tasks",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

// Detailed Bento Grid Activities (Rephrased & customized with Hotel Reviews + Forex)
const EARNING_STREAMS = [
  // Row 1: 2 Large Cards
  {
    number: "01",
    category: "NETWORK",
    title: "Multi-Tier Affiliate Commissions",
    description:
      "Share your personal invite link and build a thriving earning network across three rewarding levels of referrals.",
    tags: ["Personal invite link", "3-Tier commissions"],
    rowSpan: "lg:col-span-6",
    illustration: "referrals",
  },
  {
    number: "02",
    category: "HOSPITALITY",
    title: "Hotel & Destination Reviews",
    description:
      "Submit honest ratings and feedback on featured hotels, lodges, and travel spots across Africa to get rewarded.",
    tags: ["5-Star ratings", "Hospitality feedback", "Travel perks"],
    rowSpan: "lg:col-span-6",
    illustration: "hotels",
  },
  // Row 2: 3 Medium Cards
  {
    number: "03",
    category: "STREAM",
    title: "Video & Media Streams",
    description:
      "Pick from daily sponsored clips, watch through to completion, and collect instant task credits in your wallet.",
    tags: ["YouTube clips", "TikTok", "Featured reels"],
    rowSpan: "lg:col-span-4",
    illustration: "video",
  },
  {
    number: "04",
    category: "PLAY",
    title: "Lucky Wheel Spins",
    description:
      "Test your luck on the daily bonus wheel or enter multiplier rounds for a shot at instant wallet boosters.",
    tags: ["Daily free spin", "Bonus multipliers"],
    rowSpan: "lg:col-span-4",
    illustration: "wheel",
  },
  {
    number: "05",
    category: "CHALLENGE",
    title: "Brain Trivia & Polls",
    description:
      "Answer quick multiple-choice knowledge quizzes and consumer polls to convert your smarts into cash.",
    tags: ["Timed quizzes", "Market polls"],
    rowSpan: "lg:col-span-4",
    illustration: "trivia",
  },
  // Row 3: 2 Large Cards
  {
    number: "06",
    category: "TRADE",
    title: "Forex Trading Academy",
    description:
      "Learn chart reading, risk management, and live market execution through structured beginner-to-pro lessons.",
    tags: ["Candlestick mastery", "Live signals", "Partner brokers"],
    rowSpan: "lg:col-span-6",
    illustration: "forex",
  },
  {
    number: "07",
    category: "DISCOVER",
    title: "Sponsored Brand Campaigns",
    description:
      "Engage with partner promotions, app trials, and digital brand spotlights curated for your region.",
    tags: ["Brand offers", "Partner actions"],
    rowSpan: "lg:col-span-6",
    illustration: "sponsored",
  },
  // Row 4: 4 Compact Cards
  {
    number: "08",
    category: "PUBLISH",
    title: "Article Publishing",
    description:
      "Draft engaging blog posts and topical stories following simple editorial prompts to earn creator payouts.",
    tags: ["Content writing", "Editorial tasks"],
    rowSpan: "lg:col-span-3",
    illustration: "blogging",
  },
  {
    number: "09",
    category: "CINEMA",
    title: "Movie Previews",
    description:
      "Watch selected movie trailers and featured entertainment segments to unlock viewing bonuses.",
    tags: ["Trailers", "Entertainment"],
    rowSpan: "lg:col-span-3",
    illustration: "movies",
  },
  {
    number: "10",
    category: "SOCIAL",
    title: "Short-Form Reels",
    description:
      "Browse bite-sized vertical videos and trending social clips right inside your dashboard.",
    tags: ["Vertical clips", "Quick views"],
    rowSpan: "lg:col-span-3",
    illustration: "reels",
  },
  {
    number: "11",
    category: "CONNECT",
    title: "Global Chat Rooms",
    description:
      "Join moderated topic discussions and interactive community sessions with earners across the continent.",
    tags: ["Interactive rooms", "Community rewards"],
    rowSpan: "lg:col-span-3",
    illustration: "chat",
  },
];

// Custom Branded SVG Illustrations matching the reference style in FlexQash Navy & Gold
function CardIllustration({ type }) {
  switch (type) {
    case "referrals":
      return (
        <div className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#eef4fb] to-[#dde8f6] p-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1e3a5f] text-[#f5b82e] shadow-md">
              <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
              </svg>
            </div>
            <div className="flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 shadow-sm border border-slate-200">
              <span className="h-1.5 w-3 rounded-full bg-[#1e3a5f]" />
              <span className="h-1.5 w-3 rounded-full bg-[#1e3a5f]" />
              <span className="text-sm font-black text-[#f5b82e]">➔</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#1e3a5f] shadow-sm border border-slate-200">
                <span className="text-xs font-extrabold">+1</span>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5b82e] text-[#1e3a5f] shadow-sm">
                <span className="text-xs font-extrabold">+2</span>
              </div>
            </div>
          </div>
        </div>
      );

    case "hotels":
      return (
        <div className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#fef9ec] to-[#faecc8] p-6">
          <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-md border border-[#f5b82e]/30">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1e3a5f] text-[#f5b82e]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-extrabold text-[#1e3a5f]">Grand Luxury Resort</div>
              <div className="mt-1 flex items-center gap-0.5 text-[#f5b82e] text-sm">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <div className="mt-1.5 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                ✓ Review Verified
              </div>
            </div>
          </div>
        </div>
      );

    case "video":
      return (
        <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#eef4fb] to-[#e2ecf9] p-5">
          <div className="flex w-52 items-center gap-3 rounded-xl border-2 border-[#1e3a5f] bg-white p-3 shadow-md">
            <div className="flex h-12 w-16 shrink-0 items-center justify-center rounded-lg bg-[#1e3a5f] text-[#f5b82e]">
              ▶
            </div>
            <div className="w-full space-y-1.5">
              <div className="h-2 w-4/5 rounded-full bg-[#1e3a5f]" />
              <div className="h-2 w-3/5 rounded-full bg-slate-200" />
              <div className="h-3.5 w-16 rounded-full bg-[#f5b82e]" />
            </div>
          </div>
        </div>
      );

    case "wheel":
      return (
        <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#fef9ec] to-[#f9e8b8] p-5">
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#1e3a5f] bg-conic from-[#f5b82e] via-[#1e3a5f] to-[#f5b82e] shadow-md">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[10px] font-black text-[#1e3a5f] shadow">
              WIN
            </div>
          </div>
          <span className="ml-3 rounded-lg bg-[#1e3a5f] px-3 py-1.5 text-[10px] font-bold text-[#f5b82e] shadow-xs">
            2x BONUS
          </span>
        </div>
      );

    case "trivia":
      return (
        <div className="relative flex h-40 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#eef4fb] to-[#dde8f6] p-5">
          <div className="w-48 rounded-xl bg-white p-3 shadow-md border border-slate-200">
            <div className="text-[10px] font-extrabold text-[#1e3a5f]">Select correct answer:</div>
            <div className="mt-2 flex items-center gap-2 rounded-md bg-slate-100 px-2 py-1">
              <span className="h-2.5 w-2.5 rounded-full border border-slate-400" />
              <span className="h-1.5 w-20 rounded-full bg-slate-400" />
            </div>
            <div className="mt-1.5 flex items-center gap-2 rounded-md bg-[#fef5dc] px-2 py-1 border border-[#f5b82e]">
              <span className="text-[10px] font-bold text-[#1e3a5f]">✓</span>
              <span className="h-1.5 w-24 rounded-full bg-[#1e3a5f]" />
            </div>
          </div>
          <div className="-ml-2 -mt-8 flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5b82e] text-lg font-black text-[#1e3a5f] shadow-md">
            ?
          </div>
        </div>
      );

    case "forex":
      return (
        <div className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#162944] to-[#24436f] p-6">
          <div className="flex items-end gap-2.5">
            <div className="h-10 w-3 rounded-xs bg-rose-400" />
            <div className="h-16 w-3 rounded-xs bg-emerald-400" />
            <div className="h-12 w-3 rounded-xs bg-rose-400" />
            <div className="h-20 w-3 rounded-xs bg-[#f5b82e]" />
            <div className="h-24 w-3 rounded-xs bg-emerald-400" />
          </div>
          <div className="ml-6 rounded-xl bg-white/10 p-3 backdrop-blur-xs border border-white/15 text-left">
            <div className="text-[10px] font-bold uppercase tracking-wider text-[#f5b82e]">EUR / USD</div>
            <div className="text-sm font-extrabold text-white">Bullish Breakout</div>
            <div className="mt-1 text-[10px] text-emerald-300 font-semibold">▲ +2.45% Academy Signal</div>
          </div>
        </div>
      );

    case "sponsored":
      return (
        <div className="relative flex h-44 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#fef9ec] to-[#f8e7ba] p-6">
          <div className="flex w-60 items-center justify-between rounded-xl border-2 border-[#1e3a5f] bg-white p-3.5 shadow-md">
            <div className="space-y-1.5">
              <span className="inline-block rounded bg-[#f5b82e]/20 px-2 py-0.5 text-[9px] font-extrabold text-[#1e3a5f]">
                PARTNER AD
              </span>
              <div className="h-2.5 w-28 rounded-full bg-[#1e3a5f]" />
              <div className="h-2 w-20 rounded-full bg-slate-300" />
            </div>
            <span className="rounded-lg bg-[#f5b82e] px-3 py-1.5 text-[10px] font-extrabold text-[#1e3a5f]">
              EARN
            </span>
          </div>
        </div>
      );

    default:
      return (
        <div className="relative flex h-36 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#eef4fb] to-[#dde8f6] p-4">
          <div className="flex h-14 w-20 items-center justify-center rounded-xl border-2 border-[#1e3a5f] bg-white shadow-sm">
            <div className="h-3 w-3 rounded-full bg-[#f5b82e]" />
            <div className="ml-2 space-y-1">
              <div className="h-1.5 w-8 rounded-full bg-[#1e3a5f]" />
              <div className="h-1.5 w-6 rounded-full bg-slate-300" />
            </div>
          </div>
        </div>
      );
  }
}

export default function WaysToEarn() {
  return (
    <section id="products" className="relative z-20 pb-20">
      {/* PART 1: Top 4 Overlapping Quick Cards (Matches your FlexQash Hero Screenshot) */}
      <div className="mx-auto -mt-16 sm:-mt-24 max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TOP_HIGHLIGHTS.map((card) => (
            <div
              key={card.title}
              className={`group relative flex flex-col items-center justify-between rounded-2xl p-6 text-center shadow-xl transition-all duration-300 hover:-translate-y-1.5 ${
                card.featured
                  ? "bg-[#f5b82e] text-[#162944]"
                  : "bg-white text-[#1e3a5f] border-b-4 border-[#f5b82e] hover:bg-[#f5b82e] hover:text-[#162944]"
              }`}
            >
              {/* Circular Icon */}
              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full transition-colors ${
                  card.featured
                    ? "bg-[#162944]/10 text-[#162944]"
                    : "bg-[#fef5dc] text-[#d99b16] group-hover:bg-[#162944]/10 group-hover:text-[#162944]"
                }`}
              >
                {card.icon}
              </div>

              <h3 className="text-lg font-extrabold tracking-tight">
                {card.title}
              </h3>

              <p
                className={`mt-2 text-xs leading-relaxed ${
                  card.featured
                    ? "text-[#162944]/90 font-medium"
                    : "text-slate-500 group-hover:text-[#162944]/90"
                }`}
              >
                {card.description}
              </p>

              <span
                className={`mt-4 inline-block rounded-full px-4 py-1.5 text-xs font-extrabold shadow-xs transition ${
                  card.featured
                    ? "bg-white text-[#162944]"
                    : "bg-[#1e3a5f] text-white group-hover:bg-white group-hover:text-[#162944]"
                }`}
              >
                {card.cta}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* PART 2: Full Bento Grid Section (Matches your reference layout) */}
      <div className="mx-auto mt-20 max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#d99b16]" />
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#d99b16]">
                One Ecosystem, Multiple Income Streams
              </span>
            </div>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1e3a5f] sm:text-5xl">
              Pick the earning style that suits you.
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-slate-600 leading-relaxed">
            Combine Forex education, hotel reviews, video streams, trivia quizzes, and affiliate bonuses inside one unified dashboard. Task availability adapts to your country.
          </p>
        </div>

        {/* 12-Column Responsive Bento Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          {EARNING_STREAMS.map((item) => (
            <div
              key={item.number}
              className={`${item.rowSpan} group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#f5b82e] hover:shadow-xl`}
            >
              <div>
                {/* Top Illustration */}
                <CardIllustration type={item.illustration} />

                {/* Number & Category Row */}
                <div className="mt-5 flex items-center justify-between text-[11px] font-extrabold uppercase tracking-widest">
                  <span className="text-slate-400">{item.number}</span>
                  <span className="text-[#d99b16]">{item.category}</span>
                </div>

                {/* Card Title */}
                <h3 className="mt-2 text-xl font-extrabold text-[#1e3a5f] group-hover:text-[#d99b16] transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Pill Tags */}
              <div className="mt-5 flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1 text-xs font-bold text-[#1e3a5f]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}