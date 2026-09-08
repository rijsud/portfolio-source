import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";
import { headerData } from "../data/portfolioData";

export default function Header() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <a href="">
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            {headerData.name}
          </h1>
        </a>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
          {headerData.title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          {headerData.blurb}
        </p>
        <Navigation />
      </div>
      <SocialLinks />
    </header>
  );
}
