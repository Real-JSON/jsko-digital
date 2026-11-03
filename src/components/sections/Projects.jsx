import { SquareArrowOutUpRightIcon } from "@animateicons/react/lucide";

import projects from "../../data/projects";
import { useIconHover } from "@animateicons/react";

function ProjectCard({ project }) {
    const { ref, triggerProps } = useIconHover();

    return (
        <article
            {...triggerProps}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101513] md:col-span-2"
        >
            <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="relative block overflow-hidden"
            >
                <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    loading="lazy"
                    className="h-65 w-full object-cover transition duration-700 group-hover:scale-[1.025] md:h-130"
                />

                <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/45 px-4 py-2 text-xs text-(--green) backdrop-blur">
                    {project.status === "live"
                        ? "Live project"
                        : "Concept project"}
                </span>

                <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#00d492]">
                    <SquareArrowOutUpRightIcon
                        ref={ref}
                        size={24}
                        duration={1}
                        color="#ffffff"
                    />
                </span>
            </a>

            <div className="flex flex-col gap-5 p-6 md:flex-row md:items-end md:justify-between md:p-8">
                <div>
                    <p className="text-xs uppercase tracking-[.18em] text-(--green)">
                        {project.category}
                    </p>

                    <h3 className="mt-2 text-3xl font-medium">
                        {project.title}
                    </h3>

                    <p className="mt-3 max-w-2xl text-sm leading-7 text-white/55">
                        {project.description}
                    </p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                        <span
                            key={t}
                            className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/55"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default function Projects() {
    return (
        <section
            id="work"
            className="max-w-310 mx-auto py-30 max-[640px]:py-21.25 max-[954px]:px-[6%]"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
                    <div>
                        <p className="mb-5 text-xs uppercase tracking-[.22em] text-[#00d492]">
                            Selected work
                        </p>

                        <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
                            A project in focus.
                        </h2>
                    </div>

                    <p className="max-w-sm text-sm leading-7 text-white/50">
                        A small selection of work, shared with context. More
                        projects will be added as they are ready to show.
                    </p>
                </div>

                <div className="grid gap-7 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
