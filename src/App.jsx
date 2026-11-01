import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Brand from "./components/sections/Brand";
import Approach from "./components/sections/Approach";
import BentoGrid from "./components/ui/BentoGrid";
import Footer from "./components/layout/Footer";

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
const steps = [
    [
        "01",
        "Discover",
        "We learn about your business, audience, goals and the problem the website needs to solve.",
    ],
    [
        "02",
        "Plan & design",
        "We shape the structure and visual direction, then refine the experience before development.",
    ],
    [
        "03",
        "Build",
        "We turn the approved design into a responsive, carefully tested website.",
    ],
    [
        "04",
        "Launch & support",
        "We prepare your site for launch and help you understand what comes next.",
    ],
];
const plans = [
    {
        name: "Launch",
        note: "For individuals and small businesses getting online.",
        price: "Request a quote",
        items: [
            "Up to 5 pages",
            "Responsive design",
            "Contact form",
            "Basic on-page SEO",
            "Social media links",
        ],
        featured: false,
    },
    {
        name: "Growth",
        note: "For growing brands that need a stronger web presence.",
        price: "Request a quote",
        items: [
            "Up to 8 pages",
            "Custom UI design",
            "Responsive development",
            "Enhanced interactions",
            "SEO foundations",
            "Launch support",
        ],
        featured: true,
    },
    {
        name: "Custom",
        note: "For projects with specific workflows or requirements.",
        price: "Let’s discuss",
        items: [
            "Custom scope & features",
            "Tailored UI/UX",
            "Advanced integrations",
            "Flexible project roadmap",
            "Ongoing support options",
        ],
        featured: false,
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
function SectionHeading({ eyebrow, title, copy }) {
    return (
        <div className="section-heading">
            <span className="eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            {copy && <p>{copy}</p>}
        </div>
    );
}
function Services() {
    return (
        <section className="section-wrap" id="services">
            <SectionHeading
                eyebrow="WHAT WE DO"
                title={
                    <>
                        Good ideas deserve
                        <br />
                        <span className="gradient-text">great execution.</span>
                    </>
                }
                copy="From the first sketch to the final launch, we bring design and development together to create useful digital experiences."
            />
            <div className="service-grid">
                {services.map((s) => (
                    <article className="service-card reveal" key={s.n}>
                        <span className="card-index">{s.n}</span>
                        <div>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                            <div className="tag-row">
                                {s.tags.map((t) => (
                                    <span key={t}>{t}</span>
                                ))}
                            </div>
                        </div>
                        <span className="card-arrow">↗</span>
                    </article>
                ))}
            </div>
        </section>
    );
}
function Pricing() {
    return (
        <section className="section-wrap" id="pricing">
            <SectionHeading
                eyebrow="STRAIGHTFORWARD PRICING"
                title={
                    <>
                        A clear starting point.
                        <br />
                        <span className="gradient-text">
                            A better way forward.
                        </span>
                    </>
                }
                copy="Every business is different. These packages give you an idea of where projects begin; final quotes depend on scope and requirements."
            />
            <div className="pricing-grid">
                {plans.map((p) => (
                    <article
                        className={`price-card reveal ${p.featured ? "featured" : ""}`}
                        key={p.name}
                    >
                        {p.featured && (
                            <span className="popular-label">MOST POPULAR</span>
                        )}
                        <h3>{p.name}</h3>
                        <p>{p.note}</p>
                        <strong>{p.price}</strong>
                        <a
                            className={
                                p.featured
                                    ? "button-primary"
                                    : "button-secondary"
                            }
                            href="#contact"
                        >
                            Discuss this package <span>↗</span>
                        </a>
                        <div className="price-divider" />
                        <ul>
                            {p.items.map((i) => (
                                <li key={i}>
                                    <span>✓</span>
                                    {i}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
            <p className="pricing-note">
                Prices are indicative starting points. Domain, hosting, paid
                assets and third-party services may be quoted separately.
            </p>
        </section>
    );
}
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
