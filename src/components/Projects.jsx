import { projectsData } from "../data/portfolioData";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      {/* Sticky Mobile Header */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {projectsData.map((project) => (
            <li key={project.id} className="mb-12">
              <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                {/* Hover Background */}
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>

                {/* Left Column: Image with Native Lazy Loading */}
                {project.image && (
                  <div className="z-10 sm:order-1 sm:col-span-2">
                    <img
                      alt={`Screenshot of ${project.title}`}
                      src={project.image}
                      loading="lazy"
                      decoding="async"
                      className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:translate-y-1"
                    />
                  </div>
                )}

                {/* Right Column: Content */}
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {/* Stretches the clickable area over the entire block */}
                        <span className="absolute -inset-x-4 -inset-y-4 z-20 hidden lg:block lg:-inset-x-6"></span>

                        <span>{project.title}</span>

                        {/* Reusable Arrow SVG */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-1 -translate-x-px transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </h3>

                  <p className="mt-2 text-sm leading-normal text-slate-400">
                    {project.description}
                  </p>

                  {/* Optional Stats (like GitHub stars)
                  {project.stats && (
                    <p className="mt-2 flex items-center text-sm text-slate-400">
                      {project.stats}
                    </p>
                  )} */}

                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used:"
                  >
                    {project.technologies.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {tech}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
