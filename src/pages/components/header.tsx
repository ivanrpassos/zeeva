import { Logo } from "@/assets/logo";
import { RiArrowRightLine } from "@remixicon/react";
import Marquee from "../../components/ui/marquee";

export const Header = () => {
  return (
    <header className="bg-white fixed top-0 left-0 w-full z-10">
      <nav className="w-full container flex items-center justify-between py-3">
        <a href="/">
          <Logo />
        </a>

        <a
          href={"/contato"}
          className="w-52 h-12 overflow-clip flex items-center justify-center"
        >
          <Marquee className="[--gap:16px] [--duration:10s]">
            {/* Left */}
            <div className="flex items-center gap-2">
              <RiArrowRightLine className="size-6" />
              <span className="text-lg/none font-medium">
                Entrar em contato
              </span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-2">
              <RiArrowRightLine className="size-6" />
              <span className="text-lg/none font-medium">
                Entrar em contato
              </span>
            </div>
          </Marquee>
        </a>
      </nav>
    </header>
  );
};
