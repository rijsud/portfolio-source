export const headerData = {
  name: "Rijul Sudesh",
  title: "Backend Engineer",
  location: "Thiruvalla, Kerala, India"
};

export const aboutData = {
  name: "Rijul Sudesh",
  picture: "/headshot.webp", // Located in public/
  description: <>Hi there! I'm Rijul, and I like being creative. I'm a backend focused fullstack engineer with expertise in <strong>Golang</strong>, <strong>Python</strong>, <strong>.NET</strong> and now <strong>React</strong>. Familiar with modern development practices such as <strong>CI/CD</strong> Pipelines and <strong>Agile</strong> Development and tools including <strong>Docker</strong> and <strong>PostgreSQL</strong>.</>,
  highlight: <>I'm an alumni at <a href="https://www.psu.edu/" className="font-medium text-text-primary hover:text-accent">Penn State University</a>, majoring in Software Engineering.</>
};

export const experienceData = [
  {
    id: 1,
    dateRange: "Mar 2025 - May 2025",
    title: "Software Engineer Intern",
    company: "Hopscotch",
    companyUrl: "https://www.joinhopscotch.com/",
    description: "Built and maintained tests used for our backend processes, across the whole product. Worked closely with cross-functional teams to implement working solutions.",
    technologies: ["Golang", "Docker", "Redis", "PostgreSQL"]
  }
];

export const projectsData = [
 {
    id: 1,
    title: "Developer Portfolio",
    url: "https://rijsud.github.io",
    image: "/developer-portfolio.webp", // Located in public/projects/
    description: "Personal developer portfolio website that I built to get introduced to front-end development.",
    technologies: ["Node", "React", "Tailwind CSS", "Vite"]
  },
  {
    id: 2,
    title: "NASA Psyche Card Game",
    url: "https://missiontopsyche-platinum.github.io/platinum_24b_game_universe-psb/",
    image: "/nasa-psyche-thumbnail.webp",
    description: "Interactive card game based on the NASA Psyche mission, designed to educate players about the asteroid exploration.",
    technologies: ["C#", "Unity"]
  }
];