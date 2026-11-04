import { useState } from "react";

const faqs = [
    [
        "How long does a website take?",
        "A typical small business website can take around 2–4 weeks after the content and project scope are confirmed. Larger projects may take longer.",
    ],
    [
        "Can you work with an existing brand?",
        "Yes. We can work with your current logo, colours and brand assets, or help refine the visual direction where needed.",
    ],
    [
        "Will my website work on mobile?",
        "Yes. Responsive behaviour is part of the design and development process, not an optional extra.",
    ],
    [
        "What do you need to get started?",
        "A short overview of your business, your goals, any existing brand assets, and examples of websites or styles you like are a great starting point.",
    ],
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section
            id="faq"
            className="max-w-310 mx-auto py-30 px-[5%] grid grid-cols-[0.8fr_1.2fr] gap-17.5 max-[900px]:grid-cols-1 max-[900px]:gap-10 max-[640px]:py-21.25 max-[640px]:px-[6%] max-[640px]:gap-8"
        >
            {/* FAQ Heading */}
            <div className="max-w-100">
                <span className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-(--green) mb-5">
                    Good to know
                </span>

                <h2 className="text-[clamp(30px,3.5vw,46px)] leading-[1.15] tracking-[-1.5px] font-medium max-[640px]:text-[32px]">
                    A few things you{" "}
                    <span className="bg-[linear-gradient(105deg,#00e0a2_0%,#66e5c0_48%,#a47aff_100%)] bg-clip-text text-transparent">
                        might be wondering.
                    </span>
                </h2>
            </div>

            {/* FAQ Items */}
            <div className="border-t border-(--line)">
                {faqs.map(([q, a], i) => (
                    <details
                        key={q}
                        open={activeIndex === i}
                        onToggle={(e) => {
                            if (e.currentTarget.open) {
                                setActiveIndex(i);
                            } else {
                                setActiveIndex((current) =>
                                    current === i ? null : current,
                                );
                            }
                        }}
                        className="group border-b border-(--line)"
                    >
                        <summary className="flex items-center gap-4 py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden max-[640px]:gap-3 max-[640px]:py-5">
                            <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-(--green) opacity-70 group-open:opacity-100 group-open:shadow-[0_0_10px_var(--green)] transition-all duration-200" />

                            <span className="text-[14px] leading-relaxed max-[640px]:text-[12px]">
                                {q}
                            </span>

                            <span className="ml-auto shrink-0 text-(--green) text-[20px] transition-transform duration-200 group-open:rotate-45">
                                +
                            </span>
                        </summary>

                        <p className="max-w-142.5 pl-5.5 pb-6 text-(--muted) text-[12px] leading-[1.9] max-[640px]:text-[11px] max-[640px]:pb-5">
                            {a}
                        </p>
                    </details>
                ))}
            </div>
        </section>
    );
};

export default Faq;
