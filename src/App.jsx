import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Brand from "./components/sections/Brand";
import Approach from "./components/sections/Approach";
import BentoGrid from "./components/ui/BentoGrid";
import Footer from "./components/layout/Footer";
import Pricing from "./components/sections/Pricing";

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

const SectionHeading = ({ eyebrow, title, copy }) => {
    return (
        <div className="max-w-190">
            <span className="inline-flex items-center gap-2.5 text-[#7de7c6] text-[10px] font-bold tracking-[0.2em] uppercase before:content-[''] before:w-5 before:h-px before:bg-(--green)">
                {eyebrow}
            </span>
            <h2 className="text-[clamp(38px,5vw,64px)] leading-[1.08] tracking-[-0.065em] font-[520] my-5.5 max-[640px]:text-[42px]">
                {title}
            </h2>
            {copy && (
                <p className="max-w-135 text-(--muted) text-[15px] leading-[1.9] mt-3.75">
                    {copy}
                </p>
            )}
        </div>
    );
};

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

function FAQ() {
    return (
        <section className="section-wrap faq-section" id="faq">
            <SectionHeading
                eyebrow="GOOD TO KNOW"
                title={
                    <>
                        A few things you
                        <br />
                        <span className="gradient-text">
                            might be wondering.
                        </span>
                    </>
                }
            />
            <div className="faq-list">
                {faqs.map(([q, a], i) => (
                    <details key={q} className="faq-item">
                        <summary>
                            <span className="faq-number">0{i + 1}</span>
                            {q}
                            <span className="faq-plus">+</span>
                        </summary>
                        <p>{a}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}
function ContactCTA() {
    return (
        <section className="contact-cta" id="contact">
            <div className="cta-orb" />
            <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
            <h2>
                Let’s make something
                <br />
                <span className="gradient-text">worth remembering.</span>
            </h2>
            <p>
                Tell us what you’re working on. We’ll help you figure out a
                thoughtful next step.
            </p>
            <a
                className="button-primary cta-button"
                href="mailto:hello@jsko.digital"
            >
                Start a conversation <span>↗</span>
            </a>
            <small>
                Prefer email?{" "}
                <a href="mailto:hello@jsko.digital">hello@jsko.digital</a>
            </small>
        </section>
    );
}
export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Brand />
                <Services />
                <BentoGrid />
                <Approach />
                <Pricing />
                <FAQ />
                <ContactCTA />
            </main>
            <Footer />
        </>
    );
}
