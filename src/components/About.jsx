import { aboutData } from "../data/portfolioData";

export default function About() {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-text-primary lg:sr-only">
          About
        </h2>
      </div>
      <div>
        {aboutData.picture && (
          <img
            src={aboutData.picture}
            alt={aboutData.name}
            className="mb-4 rounded-lg object-cover"
          />
        )}
        <p className="mb-4 text-text-secondary">{aboutData.description}</p>
        <p className="mb-4 text-text-secondary">{aboutData.highlight}</p>
      </div>
    </section>
  );
}
