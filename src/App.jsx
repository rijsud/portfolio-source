import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // You must clean up the event listener to prevent memory leaks
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    // <div className="min-h-screen bg-background text-text-primary">
    <div className="relative min-h-screen">
      {/* 
        The pointer-events-none class is critical. 
        Without it, this overlay will block all clicks and hover states on your links. 
      */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, var(--color-radial-gradient), transparent 80%)`,
        }}
      />

      <div className="mx-auto min-h-screen max-w-7xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left Column: Sticky Header & Navigation */}
          <Header />

          {/* Right Column: Scrolling Content Sections */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <About />

            <Experience />

            <Projects />

            <footer className="max-w-md pb-16 text-sm text-text-muted sm:pb-0">
              <p>
                Designed in Figma and coded in Visual Studio Code. Inspired by{" "}
                <a
                  href="https://brittanychiang.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:text-accent-hover focus-visible:text-accent-hover"
                >
                  Brittany Chiang's
                </a>{" "}
                design.
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
