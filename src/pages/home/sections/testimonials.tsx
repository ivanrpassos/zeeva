// Apollo Client
import { gql, useQuery } from "@apollo/client";

// Components
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Embla Carousel
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";

// Icon
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { RiDoubleQuotesR, RiUser6Line } from "@remixicon/react";
import { useEffect, useState } from "react";

const GET_TESTIMONIALS_DATA = gql`
  query GetTestiomnialsData {
    clients(first: 6, orderBy: createdAt_DESC) {
      id
      avatar {
        fileName
        url
      }
      name
      position
      comment {
        text
      }
    }
  }
`;

type GetTestimonialsDataProps = {
  id: string;
  avatar: {
    fileName: string;
    url: string;
  };
  name: string;
  position: string;
  comment: {
    text: string;
  };
};

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [progress, setProgress] = useState(0);
  const delay: number = 3500;

  const { data } = useQuery<{ clients: GetTestimonialsDataProps[] }>(
    GET_TESTIMONIALS_DATA
  );

  useEffect(() => {
    let interval: any;

    if (api) {
      const handleSlideChange = () => {
        setProgress(0);

        clearInterval(interval);
        interval = setInterval(() => {
          setProgress((prev) => {
            const nextProgress = prev + 100 / (delay / 100);
            if (nextProgress >= 100) {
              clearInterval(interval);
            }
            return nextProgress;
          });
        }, 100);
      };

      handleSlideChange();
      api.on("select", handleSlideChange);

      return () => {
        clearInterval(interval);
        api.off("select", handleSlideChange);
      };
    }
  }, [api, delay]);

  return (
    <section className="container flex items-start gap-[200px]">
      {/* Left */}
      <div className="w-fit sm:hidden">
        <RiDoubleQuotesR className="size-16" />
      </div>

      {/* Right */}
      <article className="flex flex-col gap-20 w-full sm:gap-16">
        <h2 className="text-5xl/tight w-[272px] font-medium sm:text-3xl/tight">
          O que falam de nós?
        </h2>

        <Carousel
          opts={{
            containScroll: false,
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay,
            }),
            Fade(),
          ]}
          setApi={setApi}
        >
          <CarouselContent className="w-[800px] sm:w-full">
            {data?.clients.map((item) => (
              <CarouselItem key={item.id} className="w-full">
                <div className="flex flex-col gap-16 w-full">
                  <p className="text-3xl/normal font-semibold">
                    {item.comment.text}
                  </p>

                  <Progress value={progress} />

                  <div className="flex items-center gap-6">
                    <Avatar className="size-20 sm:size-16">
                      <AvatarImage
                        alt={item.avatar?.fileName}
                        src={item.avatar?.url}
                      />
                      <AvatarFallback className="bg-neutral-100">
                        <RiUser6Line className="size-7" />
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl/none font-medium">{item.name}</h3>
                      <span className="text-base/none text-neutral-500 font-medium">
                        {item.position}
                      </span>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </article>
    </section>
  );
};
