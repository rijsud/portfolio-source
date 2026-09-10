export default function Navigation() {
  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        <li>
          <a className="group flex items-center py-3 active" href="#about">
            {/* <span className="nav-indicator mr-4 h-px w-8 bg-text-muted transition-all group-hover:w-16 group-hover:bg-text-primary group-focus-visible:w-16 group-focus-visible:bg-text-primary motion-reduce:transition-none"></span> */}
            <span className="mr-4 h-1 w-1 rounded-full bg-text-muted transition-all group-hover:w-8 group-hover:bg-text-accent"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-text-muted group-hover:text-accent group-focus-visible:text-text-accent">
              About
            </span>
          </a>
        </li>
        <li>
          <a className="group flex items-center py-3" href="#experience">
            <span className="mr-4 h-1 w-1 rounded-full bg-text-muted transition-all group-hover:w-8 group-hover:bg-text-accent"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-text-muted group-hover:text-accent">
              Experience
            </span>
          </a>
        </li>
        <li>
          <a className="group flex items-center py-3" href="#projects">
            <span className="mr-4 h-1 w-1 rounded-full bg-text-muted transition-all group-hover:w-8 group-hover:bg-text-accent"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-text-muted group-hover:text-accent">
              Projects
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}