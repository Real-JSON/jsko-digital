const socials = [
    ["Facebook", "https://www.facebook.com/jsko.digital/"],
    ["Portfolio", "https://jsko-digital.vercel.app/"],
    ["Email", "mailto:jsko.digital@gmail.com"],
];

export default function Footer() {
    return (
        <footer className="pt-11.25 px-[5%] pb-6.25 border-t border-(--line)">
            <div className="max-w-310 mx-auto flex items-center justify-between gap-6.25 max-[640px]:items-start max-[640px]:flex-wrap">
                <a
                    className="flex items-center gap-2.5 text-[21px] font-[750] tracking-[-0.07em] text-inherit no-underline"
                    href="#home"
                >
                    <img
                        className="w-12 h-12 object-contain"
                        src="/site-logo-new.png"
                        alt="JSKO"
                    />
                </a>
                <p className="m-0 text-(--muted) text-[12px] leading-[1.8] min-[640px]:text-center max-[640px]:order-3 max-[640px]:w-full">
                    Thoughtful digital experiences
                    <br />
                    for businesses ready to move forward.
                </p>
                <a
                    className="text-[11px] text-(--green) no-underline"
                    href="#home"
                >
                    Back to Top ↑
                </a>
            </div>
            <div className="max-w-310 mx-auto grid grid-cols-3 items-center gap-6.25 pt-8.75 mt-8.75 border-t border-(--line) text-[#657169] text-[12px] md:text-[10px] max-[640px]:grid-cols-1 max-[640px]:gap-3.75">
                <span>
                    © {new Date().getFullYear()} JSKO Digital. All rights
                    reserved.
                </span>

                <div className="flex items-center justify-center gap-5.5 max-[640px]:justify-start max-[640px]:flex-wrap max-[640px]:gap-4">
                    {socials.map(([n, u]) => (
                        <a
                            key={n}
                            href={u}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[12px] md:text-[10px] text-[#aab2ad] no-underline transition-colors duration-200 hover:text-(--green)"
                        >
                            {n} ↗
                        </a>
                    ))}
                </div>

                <span className="text-right max-[640px]:text-left">
                    Made with{" "}
                    <span className="inline-block text-(--green) animate-heartbeat ml-1">
                        ♥
                    </span>
                </span>
            </div>
        </footer>
    );
}
