import React from "react";

const COUNTRIES = [
  { name: "Kenya", code: "ke" },
  { name: "Uganda", code: "ug" },
  { name: "Tanzania", code: "tz" },
  { name: "Rwanda", code: "rw" },
  { name: "Burundi", code: "bi" },
  { name: "Zambia", code: "zm" },
  { name: "Malawi", code: "mw" },
  { name: "Nigeria", code: "ng" },
  { name: "Ghana", code: "gh" },
  { name: "Botswana", code: "bw" },
  { name: "Cameroon", code: "cm" },
  { name: "South Sudan", code: "ss" },
  { name: "DRC", code: "cd" },
];

export default function TopBar() {
  // Duplicate the list so the infinite scroll loops seamlessly without a gap
  const marqueeCountries = [...COUNTRIES, ...COUNTRIES];

  return (
    <div className="relative w-full overflow-hidden bg-white border-b border-slate-100 py-2.5 select-none">
      {/* Inline keyframes so it works out-of-the-box without editing tailwind.config.js */}
      <style>{`
        @keyframes marqueeRightToLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-country-marquee {
          display: flex;
          width: max-content;
          animation: marqueeRightToLeft 30s linear infinite;
        }
        .animate-country-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Left & Right Fade Gradients (matches the soft fade on the edges of your screenshot) */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

      {/* Scrolling Track */}
      <div className="animate-country-marquee">
        {marqueeCountries.map((country, index) => (
          <div
            key={`${country.code}-${index}`}
            className="mx-6 flex items-center gap-2 text-xs sm:text-sm font-medium text-[#1e3a5f]"
          >
            <img
              src={`https://flagcdn.com/w40/${country.code}.png`}
              srcSet={`https://flagcdn.com/w80/${country.code}.png 2x`}
              alt={`${country.name} flag`}
              className="h-3.5 w-5 rounded-[3px] object-cover shadow-xs"
              loading="lazy"
            />
            <span className="whitespace-nowrap">{country.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}