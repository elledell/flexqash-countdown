import { useState, useEffect } from "react";
import heroBg from "../assets/hero.png";

// Saturday, October 24, 2026 at 2:00 PM EAT (UTC+3)
const LAUNCH_DATE = "2026-10-24T14:00:00+03:00";

const HEADLINES = [
  "Turn Your Phone Into a Money-Making Machine",
  "Watch Videos, Ads & Complete Simple Tasks",
  "Master Forex Trading & Earn Daily Rewards",
];

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());
  const [copied, setCopied] = useState(false);

  // Typewriter state
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  function getTimeRemaining() {
    const total = Date.parse(LAUNCH_DATE) - Date.now();
    if (total <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }
    return {
      days: Math.floor(total / (1000 * 60 * 60 * 24)),
      hours: Math.floor((total / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((total / 1000 / 60) % 60),
      seconds: Math.floor((total / 1000) % 60),
      expired: false,
    };
  }

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Smooth Typewriter effect matching your screenshots
  useEffect(() => {
    const currentFullText = HEADLINES[headlineIndex];
    const typingSpeed = isDeleting ? 35 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentFullText.length) {
        setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText.length === currentFullText.length) {
        setTimeout(() => setIsDeleting(true), 2200);
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setHeadlineIndex((prev) => (prev + 1) % HEADLINES.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, headlineIndex]);

  const shareUrl = "https://www.flexqash.com/launch";
  const shareCaption =
    "Get ready to turn your phone into a daily income stream! Count down to the official FlexQash launch on Oct 24 at 2:00 PM EAT:";
  const fullShareMessage = `${shareCaption}\n${shareUrl}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(fullShareMessage)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullShareMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#162944] via-[#1f3b64] to-[#345995] pt-12 pb-28 sm:pt-16 sm:pb-36 text-white">
      {/* Optional Hero Background Image from assets (blended softly) */}
      <img
        src={heroBg}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-10 mix-blend-overlay"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />

      {/* Subtle Forex Line Chart SVG Background (Matches reference screenshots) */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-15"
        viewBox="0 0 1440 600"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M-50 480 L180 390 L350 430 L560 270 L780 340 L1020 190 L1240 240 L1490 90"
          stroke="#ffffff"
          strokeWidth="2"
        />
        <path
          d="M-50 540 L220 460 L460 500 L710 380 L940 420 L1190 290 L1490 220"
          stroke="#f5b82e"
          strokeWidth="1.5"
        />
      </svg>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        {/* Official Launch Date Pill */}
        <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/15 bg-[#0f2138]/60 px-4 py-1.5 text-xs sm:text-sm font-semibold text-slate-200 backdrop-blur-md shadow-sm">
          <span>🚀 Official Launch:</span>
          <span className="font-extrabold text-[#f5b82e]">
            Saturday, October 24, 2026 • 2:00 PM EAT
          </span>
        </div>

        {/* Typewriter Main Heading */}
        <h1 className="min-h-[3.5rem] sm:min-h-[5.5rem] max-w-3xl text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl leading-tight">
          <span>{displayedText}</span>
          <span className="ml-1 inline-block h-8 sm:h-12 w-[3px] animate-pulse bg-[#f5b82e] align-middle" />
        </h1>

        {/* Subtitle Description */}
        <p className="mt-4 max-w-2xl text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed">
          FLEXQASH gives you multiple ways to earn money online — refer friends,
          watch videos, answer trivia, write articles and spin to win. Withdraw
          instantly to M-Pesa, Airtel Money, MTN and more.
        </p>

        {/* Contact Info Pill (Email & Call) */}
        <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 rounded-full bg-[#15263f]/90 border border-white/10 px-6 py-2.5 text-xs sm:text-sm shadow-lg backdrop-blur-md">
          <div>
            <span className="font-bold text-[#f5b82e]">Email: </span>
            <a
              href="mailto:support@flexqash.com"
              className="text-white hover:underline"
            >
              support@flexqash.com
            </a>
          </div>
          <span className="hidden sm:inline text-slate-500">|</span>
          <div>
            <span className="font-bold text-[#f5b82e]">Call: </span>
            <a
              href="tel:+254700000000"
              className="text-white hover:underline"
            >
              +254 700 000 000
            </a>
          </div>
        </div>

        {/* Live Countdown Grid */}
        <div className="mt-9 grid w-full max-w-2xl grid-cols-2 gap-3.5 sm:grid-cols-4 sm:gap-5">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/15 bg-[#12233b]/75 p-5 backdrop-blur-md shadow-xl transition-transform hover:-translate-y-0.5"
            >
              <span className="text-3xl font-extrabold text-white sm:text-5xl tabular-nums">
                {String(item.value).padStart(2, "0")}
              </span>
              <span className="mt-1.5 text-[11px] font-extrabold uppercase tracking-widest text-[#f5b82e]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Quick Share & Copy CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 rounded-xl bg-[#f5b82e] px-6 py-3.5 text-sm font-extrabold text-[#162944] shadow-lg transition hover:bg-[#e0a61f] flex items-center justify-center gap-2"
          >
            <span>📲</span> Share on WhatsApp
          </a>

          <button
            onClick={handleCopy}
            className="w-full sm:w-auto flex-1 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/20 cursor-pointer"
          >
            {copied ? "✓ Launch Link Copied!" : "🔗 Copy Launch Link"}
          </button>
        </div>
      </div>
    </section>
  );
}