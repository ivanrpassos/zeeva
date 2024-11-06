//Sections
import { About } from "./sections/about.tsx";
import { Hero } from "./sections/hero.tsx";
import { Process } from "./sections/process.tsx";
import { Projects } from "./sections/projects.tsx";
import { Testimonials } from "./sections/testimonials.tsx";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Process />
      <Testimonials />
    </>
  );
};
