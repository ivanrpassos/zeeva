import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { gql, useQuery } from "@apollo/client";
import {
  RiArrowDownLine,
  RiArrowRightLine,
  RiDoubleQuotesR,
  RiUser6Line,
} from "@remixicon/react";
import { useParams } from "react-router-dom";

const GET_PROJECT_BY_SLUG = gql`
  query GetProjectBySlug($slug: String) {
    project(where: { slug: $slug }) {
      title
      description
      banner {
        fileName
        url
      }
      insight
      solution {
        html
        text
      }
      gallery {
        id
        fileName
        url
      }
      client {
        comment {
          text
        }
        avatar {
          fileName
          url
        }
        name
        position
      }
    }
  }
`;

type GetProjectBySlugProps = {
  title: string;
  description: string;
  banner: {
    fileName: string;
    url: string;
  };
  insight: string;
  solution: {
    html: string | TrustedHTML | undefined;
    text: string;
  };
  gallery: {
    id: string;
    fileName: string;
    url: string;
  }[];
  client: {
    comment: {
      text: string;
    };
    avatar: {
      fileName: string;
      url: string;
    };
    name: string;
    position: string;
  };
};

export const Project = () => {
  const { slug } = useParams();
  const { data } = useQuery<{ project: GetProjectBySlugProps }>(
    GET_PROJECT_BY_SLUG,
    {
      variables: {
        slug,
      },
    }
  );

  return (
    <>
      {/* Hero */}
      <main
        id="hero top"
        className="container flex flex-col gap-28 pt-52 sm:gap-16"
      >
        {/* Main */}
        <section className="flex items-end justify-between pl-[264px] gap-[200px] w-full sm:flex-col sm:p-0">
          <div className="flex flex-col gap-4">
            <h1 className="text-[88px]/none max-w-[624px] font-semibold sm:text-6xl/none">
              {data?.project.title}
            </h1>

            <p className="text-2xl/normal text-neutral-500 sm:text-lg/normal">
              {data?.project.description}
            </p>
          </div>

          <a href="#showreel" className="w-fit sm:hidden">
            <RiArrowDownLine className="size-16" />
          </a>
        </section>

        {/* Showreel */}
        <img
          className="h-[800px] w-full bg-neutral-100 object-cover sm:h-80"
          src={data?.project.banner.url}
          alt={data?.project.banner.fileName}
        />
      </main>

      {/* Solution */}
      <section className="container flex items-start gap-[200px]">
        {/* Left */}
        <div className="w-fit sm:hidden">
          <RiArrowRightLine className="size-16" />
        </div>

        {/* Right */}
        <article className="flex flex-col gap-20 w-full sm:gap-16">
          <h2 className="font-medium text-6xl/tight w-[920px] sm:text-3xl/tight sm:w-full">
            {data?.project.insight}
          </h2>

          <div className="flex items-start gap-8 sm:flex-col">
            <h3 className="text-2xl/tight min-w-80 font-semibold">Solução</h3>

            {data?.project.solution.html ? (
              <div
                className="text-xl/normal font-normal text-neutral-500 w-full"
                dangerouslySetInnerHTML={{
                  __html: data?.project?.solution?.html,
                }}
              />
            ) : (
              <p className="text-xl/normal text-neutral-500 w-full">
                {data?.project.solution.text}
              </p>
            )}
          </div>
        </article>
      </section>

      {/* Gallery */}
      <section className="container flex flex-col gap-8 items-start">
        {data?.project.gallery.map((item) => (
          <img
            className="h-[800px] w-full bg-neutral-100 object-cover sm:h-80"
            src={item.url}
            alt={item.fileName}
          />
        ))}
      </section>

      {/* Client */}
      <section className="container flex items-start gap-[200px]">
        {/* Left */}
        <div className="w-fit sm:hidden">
          <RiDoubleQuotesR className="size-16" />
        </div>

        {/* Right */}
        <article className="flex flex-col gap-20 w-full sm:gap-16">
          <h2 className="text-5xl/tight w-[504px] font-medium sm:text-3xl/tight sm:w-full">
            O que o cliente achou do projeto?
          </h2>

          <div className="flex flex-col gap-16 w-[800px] sm:w-full sm:gap-10">
            <p className="text-3xl/normal font-semibold sm:text-[28px]/normal">
              {data?.project.client.comment.text}
            </p>

            <hr className="border-neutral-200" />

            <div className="flex items-center gap-6">
              <Avatar className="size-20 sm:size-16">
                <AvatarImage
                  alt={data?.project.client.avatar?.fileName}
                  src={data?.project.client.avatar?.url}
                />
                <AvatarFallback className="bg-neutral-100">
                  <RiUser6Line className="size-7" />
                </AvatarFallback>
              </Avatar>

              <div className="flex flex-col gap-2">
                <h3 className="text-2xl/none font-medium">
                  {data?.project.client.name}
                </h3>
                <span className="text-base/none text-neutral-500 font-medium">
                  {data?.project.client.position}
                </span>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};
