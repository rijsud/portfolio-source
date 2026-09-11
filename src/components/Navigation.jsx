import { useActiveSection } from '../hooks/useActiveSection';

const navLinks = [
  { name: 'About', href: 'about' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects', href: 'projects' },
];

export default function Navigation() {
  // Pass the section IDs to the hook
  const activeSection = useActiveSection(['about', 'experience', 'projects']);

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href;
          
          return (
            <li key={link.href}>
              <a className="group flex items-center py-3" href={`#${link.href}`}>
                {/* 
                  The indicator line: 
                  If active, it forces the w-16 (extended) and lighter color.
                  If inactive, it stays w-8 and relies on group-hover for the interaction.
                */}
                <span 
                  className={`mr-4 h-1 w-1 rounded-full bg-text-muted transition-all group-hover:w-8 group-hover:bg-accent motion-reduce:transition-none 
                  ${isActive ? 'w-8 bg-accent' : 'w-1 bg-text-muted'}`}
                ></span>
                
                {/* 
                  The text:
                  If active, forces the lighter color.
                */}
                <span 
                  className={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-accent group-focus-visible:text-accent 
                  ${isActive ? 'text-accent' : 'text-text-muted'}`}
                >
                  {link.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
// import { useActiveSection } from '../hooks/useActiveSection';

// const navLinks = [
//   { name: 'About', href: 'about' },
//   { name: 'Experience', href: 'experience' },
//   { name: 'Projects', href: 'projects' },
// ];

// export default function Navigation() {
//   const activeSection = useActiveSection(navLinks.map((link) => link.href));

//   return (
//     <nav className="nav hidden lg:block" aria-label="In-page jump links">
//       <ul className="mt-16 w-max">
//         <li>
//           <a className="group flex items-center py-3 active" href="#about">
//             {/* <span className="nav-indicator mr-4 h-px w-8 bg-text-muted transition-all group-hover:w-16 group-hover:bg-text-primary group-focus-visible:w-16 group-focus-visible:bg-text-primary motion-reduce:transition-none"></span> */}
//             <span className="mr-4 h-1 w-1 rounded-full bg-text-muted transition-all group-hover:w-8 group-hover:bg-accent"></span>
//             <span className="nav-text text-xs font-bold uppercase tracking-widest text-text-muted group-hover:text-accent group-focus-visible:text-accent">
//               About
//             </span>
//           </a>
//         </li>
//         <li>
//           <a className="group flex items-center py-3" href="#experience">
//             <span className="mr-4 h-1 w-1 rounded-full bg-text-muted transition-all group-hover:w-8 group-hover:bg-accent"></span>
//             <span className="nav-text text-xs font-bold uppercase tracking-widest text-text-muted group-hover:text-accent">
//               Experience
//             </span>
//           </a>
//         </li>
//         <li>
//           <a className="group flex items-center py-3" href="#projects">
//             <span className="mr-4 h-1 w-1 rounded-full bg-text-muted transition-all group-hover:w-8 group-hover:bg-accent"></span>
//             <span className="nav-text text-xs font-bold uppercase tracking-widest text-text-muted group-hover:text-accent">
//               Projects
//             </span>
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// }