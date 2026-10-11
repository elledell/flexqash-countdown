import { useState } from "react";

const FAQS = [
  {
    question: "How do I start earning on FLEXQASH?",
    answer:
      "Create a free account, activate it with a one-time fee for your country, and instantly unlock referrals, video watching, trivia, articles, spins and every other earning feature.",
  },
  {
    question: "How do withdrawals work?",
    answer:
      "Withdrawals are paid straight to your mobile money account — M-Pesa in Kenya, Airtel Money, MTN Mobile Money, Tigo Pesa and other local methods depending on your country.",
  },
  {
    question: "How much can I earn from referrals?",
    answer:
      "You earn on three referral levels. Direct referrals pay the most, and you also earn from the people your referrals invite. Top referrers appear on the weekly country leaderboard.",
  },
  {
    question: "Is there a FLEXQASH mobile app?",
    answer:
      "Yes — download the Android app straight from this website using the DOWNLOAD button, and manage your earnings on the go.",
  },
  {
    question: "Which countries are supported?",
    answer:
      "Kenya, Uganda, Tanzania, Rwanda, Burundi, Malawi, Cameroon, Nigeria, Ghana, DR Congo, Mozambique, Botswana, South Sudan, Zambia, Zimbabwe, South Africa and more are joining regularly.",
  },
];

export default function Faq() {
  // Default open the first FAQ item (index 0) just like your first screenshot
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-[#eef2f9] py-20 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#162944] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base font-medium text-[#2c4c7e]">
            Everything you need to know about getting started and earning with FLEXQASH.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-xs transition-all duration-200 hover:border-slate-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-extrabold text-[#162944]">
                    {faq.question}
                  </span>
                  <span className="ml-4 shrink-0 text-2xl font-medium leading-none text-[#1abc9c] select-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed text-[#2c4c7e]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}