import { useState } from "react";
import logo from "../assets/logo.png";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const shareUrl = "https://www.flexqash.com/launch";
  const shareCaption =
    "Get ready to turn your phone into a daily income stream! Count down to the official FlexQash launch:";
  const fullShareMessage = `${shareCaption}\n${shareUrl}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "FLEXQASH — Digital Gigs, Forex Academy & Instant Payouts",
          text: shareCaption,
          url: shareUrl,
        });
      } catch {
        // User cancelled native share
      }
    } else {
      navigator.clipboard.writeText(fullShareMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <footer className="w-full bg-[#162944] text-slate-300 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="flex items-center gap-2.5">
              <img
                src={logo}
                alt="FlexQash Logo"
                className="h-9 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <div className="text-2xl font-extrabold tracking-tight">
                <span className="text-white">Flex</span>
                <span className="text-[#f5b82e]">Qash</span>
              </div>
            </a>
            <p className="mt-2 max-w-sm text-xs text-slate-400 leading-relaxed">
              Smart digital earnings, beginner-friendly Forex lessons, and instant mobile money payouts across Africa.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-bold text-slate-200">
            <a href="#products" className="transition hover:text-[#f5b82e]">
              Products
            </a>
            <a href="#how-it-works" className="transition hover:text-[#f5b82e]">
              How It Works
            </a>
            <a href="#countries" className="transition hover:text-[#f5b82e]">
              Countries
            </a>
            <a href="#faq" className="transition hover:text-[#f5b82e]">
              FAQ
            </a>
          </div>

          {/* Support Contact Info & Share Button */}
          <div className="flex flex-col items-center md:items-end text-xs space-y-2">
            <div>
              <span className="font-bold text-[#f5b82e]">Email: </span>
              <a
                href="mailto:support@flexqash.com"
                className="text-slate-200 hover:underline"
              >
                support@flexqash.com
              </a>
            </div>
            <div>
              <span className="font-bold text-[#f5b82e]">Call: </span>
              <a
                href="tel:+254700000000"
                className="text-slate-200 hover:underline"
              >
                +254 700 000 000
              </a>
            </div>

            {/* Footer Share Launch Button */}
            <button
              onClick={handleShare}
              className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#f5b82e]/40 bg-[#f5b82e]/10 px-4 py-2 text-xs font-extrabold text-[#f5b82e] transition-all hover:bg-[#f5b82e] hover:text-[#162944] cursor-pointer"
            >
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              <span>{copied ? "✓ Link Copied!" : "Share launch"}</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} FlexQash Agencies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}