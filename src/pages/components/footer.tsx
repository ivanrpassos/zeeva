import {
  RiArrowRightUpLine,
  RiArrowUpLine,
  RiBehanceLine,
  RiInstagramLine,
  RiMailLine,
  RiWhatsappLine,
} from "@remixicon/react";

export const Footer = () => {
  return (
    <footer className="bg-neutral-100">
      <section className="container flex flex-col gap-20">
        {/* Bottom */}
        <article className="flex items-center justify-between sm:flex-col sm:items-center sm:gap-8">
          {/* Left */}
          <div className="flex gap-12 items-cente sm:flex-col sm:items-center sm:gap-8">
            {/* Start */}
            <a
              href="#top"
              className="size-12 flex items-center justify-center rounded-full bg-neutral-200 transition-all duration-300 ease-in-out hover:brightness-75"
            >
              <RiArrowUpLine className="size-6" />
            </a>

            {/* Center */}
            <div className="flex flex-col gap-1 sm:items-center sm:text-center">
              <h5 className="text-sm/tight font-medium">ZEEVA® 2024</h5>
              <span className="text-sm/tight font-medium">
                Todos os direitos reservados
              </span>
            </div>

            {/* End */}
            <div className="flex flex-col gap-2 sm:items-center sm:text-center">
              <h5 className="text-sm/tight font-medium text-neutral-500">
                Idealizado e Desenvolvido por
              </h5>
              <a
                className="text-sm/tight font-medium underline flex items-center gap-1"
                href="https://digisource.studio/"
                target="_blank"
              >
                Digisource
                <RiArrowRightUpLine className="size-3" />
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            {/* Instagram */}
            <a
              className="size-12 flex items-center justify-center rounded-full  bg-neutral-200 transition-all duration-300 ease-in-out hover:brightness-75"
              href="https://instagram.com/zeevastudio"
              target="_blank"
              title="Instagram"
            >
              <RiInstagramLine className="size-6" />
            </a>

            {/* Bēhance */}
            <a
              className="size-12 flex items-center justify-center rounded-full  bg-neutral-200 transition-all duration-300 ease-in-out hover:brightness-75"
              href="https://behance.net/zeevastudio"
              target="_blank"
              title="Bēhance"
            >
              <RiBehanceLine className="size-6" />
            </a>

            {/* E-mail */}
            <a
              className="size-12 flex items-center justify-center rounded-full  bg-neutral-200 transition-all duration-300 ease-in-out hover:brightness-75"
              href="mailto:contato@zeeva.studio"
              target="_blank"
              title="E-mail"
            >
              <RiMailLine className="size-6" />
            </a>

            {/* WhatsApp */}
            <a
              className="size-12 flex items-center justify-center rounded-full  bg-neutral-200 transition-all duration-300 ease-in-out hover:brightness-75"
              href=""
              target="_blank"
              title="WhatsApp"
            >
              <RiWhatsappLine className="size-6" />
            </a>
          </div>
        </article>
      </section>
    </footer>
  );
};
