import "./Brand.css";
import MarqueeNew from "../ui/MarqueeNew.jsx";

const capabilities = [
    "Digital experiences",
    "Web design",
    "Development",
    "Brand identity",
];

export default function Brand() {
    return (
        <section className="intro-band" id="focus">
            <div className="intro-top">
                <span className="eyebrow">SMALL STUDIO. BIG PICTURE.</span>
                <p>
                    We bring strategy, creativity and technology together to
                    make your online presence work harder.
                </p>
            </div>

            <MarqueeNew/>
        </section>
    );
}
