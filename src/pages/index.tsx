import { type Project } from "@prisma/client";

import Image from "next/image";
import { ProjectCard } from "~/components/ProjectCard";
import { appRouter } from "~/server/api/root";
import { api } from "~/utils/api";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { prisma } from "~/server/db";
import superjson from "superjson";

export async function getStaticProps(context) {
  const helpers = createServerSideHelpers({
    router: appRouter,
    ctx: { prisma },
    transformer: superjson, // optional - adds superjson serialization
  });

  await helpers.projects.getAll.prefetch();

  return { props: {} };
}

export default function Home() {
  const { data: projects } = api.projects.getAll.useQuery();

  return (
    <div className="no-scrollbar h-screen overflow-y-scroll">
      <div>
        <div className="container mx-auto ">
          <div className="flex h-24 items-center justify-between">
            <div className="flex items-center gap-28 font-medium">
              <a className="inline-block" href="#">
                Eirik Steira
              </a>
              <p className="mx-10 inline-block">
                Student of computer
                <br />
                science at NTNU
              </p>
              <p className="mx-10 inline-block">
                Based in Trondheim, <br />
                Norway
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container relative pb-64 pt-2 lg:pb-28">
        <div className="relative ">
          <div className="inline-block">
            <h1 className="font-heading md:text-11xl xl:text-13xl text-8xl">
              <span className="block">EIRIK</span>
              <span className="block">STEIRA</span>
            </h1>
          </div>
        </div>
        <div className="mr-auto mt-2 block">
          <Image
            src="/unnamed (1).jpg"
            width={400}
            height={120}
            alt="An image of myself"
          />
        </div>
        <div className="container mx-auto flex items-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-21 w-20 cursor-pointer pt-5 font-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
          <div className="ml-auto max-w-sm text-right">
            <h2 className="font-heading md:text-11xl xl:text-13xl text-7xl">
              <span className="block">SOFTWARE</span>
              <span className="block">DEVELOPER</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <h3 className="font-heading mb-8 mt-4 text-5xl font-bold">PROJECTS</h3>

        <div>
          {projects?.map((project: Project, i: number) => (
            <ProjectCard
              key={project.id}
              project={project}
              imageOnLeft={i % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
