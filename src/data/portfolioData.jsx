export const headerData = {
  name: "Brittany Chiang",
  title: "Frontend Engineer",
  blurb: "I build accessible, pixel-perfect experiences for the web."
};

export const aboutData = [
  "Hi there! I'm Brittany, and I like building things. I'm a frontend engineer with expertise in crafting accessible, pixel-perfect user interfaces. I take pride in creating thoughtful, inclusive products and have a sharp eye for the little details that separate a good product from an exceptional one. Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  <>Currently, I'm a Senior Frontend Engineer at <a href="https://klaviyo.com" className="font-medium text-text-primary hover:text-accent">Klaviyo</a>, where I work on our design system.</>
];

export const experienceData = [
  {
    id: 1,
    dateRange: "2024 — Present",
    title: "Senior Frontend Engineer, Accessibility",
    company: "Klaviyo",
    companyUrl: "https://klaviyo.com",
    description: "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams to implement and advocate for best practices in web accessibility.",
    technologies: ["JavaScript", "React", "Storybook"]
  },
  {
    id: 2,
    dateRange: "2018 — 2024",
    title: "Lead Engineer",
    company: "Upstatement",
    companyUrl: "https://upstatement.com",
    description: "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences.",
    technologies: ["JavaScript", "TypeScript", "React", "Next.js"]
  }
];

export const projectsData = [
 {
    id: 1,
    title: "Developer Portfolio",
    url: "https://rijsud.github.io/rijsud",
    image: "/developer-portfolio.png", // Located in public/projects/
    description: "Personal developer portfolio website that I built to get introduced to front-end development.",
    technologies: ["Node", "React", "Tailwind CSS", "Vite"]
  },
  {
    id: 2,
    title: "NASA Psyche Card Game",
    url: "https://missiontopsyche-platinum.github.io/platinum_24b_game_universe-psb/",
    image: "/nasa-psyche-thumbnail.png",
    description: "Interactive card game based on the NASA Psyche mission, designed to educate players about the asteroid exploration.",
    technologies: ["C#", "Unity"]
  }
];