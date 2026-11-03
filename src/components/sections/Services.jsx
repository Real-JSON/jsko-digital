import { useRef } from "react";

import {
    CodeXmlIcon,
    FigmaIcon,
    PaletteIcon,
} from "@animateicons/react/lucide";

const services = [
    {
        n: "01",
        title: "Web design",
        desc: "Interfaces planned around your brand, audience, and customer needs.",
        tags: ["UI/UX Design", "Wireframes", "Prototypes"],
        Icon: FigmaIcon,
    },
    {
        n: "02",
        title: "Web development",
        desc: "Responsive websites developed with clean code, useful features, and speed.",
        tags: ["Custom Sites", "Responsive", "Fast Performance"],
        Icon: CodeXmlIcon,
    },
    {
        n: "03",
        title: "Brand & visual design",
        desc: "Distinctive identities and graphics that make your business memorable.",
        tags: ["Brand Identity", "Logo Design", "Social Graphics"],
        Icon: PaletteIcon,
    },
];

const Services = () => {
    const iconRefs = useRef([]);

    return (
        <section
            id="services"
            className="max-w-310 mx-auto py-30 max-[640px]:py-21.25 max-[954px]:px-[6%]"
        >
            {/* Section Header */}
            <div className="grid grid-cols-2 items-end gap-10 mb-13.75 max-[640px]:grid-cols-1 max-[640px]:gap-5 max-[640px]:mb-10">
                {/* Left - Title */}
                <div>
                    <span className="block text-[11px] text-(--green) tracking-[0.16em] mb-4">
                        WHAT WE DO
                    </span>

                    <h2 className="text-[clamp(36px,4.2vw,54px)] leading-[1.08] tracking-[-0.055em] font-medium m-0">
                        Good ideas deserve
                        <br />
                        <span className="bg-[linear-gradient(105deg,#00e0a2_0%,#66e5c0_48%,#a47aff_100%)] bg-clip-text text-transparent">
                            great execution.
                        </span>
                    </h2>
                </div>

                {/* Right - Description */}
                <div className="max-w-105 justify-self-end max-[640px]:justify-self-start max-[640px]:max-w-full">
                    <p className="text-[13px] leading-[1.9] text-(--muted) m-0">
                        From the first sketch to the final launch, we bring
                        design and development together to create meaningful
                        digital experiences that help your business stand out
                        and grow.
                    </p>
                </div>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-3 gap-3.5 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
                {services.map((s, index) => (
                    <article
                        key={s.n}
                        onMouseEnter={() =>
                            iconRefs.current[index]?.startAnimation()
                        }
                        onMouseLeave={() =>
                            iconRefs.current[index]?.stopAnimation()
                        }
                        className="reveal relative min-h-72.5 p-6.75 border border-(--line) rounded-[17px] bg-[linear-gradient(145deg,#111713,#0a0d0b)] flex flex-col transition-[translate,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1.5 hover:border-[#00d69a66] hover:shadow-[0_12px_35px_rgba(0,214,154,0.06)] max-[900px]:last:col-span-full max-[640px]:last:col-auto max-[640px]:min-h-60"
                    >
                        {/* Number and Icon */}
                        <div className="flex items-center justify-between">
                            <span className="text-[11px] text-(--green) tracking-[0.12em]">
                                {s.n}
                            </span>

                            <s.Icon
                                ref={(el) => (iconRefs.current[index] = el)}
                                size={27}
                                color="#00d69a"
                                duration={1}
                            />
                        </div>

                        {/* Card Content */}
                        <div className="mt-14">
                            <h3 className="text-[23px] tracking-[-0.04em] mt-0 mb-3">
                                {s.title}
                            </h3>

                            <p className="text-[12px] leading-[1.8] text-(--muted) m-0 min-h-11">
                                {s.desc}
                            </p>

                            {/* Service Tags */}
                            <div className="flex flex-wrap gap-1.75 mt-5">
                                {s.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="py-1.75 px-3 rounded-full bg-[#142019] text-[#aab5ae] text-[10px] tracking-wide"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Services;
