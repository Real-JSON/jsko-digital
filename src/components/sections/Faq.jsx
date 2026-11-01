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
            className="max-w-310 mx-auto py-30 px-[5%] grid grid-cols-[0.8fr_1.2fr] gap-17.5 max-[900px]:grid-cols-1 max-[900px]:gap-8.75 max-[640px]:py-21.25 max-[640px]:px-[6%] max-[640px]:gap-6.25"
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
            <div className="border-t border-(--line)">
                {faqs.map(([q, a], i) => (
                    <details
                        key={q}
                        className="group border-b border-(--line)"
                    >
                        <summary className="flex items-center gap-4.5 py-5.75 px-0 cursor-pointer list-none text-[14px] [&::-webkit-details-marker]:hidden max-[640px]:text-[12px] max-[640px]:gap-3">
                            <span className="text-[9px] text-(--green)">
                                0{i + 1}
                            </span>
                            {q}
                            <span className="ml-auto text-(--green) text-[20px] transition-transform duration-200 group-open:rotate-45">
                                +
                            </span>
                        </summary>
                        <p className="max-w-142.5 mt-0 mx-7.5 mb-5.75 text-(--muted) text-[12px] leading-[1.9]">
                            {a}
                        </p>
                    </details>
                ))}
            </div>
        </section>
    );
};

export default Faq;
