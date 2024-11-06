// Icons
import { RiArrowDownLine } from "@remixicon/react";

export const Hero = () => {
  return (
    <main
      id="hero top"
      className="container flex flex-col gap-28 pt-52 sm:gap-16"
    >
      {/* Main */}
      <section className="flex items-end justify-between pl-[264px] sm:p-0">
        <h1 className="text-[88px]/none max-w-[624px] font-semibold sm:text-[40px]/none sm:w-full">
          Traga vida à sua marca com a zeeva
        </h1>

        <a href="#showreel">
          <RiArrowDownLine className="size-16 sm:hidden" />
        </a>
      </section>

      {/* Showreel */}
      <section id="showreel" className="flex flex-col items-start gap-4">
        <div className="h-[800px] w-full bg-neutral-100 sm:h-60" />
        <span className="text-xl/normal font-medium sm:text-base/normal">
          ZEEVA® Showreel <br />
          clientes – 2020/2024
        </span>
      </section>
    </main>
  );
};
