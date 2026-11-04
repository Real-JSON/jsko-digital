import { ArrowUpRight } from "@animateicons/react/lucide";
import { useIconHover } from "@animateicons/react";

const packages = [
    {
        name: "Launch Website",
        price: "LKR 35,000",
        note: "For a focused online presence",
        items: [
            "One-page responsive website",
            "Up to 6 content sections",
            "Contact form or WhatsApp CTA",
            "Basic on-page SEO setup",
            "2 revision rounds",
            "14-day bug-fix support",
        ],
    },
    {
        name: "Business Website",
        price: "LKR 65,000",
        note: "For businesses that need more room",
        featured: true,
        items: [
            "Up to 5 website pages",
            "Custom responsive layouts",
            "Contact form & WhatsApp link",
            "Basic SEO setup",
            "2 revision rounds",
            "30-day bug-fix support",
        ],
    },
    {
        name: "Professional Website",
        price: "LKR 95,000+",
        note: "For broader business requirements",
        items: [
            "Up to 8 website pages",
            "Tailored layouts & interactions",
            "Selected integrations / enquiry forms",
            "Basic SEO & performance setup",
            "3 revision rounds",
            "30-day bug-fix support",
        ],
    },
];

const PackageCard = ({ p }) => {
    const { ref, triggerProps } = useIconHover();

    return (
        <article
            className={`group relative isolate overflow-hidden rounded-3xl border p-7 ${
                p.featured
                    ? "border-[#00d492]/60 bg-[#00d492]/[.07]"
                    : "border-white/10 bg-white/2.5"
            }`}
        >
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_85%_65%_at_50%_100%,rgba(0,212,146,0.20),transparent_75%)]" />

            <p className="text-sm text-white/55">{p.note}</p>

            <h3 className="mt-3 text-2xl font-medium">{p.name}</h3>

            <p className="mt-6 text-3xl font-semibold tracking-tight">
                {p.price}
            </p>

            <p className="mt-1 text-xs text-white/35">
                One-time starting price
            </p>

            <ul className="mt-8 space-y-3 border-t border-white/10 pt-6">
                {p.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-white/70">
                        <span className="text-[#00d492]">✓</span>
                        {item}
                    </li>
                ))}
            </ul>

            <a
                href="#contact"
                className="mt-8 inline-flex w-full items-center justify-between rounded-full border border-white/20 px-5 py-3 text-sm transition hover:border-[#00d492] hover:text-[#00d492]"
                {...triggerProps}
            >
                Discuss this package
                <ArrowUpRight ref={ref} size={18} strokeWidth={1.5} />
            </a>
        </article>
    );
};

const Pricing = () => {
    return (
        <section id="pricing" className="px-5 py-24 md:px-[7%] md:py-32">
            <div className="mx-auto max-w-7xl">
                <span className="inline-flex items-center gap-2.5 text-[10px] tracking-[0.22em] uppercase text-(--green)">
                    Straightforward pricing
                </span>

                <div className="mb-12 grid grid-cols-1 min-[960px]:grid-cols-2 gap-5 min-[960px]:items-end">
                    <h2 className="max-[960px]:my-5.5 min-[960px]:pt-5.5 text-[clamp(2.5rem,6vw,4rem)] leading-[1.08] tracking-[-0.065em] font-[520]">
                        A clear place
                        <br />
                        to get started.
                    </h2>

                    <p className="mb-2.5 w-full max-w-157.5 text-[clamp(0.875rem,1.3vw,1rem)] leading-[1.9] text-(--muted) min-[960px]:ml-auto">
                        Starting prices for defined scopes. If your project
                        needs something different, tell us what you have in mind
                        and we’ll prepare a custom quote.
                    </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-3">
                    {packages.map((p) => (
                        <PackageCard key={p.name} p={p} />
                    ))}
                </div>

                <p className="mt-6 text-xs leading-6 text-white/35">
                    Prices are indicative starting prices. E-commerce, booking
                    systems, payment gateways, custom dashboards and web
                    applications are quoted after reviewing requirements.
                    Domain, hosting, paid plugins and third-party services are
                    not included unless stated in your quote.
                </p>
            </div>
        </section>
    );
};

export default Pricing;
