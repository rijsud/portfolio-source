import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
// import Projects from './components/Projects';

function App() {
  return (
    // <div className="min-h-screen bg-slate-950 text-slate-200">
    <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Left Column: Sticky Header & Navigation */}
        <Header />

        {/* Right Column: Scrolling Content Sections */}
        <main className="pt-24 lg:w-1/2 lg:py-24">
          <About />

          <Experience />

          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            {/* <Projects /> */}
          </section>

          <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>
              Designed in Figma and coded in Visual Studio Code. Inspired by{" "}
              <a
                href="https://brittanychiang.com/"
                target="_blank"
                rel="noreferrer"
                className="text-teal-300 hover:text-teal-400 focus-visible:text-teal-400"
              >
                Brittany Chiang's
              </a>{" "}
              design.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
