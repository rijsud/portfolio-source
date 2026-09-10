import { experienceData } from "../data/portfolioData";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-text-primary lg:sr-only">
          Experience
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {experienceData.map((job) => (
            <li key={job.id} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-surface/50 lg:group-hover:shadow-[inset_0_1px_0_0_var(--color-border-highlight)] lg:group-hover:drop-shadow-lg"></div>

                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-text-muted sm:col-span-2">
                  {job.dateRange}
                </header>

                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-text-primary">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-text-primary hover:text-accent focus-visible:text-accent group/link text-base"
                        href={job.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="absolute -inset-x-4 -inset-y-4 z-20 hidden lg:block lg:-inset-x-6"></span>
                        <span>
                          {job.title} · {job.company}
                        </span>
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
                  <p className="mt-2 text-sm leading-normal text-text-secondary">
                    {job.description}
                  </p>
                  <ul
                    className="mt-2 flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {job.technologies.map((tech) => (
                      <li key={tech} className="mr-1.5 mt-2">
                        <div className="flex items-center rounded-full bg-accent-muted px-3 py-1 text-xs font-medium leading-5 text-accent">
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
// export default function Experience() {
//   return (
//     <div>
//       <ol className="group/list">
//         <li className="mb-12">
//           <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
//             <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-surface/50 lg:group-hover:shadow-[inset_0_1px_0_0_var(--color-border-highlight)] lg:group-hover:drop-shadow-lg"></div>

//             <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-text-muted sm:col-span-2">
//               2024 — Present
//             </header>

//             <div className="z-10 sm:col-span-6">
//               <h3 className="font-medium leading-snug text-text-primary">
//                 <div>
//                   <a className="inline-flex items-baseline font-medium leading-tight text-text-primary hover:text-accent focus-visible:text-accent group/link text-base" href="https://klaviyo.com" target="_blank" rel="noreferrer">
//                     <span>Senior Frontend Engineer, Accessibility · Klaviyo</span>
//                   </a>
//                 </div>
//               </h3>
//               <p className="mt-2 text-sm leading-normal text-text-secondary">
//                 Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams to implement and advocate for best practices in web accessibility.
//               </p>
//               <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
//                 <li className="mr-1.5 mt-2">
//                   <div className="flex items-center rounded-full bg-accent-muted px-3 py-1 text-xs font-medium leading-5 text-accent">JavaScript</div>
//                 </li>
//                 <li className="mr-1.5 mt-2">
//                   <div className="flex items-center rounded-full bg-accent-muted px-3 py-1 text-xs font-medium leading-5 text-accent">React</div>
//                 </li>
//                 <li className="mr-1.5 mt-2">
//                   <div className="flex items-center rounded-full bg-accent-muted px-3 py-1 text-xs font-medium leading-5 text-accent">Storybook</div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </li>
//       </ol>
//     </div>
//   );
// }
