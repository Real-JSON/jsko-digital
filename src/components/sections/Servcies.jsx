import SectionHeading from "./SectionHeading";


const services = [
    {
        n: "01",
        title: "Web design",
        desc: "Clear, distinctive interfaces shaped around your brand and the people you want to reach.",
        tags: ["UI design", "Responsive layouts", "Design systems"],
    },
    {
        n: "02",
        title: "Web development",
        desc: "Fast, responsive websites built to work beautifully across devices and browsers.",
        tags: ["React websites", "Business websites", "Performance"],
    },
    {
        n: "03",
        title: "Brand & visual design",
        desc: "A consistent visual language that helps your business look confident and recognisable.",
        tags: ["Brand identity", "Social graphics", "Visual assets"],
    },
];

const Services = () => {
    return (
        <section
            id="services"
            className="max-w-310 mx-auto py-30 px-[5%] max-[640px]:py-21.25 max-[640px]:px-[6%]"
        >
            <SectionHeading
                eyebrow="WHAT WE DO"
                title={
                    <>
                        Good ideas deserve
                        <br />
                        <span className="bg-[linear-gradient(105deg,#00e0a2_0%,#66e5c0_48%,#a47aff_100%)] bg-clip-text text-transparent">
                            great execution.
                        </span>
                    </>
                }
                copy="From the first sketch to the final launch, we bring design and development together to create useful digital experiences."
            />
            <div className="grid grid-cols-3 gap-3.5 mt-13.75 max-[900px]:grid-cols-2 max-[640px]:grid-cols-1">
                {services.map((s) => (
                    <article
                        key={s.n}
                        className="reveal relative min-h-72.5 p-6.75 border border-(--line) rounded-[17px] bg-[linear-gradient(145deg,#111713,#0a0d0b)] flex flex-col justify-between transition-[transform,border-color] duration-300 hover:-translate-y-1.75 hover:border-[#00d69a66] max-[900px]:last:col-span-full max-[640px]:last:col-auto max-[640px]:min-h-60"
                    >
                        <span className="text-[11px] text-(--green) tracking-[0.12em]">
                            {s.n}
                        </span>
                        <div>
                            <h3 className="text-[23px] tracking-[-0.04em] mt-0 mb-3">
                                {s.title}
                            </h3>
                            <p className="text-[12px] leading-[1.8] text-(--muted) m-0">
                                {s.desc}
                            </p>
                            <div className="flex flex-wrap gap-1.75 mt-5">
                                {s.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="py-1.75 px-2.25 border border-(--line) rounded-[50px] text-[#aab5ae] text-[9px]"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <span className="absolute right-6.5 top-5.75 text-[#748179]">
                            ↗
                        </span>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Services;
