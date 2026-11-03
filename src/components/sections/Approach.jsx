import { useIconHover } from "@animateicons/react";

import {
    CompassIcon,
    LayersIcon,
    CodeXmlIcon,
    RocketIcon,
} from "@animateicons/react/lucide";

const steps = [
    {
        n: "01",
        title: "Discover",
        desc: "We get to know your business, audience and goals before deciding what to build.",
        Icon: CompassIcon,
    },
    {
        n: "02",
        title: "Shape",
        desc: "We map the content, user journey and visual direction into a clear plan.",
        Icon: LayersIcon,
    },
    {
        n: "03",
        title: "Create",
        desc: "We design, develop and refine the experience across desktop, tablet and mobile.",
        Icon: CodeXmlIcon,
    },
    {
        n: "04",
        title: "Launch",
        desc: "We test the details, prepare your site for launch and help you take it forward.",
        Icon: RocketIcon,
    },
];

function ProcessStep({ n, title, desc, Icon }) {
    const { ref, triggerProps } = useIconHover();

    return (
        <article
            {...triggerProps}
            className="group grid grid-cols-[70px_1fr_2fr_50px] gap-5 items-center py-6.75 px-0 border-b border-(--line) transition-[padding] duration-250 hover:px-3 max-[640px]:grid-cols-[35px_1fr_38px] max-[640px]:gap-3 max-[640px]:py-5.75"
        >
            <span className="text-[11px] text-(--green) tracking-[0.12em]">
                {n}
            </span>

            <h3 className="text-[22px] tracking-[-0.04em] m-0 max-[640px]:text-[18px]">
                {title}
            </h3>

            <p className="max-w-107.5 text-(--muted) text-[12px] leading-[1.8] max-[640px]:col-[2/3] max-[640px]:row-start-2 max-[640px]:mt-1.5 max-[640px]:m-0">
                {desc}
            </p>

            <div className="flex justify-end items-center text-(--green)">
                <div className="flex items-center justify-center size-11 rounded-full border border-(--line) transition-colors duration-300 group-hover:border-(--green) group-hover:bg-(--green)/10">
                    <Icon ref={ref} size={19} />
                </div>
            </div>
        </article>
    );
}

export default function Approach() {
    return (
        <section
            id="process"
            className="max-w-310 mx-auto py-30 max-[640px]:py-21.25 max-[1246px]:px-[6%]"
        >
            {/* Header */}
            <div className="flex justify-between items-end gap-11.25 max-[1054px]:block">
                <div>
                    <span className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-(--green)">
                        HOW WE WORK
                    </span>

                    <h2 className="text-[clamp(38px,8vw,64px)] leading-[1.08] tracking-[-0.065em] font-[520] my-5.5 max-[640px]:text-[42px]">
                        Good work comes
                        <br />
                        from a{" "}
                        <span className="bg-[linear-gradient(105deg,#00e0a2_0%,#66e5c0_48%,#a47aff_100%)] bg-clip-text text-transparent">
                            good process.
                        </span>
                    </h2>
                </div>

                <p className="lg:max-w-97.5 mb-2.5 text-(--muted) max-md:text-[15px] leading-[1.9] max-[640px]:mt-5.5">
                    No guesswork. No unnecessary complexity. Just a
                    collaborative process that keeps the work focused and the
                    decisions clear.
                </p>
            </div>

            {/* Process Steps */}
            <div className="mt-13.75 border-t border-(--line)">
                {steps.map((step) => (
                    <ProcessStep key={step.n} {...step} />
                ))}
            </div>
        </section>
    );
}
