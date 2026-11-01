import React from "react";
import SectionHeading from "./SectionHeading";

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
    return (
        <section
            id="faq"
            className="max-w-[1240px] mx-auto py-[120px] px-[5%] grid grid-cols-[0.8fr_1.2fr] gap-[70px] max-[900px]:grid-cols-1 max-[900px]:gap-[35px] max-[640px]:py-[85px] max-[640px]:px-[6%] max-[640px]:gap-[25px]"
        >
            <SectionHeading
                eyebrow="GOOD TO KNOW"
                title={
                    <>
                        A few things you
                        <br />
                        <span className="bg-[linear-gradient(105deg,#00e0a2_0%,#66e5c0_48%,#a47aff_100%)] bg-clip-text text-transparent">
                            might be wondering.
                        </span>
                    </>
                }
            />
            <div className="border-t border-[var(--line)]">
                {faqs.map(([q, a], i) => (
                    <details
                        key={q}
                        className="group border-b border-[var(--line)]"
                    >
                        <summary className="flex items-center gap-[18px] py-[23px] px-0 cursor-pointer list-none text-[14px] [&::-webkit-details-marker]:hidden max-[640px]:text-[12px] max-[640px]:gap-[12px]">
                            <span className="text-[9px] text-[var(--green)]">
                                0{i + 1}
                            </span>
                            {q}
                            <span className="ml-auto text-[var(--green)] text-[20px] transition-transform duration-200 group-open:rotate-45">
                                +
                            </span>
                        </summary>
                        <p className="max-w-[570px] mt-0 mx-[30px] mb-[23px] text-[var(--muted)] text-[12px] leading-[1.9]">
                            {a}
                        </p>
                    </details>
                ))}
            </div>
        </section>
    );
};

export default Faq;
