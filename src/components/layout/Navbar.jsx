import { useEffect, useState } from "react";
const links = [
    ["Services", "#services"],
    ["Work", "#work"],
    ["Process", "#process"],
    ["Pricing", "#pricing"],
];
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (
        <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
            <nav className="nav-shell" aria-label="Main navigation">
                <a className="brand-mark" href="#home" aria-label="JSKO home">
                    <img src="/site-logo-new.png" alt="JSKO" />
                    <span>
                        JSKO<span className="brand-dot">.</span>
                    </span>
                </a>
                <div className="desktop-links">
                    {links.map(([label, href]) => (
                        <a key={href} href={href}>
                            {label}
                        </a>
                    ))}
                </div>
                <a className="nav-cta" href="#contact">
                    Let’s talk <span>↗</span>
                </a>
                <button
                    className="menu-toggle"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    <span />
                    <span />
                </button>
            </nav>
            {open && (
                <div className="mobile-menu">
                    {links.map(([label, href]) => (
                        <a
                            key={href}
                            href={href}
                            onClick={() => setOpen(false)}
                        >
                            {label}
                            <span>↗</span>
                        </a>
                    ))}
                    <a href="#contact" onClick={() => setOpen(false)}>
                        Start a project <span>↗</span>
                    </a>
                </div>
            )}
        </header>
    );
}
