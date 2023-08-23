import { ArrowDownIcon } from "~/icons/ArrowDownIcon";
import { createServerSideHelpers } from "@trpc/react-query/server";
import {
  GetStaticPaths,
  type GetStaticPropsContext,
  type InferGetStaticPropsType,
} from "next";
import superjson from "superjson";
import { appRouter } from "~/server/api/root";
import { prisma } from "~/server/db";
import { api } from "~/utils/api";
import { type Experience } from "@prisma/client";
import { WorkExperienceCard } from "~/components/ExperienceCard";

export async function getStaticProps() {
  const helpers = createServerSideHelpers({
    router: appRouter,
    ctx: { prisma },
    transformer: superjson, // optional - adds superjson serialization
  });

  // prefetch `post.byId`
  await helpers.experience.getAll.prefetch();
  return {
    props: {
      trpcState: helpers.dehydrate(),
    },
    revalidate: 1,
  };
}
export default function Experience(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { data } = api.experience.getAll.useQuery();
  return (
    <div className="min-w-screen flex min-h-screen items-center justify-center">
      <div className="md:w-3/5">
        <h2 className="my-4 border-b-2 border-b-slate-950 py-4 text-6xl">
          EXPERIENCE
        </h2>
        <div className="">
          {data?.map((experience: Experience) => (
            <WorkExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </div>
  );
}
