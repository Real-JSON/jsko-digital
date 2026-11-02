import "./Marquee.css";

const services = [
    { name: "Website Development", style: "solid" },
    { name: "UI/UX Design", style: "outline" },
    { name: "Digital Solutions", style: "solid" },
    { name: "Graphic Design", style: "outline" },
];

const MarqueeNew = () => {
    return (
        <div className="marquee-container">
            <div className="marquee-content">
                {[...services, ...services].map((service, index) => (
                    <div
                        className="marquee-item"
                        key={`${service.name}-${index}`}
                        aria-hidden={index >= services.length}
                    >
                        <span className="marquee-icon">✱</span>

                        <span className={`marquee-text ${service.style}`}>
                            {service.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MarqueeNew;
