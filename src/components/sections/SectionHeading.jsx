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

export default SectionHeading;
