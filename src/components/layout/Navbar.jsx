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
        <header
            className={`fixed inset-x-0 top-0 z-100 px-[5%] border-b transition-[background,border-color,backdrop-filter] duration-300 ${
                scrolled
                    ? "bg-[#050706]/82 border-(--line) backdrop-blur-[18px]"
                    : "border-transparent"
            }`}
        >
            <nav
                className="max-w-310 h-20.5 max-[640px]:h-17.5 mx-auto flex items-center justify-between"
                aria-label="Main navigation"
            >
                <a
                    className="flex items-center gap-2.5 text-[21px] font-[750] tracking-[-0.07em] text-inherit no-underline"
                    href="#home"
                    aria-label="JSKO home"
                >
                    <img
                        className="w-16 h-16 object-contain"
                        src="/site-logo-new.png"
                        alt="JSKO"
                    />
                </a>

                <div className="flex gap-9 max-[640px]:hidden">
                    {links.map(([label, href]) => (
                        <a
                            key={href}
                            href={href}
                            className="text-[14px] text-[#aab2ad] no-underline transition-colors duration-200 hover:text-(--green)"
                        >
                            {label}
                        </a>
                    ))}
                </div>

                <a
                    className="max-[640px]:hidden border border-[#00d69a]/55 rounded-[50px] py-3 px-4.75 text-[12px] text-[#8af0ce] no-underline transition-all duration-250 hover:bg-(--green) hover:text-[#04110c]"
                    href="#contact"
                >
                    Let’s talk <span className="ml-3.5">↗</span>
                </a>

                <button
                    className="hidden max-[640px]:flex flex-col items-center justify-center gap-1.25 bg-transparent border border-(--line) rounded-full w-10.5 h-10.5 text-white cursor-pointer"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    onClick={() => setOpen(!open)}
                >
                    <span className="w-4 h-px bg-white" />
                    <span className="w-4 h-px bg-white" />
                </button>
            </nav>

            {open && (
                <div className="hidden max-[640px]:flex flex-col gap-0 pt-2.5 px-4 pb-4 border border-(--line) rounded-[15px] bg-[#090d0a]/97 backdrop-blur-[20px]">
                    {links.map(([label, href]) => (
                        <a
                            key={href}
                            href={href}
                            onClick={() => setOpen(false)}
                            className="flex justify-between py-3.5 px-1.25 border-b border-(--line) text-[13px] text-[#dce5df] no-underline"
                        >
                            {label}
                            <span>↗</span>
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setOpen(false)}
                        className="flex justify-between py-3.5 px-1.25 border-0 text-[13px] text-(--green) no-underline"
                    >
                        Start a project <span>↗</span>
                    </a>
                </div>
            )}
        </header>
    );
}