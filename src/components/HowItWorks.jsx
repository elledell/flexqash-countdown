import React from "react";

const STEPS = [
  {
    step: "1",
    title: "Create Your Account",
    description:
      "Register free in under a minute with just your phone number and email address.",
  },
  {
    step: "2",
    title: "Activate & Explore",
    description:
      "Pay a small one-time activation fee via mobile money and unlock every earning feature.",
  },
  {
    step: "3",
    title: "Earn & Withdraw",
    description:
      "Do the activities you enjoy and withdraw your earnings straight to mobile money.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full bg-[#eef2f9] py-20 px-6 text-center"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <h2 className="text-3xl font-extrabold tracking-tight text-[#162944] sm:text-4xl">
          How It Works
        </h2>
        <p className="mt-3 text-sm sm:text-base font-medium text-[#2c4c7e]">
          You are three simple steps away from your first withdrawal.
        </p>

        {/* 3 Steps Grid */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((item) => (
            <div
              key={item.step}
              className="group flex flex-col items-center text-center"
            >
              {/* Circular Number Badge */}
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#31507f] text-xl font-extrabold text-white shadow-md transition-all duration-300 group-hover:scale-105 group-hover:bg-[#f5b82e] group-hover:text-[#162944]">
                {item.step}
              </div>

              {/* Step Title */}
              <h3 className="mt-6 text-lg font-extrabold text-[#162944]">
                {item.title}
              </h3>

              {/* Step Description */}
              <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-[#2c4c7e]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}