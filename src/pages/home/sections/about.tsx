// Icons
import { RiArrowRightLine } from "@remixicon/react";

export const About = () => {
  return (
    <section className="container flex items-start gap-[200px]">
      {/* Left */}
      <div className="w-fit sm:hidden">
        <RiArrowRightLine className="size-16" />
      </div>

      {/* Right */}
      <article className="flex flex-col gap-20 w-full sm:gap-16">
        <h2 className="font-medium text-6xl/tight w-[920px] sm:text-3xl/tight sm:w-full">
          Definindo como as marcas se comunicam e se posicionam no mundo.
        </h2>

        <div className="flex items-start gap-8 sm:flex-col">
          <h3 className="text-2xl min-w-80 font-semibold">Sobre nós</h3>

          <p className="text-xl/normal font-normal text-neutral-500 w-full">
            Somos um estúdio de criação de marcas inspirado pela natureza,
            cultura e arte para desenvolver soluções criativas, sofisticadas e
            originais.
            <br />
            <br />
            Nossas marcas estão presentes em 5 países e fomos incluídos como
            referência no design em um livro acadêmico chinês distribuído pela
            Ásia e Europa. Se deseja que sua marca transcenda o tempo e se
            conecte com o público certo, entre em contato conosco.
            <br />
            <br />
            <span className="font-medium text-black">
              Transformamos sonhos em marcas que conectam.
            </span>
          </p>
        </div>
      </article>
    </section>
  );
};
