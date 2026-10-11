import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  const navLinks = [
    { name: "Products", href: "#products" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Countries", href: "#countries" },
    { name: "FAQ", href: "#faq" },
  ];

  // Unique FlexQash launch share message & URL
  const shareUrl = "https://www.flexqash.com/launch";
  const shareCaption =
    "Get ready to turn your phone into a daily income stream! Count down to the official FlexQash launch:";
  const fullShareMessage = `${shareCaption}\n${shareUrl}`;

  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
    fullShareMessage
  )}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(fullShareMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "FLEXQASH — Digital Gigs, Forex Academy & Instant Payouts",
          text: shareCaption,
          url: shareUrl,
        });
      } catch {
        // User closed share sheet
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <>
      <header className="sticky top-0 z-30 w-full bg-white border-b border-slate-100 shadow-xs">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="FlexQash Logo"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="flex flex-col leading-none">
              <div className="text-2xl font-extrabold tracking-tight">
                <span className="text-[#1e3a5f]">Flex</span>
                <span className="text-[#f5b82e]">Qash</span>
              </div>
              <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Digital Marketting
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-bold text-[#1e3a5f] transition-colors hover:text-[#f5b82e]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Share Launch Pill Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => setShareModalOpen(true)}
              className="inline-flex items-center gap-2.5 rounded-full border border-[#1e3a5f]/20 bg-[#1e3a5f] px-5 py-2.5 text-sm font-bold text-white shadow-xs transition-all hover:bg-[#f5b82e] hover:text-[#1e3a5f] hover:border-[#f5b82e] cursor-pointer"
            >
              <svg
                className="h-4 w-4"
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
              <span>Share launch</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden rounded-lg p-2 text-[#1e3a5f] hover:bg-slate-100"
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm font-bold text-[#1e3a5f] hover:text-[#f5b82e]"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setShareModalOpen(true);
              }}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-[#1e3a5f] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#f5b82e] hover:text-[#1e3a5f]"
            >
              <svg
                className="h-4 w-4"
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
              <span>Share launch</span>
            </button>
          </div>
        )}
      </header>

      {/* Rich Launch Link Preview & Share Modal */}
      {shareModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
          <div className="relative w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-extrabold text-[#1e3a5f]">
                Share FlexQash Launch
              </h3>
              <button
                onClick={() => setShareModalOpen(false)}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Original FlexQash Branded Preview Card */}
            <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 bg-[#132942] text-white shadow-md">
              {/* Top Graphic Banner */}
              <div className="relative flex items-center justify-between gap-4 bg-gradient-to-br from-[#162f4c] to-[#234b7a] p-5">
                <div className="space-y-1.5">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-[#f5b82e]">
                    Smart Digital Earnings & Forex
                  </p>
                  <p className="text-xs font-extrabold tracking-wide text-white">
                    FLEXQASH AGENCIES
                  </p>
                  <h4 className="text-lg font-extrabold leading-tight text-white pt-1">
                    Learn the skills.
                    <br />
                    <span className="text-[#f5b82e]">Unlock daily payouts.</span>
                  </h4>
                  <p className="text-[10px] text-slate-300 leading-relaxed">
                    Forex academy, video ads, trivia, articles & instant M-Pesa/Mobile Money cashouts.
                  </p>
                </div>

                {/* Right Emblem Box */}
                <div className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#1e3a5f]/80 p-3 shadow-inner shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#fffdf7] p-2 shadow-sm">
                    <img
                      src={logo}
                      alt="FlexQash"
                      className="h-full w-full object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                  <span className="mt-1.5 text-[7px] font-bold uppercase tracking-widest text-[#f5b82e]">
                    Learn • Trade • Earn
                  </span>
                </div>
              </div>

              {/* Link Meta Description Box */}
              <div className="bg-[#0f2136] px-4 py-3 border-t border-white/10">
                <p className="text-xs font-bold text-white leading-snug">
                  FLEXQASH — Digital Gigs, Forex Academy & Instant Payouts
                </p>
                <p className="mt-1 text-[11px] text-slate-300 line-clamp-2">
                  Turn your screen time into steady income across Africa with beginner-friendly Forex classes, paid video tasks, trivia challenges, and instant Mobile Money withdrawals.
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  www.flexqash.com
                </p>
              </div>

              {/* Message text + URL preview */}
              <div className="bg-[#163252] px-4 py-3 border-t border-white/10 text-xs">
                <p className="text-white">{shareCaption}</p>
                <p className="mt-0.5 font-medium text-[#f5b82e] underline">
                  {shareUrl}
                </p>
              </div>
            </div>

            {/* Share Action Buttons */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href={whatsappShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white shadow-xs transition hover:opacity-95"
              >
                <span>📲</span> WhatsApp
              </a>
              <button
                onClick={handleCopyLink}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#1e3a5f] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#f5b82e] hover:text-[#1e3a5f] cursor-pointer"
              >
                {copied ? "✓ Link Copied!" : "🔗 Copy Launch Link"}
              </button>
            </div>
            <button
              onClick={handleNativeShare}
              className="mt-2.5 w-full rounded-xl border border-slate-200 py-2 text-xs font-bold text-[#1e3a5f] hover:bg-slate-50 cursor-pointer"
            >
              More Share Options...
            </button>
          </div>
        </div>
      )}
    </>
  );
}