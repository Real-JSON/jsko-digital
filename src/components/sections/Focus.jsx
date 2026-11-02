import "./Brand.css";
import MarqueeNew from "../ui/MarqueeNew.jsx";

export default function Focus() {
    return (
        <section
            id="focus"
            className="pt-22.5 px-[5%] pb-13.75 border-t border-(--line) max-[640px]:pt-16.25"
        >
            <div className="max-w-310 mx-auto flex items-start justify-between gap-8.75 max-[640px]:block">
                <span className="block text-[11px] text-(--green) tracking-[0.16em] mb-4">
                    SMALL STUDIO. BIG PICTURE.
                </span>
                <p className="max-w-150 m-0 text-[#dce4df] text-[clamp(20px,2.5vw,32px)] leading-normal tracking-[-0.04em] max-[640px]:mt-5.5">
                    We bring strategy, creativity and technology together to
                    make your online presence work harder.
                </p>
            </div>

            <MarqueeNew />
        </section>
    );
}
