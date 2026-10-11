import React from "react";

const SUPPORTED_COUNTRIES = [
  {
    name: "Kenya",
    code: "ke",
    currency: "KES",
    payouts: "M-Pesa & Airtel Money",
  },
  {
    name: "Uganda",
    code: "ug",
    currency: "UGX",
    payouts: "MTN MoMo & Airtel Money",
  },
  {
    name: "Tanzania",
    code: "tz",
    currency: "TZS",
    payouts: "M-Pesa, Airtel & Tigo Pesa",
  },
  {
    name: "Rwanda",
    code: "rw",
    currency: "RWF",
    payouts: "MTN MoMo & Airtel Money",
  },
  {
    name: "Burundi",
    code: "bi",
    currency: "BIF",
    payouts: "Lumicash & EcoCash",
  },
  {
    name: "Zambia",
    code: "zm",
    currency: "ZMW",
    payouts: "MTN MoMo & Airtel Money",
  },
  {
    name: "Malawi",
    code: "mw",
    currency: "MWK",
    payouts: "Airtel Money & TNM Mpamba",
  },
  {
    name: "Nigeria",
    code: "ng",
    currency: "NGN",
    payouts: "OPay, PalmPay & Instant Bank",
  },
  {
    name: "Ghana",
    code: "gh",
    currency: "GHS",
    payouts: "MTN MoMo, Telecel & AirtelTigo",
  },
  {
    name: "Botswana",
    code: "bw",
    currency: "BWP",
    payouts: "Orange Money & MyZaka",
  },
  {
    name: "Cameroon",
    code: "cm",
    currency: "XAF",
    payouts: "MTN MoMo & Orange Money",
  },
  {
    name: "South Sudan",
    code: "ss",
    currency: "SSP",
    payouts: "m-Gurush & MTN MoMo",
  },
  {
    name: "DRC",
    code: "cd",
    currency: "CDF / USD",
    payouts: "M-Pesa, Airtel & Orange Money",
  },
];

export default function Countries() {
  return (
    <section id="countries" className="w-full bg-white py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#fef5dc] px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#d99b16]">
            <span>🌍</span> Pan-African Reach
          </div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#162944] sm:text-4xl">
            Launching Simultaneously Across Africa
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Earn in your local currency and withdraw your balance seamlessly to
            trusted mobile money wallets in 13 countries from day one.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {SUPPORTED_COUNTRIES.map((country) => (
            <div
              key={country.code}
              className="group flex items-center justify-between rounded-2xl border border-slate-200/80 bg-[#f8fafd] p-4 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#f5b82e] hover:bg-white hover:shadow-md"
            >
              <div className="flex items-center gap-3.5">
                {/* Flag Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-2xs">
                  <img
                    src={`https://flagcdn.com/w80/${country.code}.png`}
                    alt={`${country.name} flag`}
                    className="h-full w-full rounded-lg object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Country Name & Mobile Money Providers */}
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-extrabold text-[#162944] group-hover:text-[#d99b16] transition-colors">
                      {country.name}
                    </h3>
                  </div>
                  <p className="mt-0.5 text-xs font-medium text-slate-500">
                    {country.payouts}
                  </p>
                </div>
              </div>

              {/* Currency Pill */}
              <span className="rounded-lg bg-[#eef2f9] px-2.5 py-1 text-[10px] font-extrabold text-[#1e3a5f] group-hover:bg-[#f5b82e] group-hover:text-[#162944] transition-colors">
                {country.currency}
              </span>
            </div>
          ))}

          {/* "More Countries Coming Soon" Card to balance the 4-column grid */}
          <div className="flex items-center justify-center rounded-2xl border border-dashed border-[#f5b82e]/60 bg-[#fef9ec]/60 p-4 text-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#d99b16]">
                + Expanding Soon
              </p>
              <p className="mt-0.5 text-xs font-medium text-[#162944]/80">
                More African regions joining after launch
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}