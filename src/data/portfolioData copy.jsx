export const headerData = {
  name: "Brittany Chiang",
  title: "Frontend Engineer",
  location: "San Francisco, CA"
};

export const aboutData = {
  name: "Brittany Chiang",
  picture: "/head.webp", // Located in public/
  description: "Hi there! I'm Brittany, and I like building things. I'm a frontend engineer with expertise in crafting accessible, pixel-perfect user interfaces. I take pride in creating thoughtful, inclusive products and have a sharp eye for the little details that separate a good product from an exceptional one. Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  highlight: <>Currently, I'm a Senior Frontend Engineer at <a href="https://klaviyo.com" className="font-medium text-text-primary hover:text-accent">Klaviyo</a>, where I work on our design system.</>
};

export const experienceData = [
  {
    id: 1,
    dateRange: "March 2025 - May 2025",
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