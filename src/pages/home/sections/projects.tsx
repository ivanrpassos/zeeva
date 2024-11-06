// Apollo Client
import { gql, useQuery } from "@apollo/client";

// components
import { Card, CardFallback } from "@/components/ui/card.tsx";
import Marquee from "@/components/ui/marquee.tsx";

// Icons
import { RiGlobalLine } from "@remixicon/react";

const GET_PROJECTS_DATA = gql`
  query GetProjectsData {
    projects(first: 5, orderBy: createdAt_DESC) {
      id
      slug
      completed
      cover {
        fileName
        url
      }
      title
      category
    }
  }
`;

type GetProjectsDataProps = {
  id: string;
  slug: string;
  completed: boolean;
  cover: {
    fileName: string;
    url: string;
  };
  title: string;
  category: string;
};

export const Projects = () => {
  const { data } = useQuery<{ projects: GetProjectsDataProps[] }>(
    GET_PROJECTS_DATA
  );

  return (
    <section className="bg-neutral-100 flex flex-col gap-20 py-20 sm:gap-16">
      <section className="container w-full py-0 flex items-start gap-[200px]">
        <div className="w-fit sm:hidden">
          <RiGlobalLine className="size-16" />
        </div>

        <article className="flex items-start justify-between w-full sm:flex-col sm:items-center sm:gap-6">
          <h2 className="text-5xl/tight w-[568px] font-medium sm:text-3xl/tight sm:w-full sm:text-center">
            Principais projetos que a zeeva transformou no mundo
          </h2>

          {/* <a href="/projetos" className="flex items-center gap-2">
            <RiArrowRightLine className="size-6" />
            <span className="text-xl/none font-medium">
              Ver todos os projetos
            </span>
          </a> */}
        </article>
      </section>

      <Marquee
        pauseOnHover
        className="[--duration:32s] [--gap:32px] sm:[--gap:20px]"
      >
        {data?.projects?.map((item) =>
          item.completed ? (
            <Card
              key={item.id}
              slug={item.slug}
              category={item.category}
              cover={item.cover}
              title={item.title}
            />
          ) : (
            <CardFallback
              key={item.id}
              category={item.category}
              cover={item.cover}
              title={item.title}
            />
          )
        )}
      </Marquee>
    </section>
  );
};
