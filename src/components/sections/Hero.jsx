import { useEffect, useState } from "react";
import Aurora from "../effects/Aurora";
import {
    ArrowDownIcon,
    ArrowUpRightIcon,
    MousePointerClickIcon,
} from "@animateicons/react/lucide";
import { useIconHover } from "@animateicons/react";

export default function Hero() {
    const { ref: projectIconRef, triggerProps: projectTriggerProps } =
        useIconHover();

    const { ref: workIconRef, triggerProps: workTriggerProps } = useIconHover();

    const [showScrollIndicator, setShowScrollIndicator] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowScrollIndicator(true);
        }, 3000);

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShowScrollIndicator(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <section
            id="home"
            className="relative min-h-212.5 pt-43.75 px-[5%] pb-25 flex items-center isolate overflow-hidden bg-[#050706] bg-[radial-gradient(ellipse_at_70%_0%,rgba(0,214,154,0.12),transparent_43%)] max-[900px]:min-h-0 max-[900px]:pt-38.75 max-[640px]:pt-33.75 max-[640px]:px-[6%] max-[640px]:pb-22.5"
        >
            <div className="absolute -z-20 inset-x-0 top-0 h-162.5 opacity-78 pointer-events-none">
                <Aurora
                    colorStops={["#00d69a", "#087e68", "#7000cc"]}
                    amplitude={0.72}
                    blend={0.62}
                    speed={0.8}
                />
            </div>

            <div className="absolute -z-10 inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-size-[70px_70px] mask-[linear-gradient(to_bottom,black,transparent_85%)] pointer-events-none" />

            <div className="w-full max-w-310 mx-auto grid grid-cols-[1.08fr_0.92fr] gap-15 items-center max-[900px]:grid-cols-1 max-[900px]:gap-13.75">
                <div className="animate-[rise_0.8s_both]">
                    <div className="inline-flex items-center gap-2.5 py-2.5 px-3.5 border border-[#00d69a]/25 rounded-[50px] bg-[#00d69a]/6 text-[#b9d9cd] text-[10px] tracking-[0.06em]">
                        <i className="w-1.75 h-1.75 rounded-full bg-(--green) shadow-[0_0_14px_var(--green)]" />{" "}
                        Beyond Pixels. Beyond Possibilities.
                    </div>

                    <h1 className="text-[clamp(48px,6.3vw,86px)] leading-[1.04] tracking-[-0.075em] font-[540] mt-7.5 mb-5.5 max-[640px]:text-[clamp(43px,12vw,62px)]">
                        Make your brand
                        <br />
                        impossible to{" "}
                        <span className="bg-[linear-gradient(105deg,#00e0a2_0%,#66e5c0_48%,#a47aff_100%)] bg-clip-text text-transparent">
                            ignore.
                        </span>
                    </h1>

                    <p className="max-w-135 text-(--muted) text-[15px] leading-[1.9] max-[640px]:text-[13px]">
                        We design and build thoughtful digital experiences that
                        help ambitious businesses show up, stand out and move
                        forward.
                    </p>

                    <div className="flex items-center gap-6.75 mt-8.5 max-[640px]:items-start max-[640px]:flex-col max-[640px]:gap-5">
                        <a
                            {...projectTriggerProps}
                            href="#contact"
                            className="inline-flex items-center justify-center gap-4 py-3.75 px-7.25 rounded-[50px] text-[12px] font-bold bg-(--green) text-[#04120d] shadow-[0_0_35px_rgba(0,214,154,0.13)] no-underline transition-[transform,box-shadow,background] duration-250 hover:shadow-[0_10px_35px_rgba(0,214,154,0.25)]"
                        >
                            Start a project{" "}
                            <span>
                                <ArrowUpRightIcon
                                    ref={projectIconRef}
                                    size={20}
                                    duration={1}
                                    color="#04120d"
                                />
                            </span>
                        </a>
                        <a
                            {...workTriggerProps}
                            className=" inline-flex items-center justify-center gap-4 py-3.75 px-7.25 rounded-[50px] text-[12px] font-bold no-underline duration-250 border border-(--green)"
                            href="#work"
                        >
                            Explore selected work{" "}
                            <span>
                                <ArrowDownIcon
                                    ref={workIconRef}
                                    size={18}
                                    duration={1}
                                    color="#ffffff"
                                />
                            </span>
                        </a>
                    </div>
                </div>

                <div className="relative max-w-130 w-full mx-auto animate-[rise_0.9s_0.15s_both] max-[900px]:max-w-117.5 max-[640px]:w-[92%]">
                    <div className="absolute inset-y-[10%] inset-x-0 bg-[linear-gradient(120deg,rgba(0,214,154,0.22),rgba(112,0,204,0.2))] blur-[75px] rounded-full" />

                    <div className="relative p-2.5 border border-white/16 rounded-[20px] bg-[#0e1310]/86 shadow-[0_35px_100px_#0009] rotate-0 min-[901px]:rotate-2 min-[901px]:transition-transform min-[901px]:duration-500 min-[901px]:hover:rotate-0 min-[901px]:hover:-translate-y-1.5">
                        <div className="h-9.5 flex items-center justify-between px-2.5 text-[#65736b] text-[9px]">
                            <div className="flex gap-1.25">
                                <i className="w-1.75 h-1.75 rounded-full bg-[#e87979]" />
                                <i className="w-1.75 h-1.75 rounded-full bg-[#e5c36c]" />
                                <i className="w-1.75 h-1.75 rounded-full bg-(--green)" />
                            </div>
                            <span>your-next-move.com</span>
                            <span>↗</span>
                        </div>

                        <div className="min-h-90 pt-8.75 px-7.5 pb-6 rounded-xl bg-[radial-gradient(ellipse_at_85%_15%,rgba(0,214,154,0.2),transparent_50%),linear-gradient(140deg,#19221d,#080b09_70%)] flex flex-col justify-between overflow-hidden max-[640px]:min-h-75 max-[640px]:py-6.25 max-[640px]:px-5">
                            <span className="text-[8px] tracking-[0.2em] text-[#82e8c6]">
                                A DIGITAL FIRST IMPRESSION
                            </span>

                            <div className="text-[clamp(34px,4vw,54px)] leading-[1.08] tracking-[-0.06em] mt-6.25">
                                Build a brand
                                <br />
                                people{" "}
                                <em className="not-italic text-(--green)">
                                    remember.
                                </em>
                            </div>

                            <div className="h-px bg-[linear-gradient(90deg,var(--green),transparent)] my-7" />

                            <div className="flex items-center justify-between text-[#a4b1a9] text-[10px] leading-loose">
                                <span>Strategy</span>
                                <span className="text-[23px] text-(--green)">
                                    ⨳
                                </span>
                                <span>Design</span>
                                <span className="text-[23px] text-(--green)">
                                    ⨳
                                </span>
                                <span>Development</span>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -bottom-6 -left-7.5 flex items-center gap-3 py-3.5 px-4.5 border border-(--line) rounded-[13px] bg-[#111713] shadow-[0_15px_45px_#0008] max-[640px]:-left-3 max-[640px]:-bottom-7.5">
                        <span>
                            <MousePointerClickIcon
                                size={23}
                                duration={1}
                                color="#00d69a"
                            />
                        </span>
                        <div>
                            <b className="block text-[11px]">
                                From Imagination
                            </b>
                            <small className="block mt-1 text-(--muted) text-[9px]">
                                to Interaction.
                            </small>
                        </div>
                    </div>
                </div>
            </div>

            <a
                href="#focus"
                className={`fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#68736c] text-[10px] no-underline group transition-all duration-700 ${
                    showScrollIndicator
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-3 pointer-events-none"
                }`}
            >
                <span className="animate-scroll-arrow text-(--green) text-lg">
                    ↓
                </span>

                <span className="transition-colors duration-300 group-hover:text-(--green)">
                    Scroll to explore
                </span>
            </a>
        </section>
    );
}
