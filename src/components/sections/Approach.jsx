const steps = [
    [
        "01",
        "Discover",
        "We get to know your business, audience and goals before deciding what to build.",
    ],
    [
        "02",
        "Shape",
        "We map the content, user journey and visual direction into a clear plan.",
    ],
    [
        "03",
        "Create",
        "We design, develop and refine the experience across desktop, tablet and mobile.",
    ],
    [
        "04",
        "Launch",
        "We test the details, prepare your site for launch and help you take it forward.",
    ],
];

export default function Approach() {
    return (
        <section
            id="process"
            className="max-w-310 mx-auto py-30 px-[5%] border-t border-b border-(--line) max-[640px]:py-21.25 max-[640px]:px-[6%]"
        >
            <div className="flex justify-between items-end gap-11.25 max-[640px]:block">
                <div>
                    <span className="inline-flex items-center gap-2.5 text-[#7de7c6] text-[10px] font-bold tracking-[0.2em] uppercase before:content-[''] before:w-5 before:h-px before:bg-(--green)">
                        HOW WE WORK
                    </span>
                    <h2 className="text-[clamp(38px,5vw,64px)] leading-[1.08] tracking-[-0.065em] font-[520] my-5.5 max-[640px]:text-[42px]">
                        Good work comes
                        <br />
                        from a{" "}
                        <span className="bg-[linear-gradient(105deg,#00e0a2_0%,#66e5c0_48%,#a47aff_100%)] bg-clip-text text-transparent">
                            good process.
                        </span>
                    </h2>
                </div>
                <p className="max-w-97.5 mb-2.5 text-(--muted) text-[15px] leading-[1.9] max-[640px]:mt-5.5">
                    No guesswork. No unnecessary complexity. Just a
                    collaborative process that keeps the work focused and the
                    decisions clear.
                </p>
            </div>
            <div className="mt-13.75 border-t border-(--line)">
                {steps.map(([n, t, d]) => (
                    <article
                        key={n}
                        className="grid grid-cols-[70px_1fr_1.2fr_30px] gap-5 items-center py-6.75 px-0 border-b border-(--line) transition-[padding] duration-250 hover:px-3 max-[640px]:grid-cols-[35px_1fr_20px] max-[640px]:gap-3 max-[640px]:py-5.75"
                    >
                        <span className="text-[11px] text-(--green) tracking-[0.12em]">
                            {n}
                        </span>
                        <h3 className="text-[22px] tracking-[-0.04em] m-0 max-[640px]:text-[18px]">
                            {t}
                        </h3>
                        <p className="max-w-107.5 text-(--muted) text-[12px] leading-[1.8] max-[640px]:col-[2/3] max-[640px]:m-0">
                            {d}
                        </p>
                        <span className="text-(--green) text-right max-[640px]:col-start-3 max-[640px]:row-start-1">
                            ↗
                        </span>
                    </article>
                ))}
            </div>
        </section>
    );
}
