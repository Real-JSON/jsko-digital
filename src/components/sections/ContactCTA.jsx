import { useIconHover } from "@animateicons/react";
import { ArrowUpRightIcon } from "@animateicons/react/lucide";

const ContactCTA = () => {
    const { ref, triggerProps } = useIconHover();

    return (
        <section
            id="contact"
            className="relative isolate overflow-hidden mb-20 py-22.5 px-6.25 text-center border border-[#00d69a]/20 rounded-[22px] bg-[#0b100d] bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,214,154,0.13),transparent_60%)] w-[88%] max-w-310 mx-auto max-[640px]:mb-13.75 max-[640px]:py-16.25 max-[640px]:px-4.5"
        >
            <div className="absolute -z-10 w-100 h-75 -top-45 left-[calc(50%-200px)] rounded-full bg-[#00d69a22] blur-[80px]" />

            <span className="inline-flex items-center gap-2.5 text-(--green) text-[10px] font-bold tracking-[0.2em] uppercase">
                HAVE A PROJECT IN MIND?
            </span>

            <h2 className="text-[clamp(38px,5.6vw,68px)] leading-[1.08] tracking-[-0.065em] font-[520] my-5.5 max-[640px]:text-[42px]">
                Let’s make something
                <br />
                <span className="bg-[linear-gradient(105deg,#00e0a2_0%,#66e5c0_48%,#a47aff_100%)] bg-clip-text text-transparent">
                    worth remembering.
                </span>
            </h2>

            <p className="max-w-122.5 mx-auto my-0 text-(--muted) text-[13px] leading-[1.8]">
                Tell us what you’re working on. We’ll help you figure out a
                thoughtful next step.
            </p>

            <a
                className="mt-7 inline-flex items-center justify-center gap-6 py-3.75 px-5.25 rounded-[50px] text-[12px] font-bold bg-(--green) text-[#04120d] shadow-[0_0_35px_rgba(0,214,154,0.13)] no-underline transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:shadow-[0_10px_35px_rgba(0,214,154,0.25)] hover:cursor-pointer"
                onMouseEnter={triggerProps.onMouseEnter}
                onMouseLeave={triggerProps.onMouseLeave}
            >
                Start a conversation{" "}
                <ArrowUpRightIcon
                    ref={ref}
                    size={20}
                    duration={1}
                    color="#04120d"
                />
            </a>

            <small className="block mt-5 text-[#7f8983] text-[10px]">
                Prefer email?{" "}
                <span>
                    <a
                        href="mailto:hello@jsko.digital"
                        className="relative text-[#a8edcf] no-underline
    after:absolute after:left-0 after:-bottom-0.75
    after:h-px after:w-full after:origin-left
    after:scale-x-0 after:bg-current
    after:transition-transform after:duration-300
    after:ease-out hover:after:scale-x-100"
                    >
                        hello@jsko.digital
                    </a>
                </span>
            </small>
        </section>
    );
};

export default ContactCTA;
