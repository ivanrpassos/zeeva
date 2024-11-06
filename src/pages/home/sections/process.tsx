// Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Icons
import { RiKey2Line } from "@remixicon/react";

type AccordionDataProps = {
  value: string;
  element?: React.ReactNode;
  title: string;
  description: string;
};

const accordionData: AccordionDataProps[] = [
  {
    value: "1",
    title: "Imersão",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    value: "2",
    title: "Ideação",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    value: "3",
    title: "Prototipação",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    value: "4",
    title: "Entrega",
    description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

export const Process = () => {
  return (
    <section className="container flex items-start gap-[200px]">
      {/* Left */}
      <div className="w-fit sm:hidden">
        <RiKey2Line className="size-16" />
      </div>

      {/* Right */}
      <article className="flex flex-col gap-20 w-full sm:gap-16">
        <h2 className="text-5xl/tight w-[520px] font-medium sm:w-full sm:text-3xl/tight">
          Nosso processo é a chave para o sucesso das marcas
        </h2>

        <Accordion
          className="flex flex-col gap-10 w-full sm:gap-8"
          type="single"
          defaultValue="1"
          collapsible
        >
          {accordionData.map((item) => (
            <AccordionItem
              className="w-full"
              key={item.value}
              value={item.value}
            >
              <AccordionTrigger className="w-full data-[state=closed]:text-neutral-300">
                <h3 className="text-8xl/none font-semibold uppercase sm:text-[40px]/none">
                  {item.title}
                </h3>
              </AccordionTrigger>
              <AccordionContent className="w-3/4 pt-4 sm:w-full">
                <p className="text-neutral-500 text-xl/normal sm:text-base/normal">
                  {item.description}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </article>
    </section>
  );
};
