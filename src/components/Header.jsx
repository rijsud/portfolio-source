import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";
import { headerData } from "../data/portfolioData";

export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <a href="">
          <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            {headerData.name}
          </h1>
        </a>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-text-primary sm:text-xl">
          {headerData.title}
        </h2>
        <p className="mt-4 inline-flex max-w-xs items-center gap-1 leading-normal text-text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 shrink-0"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          {headerData.location}
        </p>
        <Navigation />
      </div>
      <SocialLinks />
    </header>
  );
}
