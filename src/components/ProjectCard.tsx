import { GithubIconButton } from "~/components/GithubIconButton";
import { type Project } from "@prisma/client";
import Image from "next/image";
import { LiveDemoButton } from "~/components/LiveDemoButton";
import { getSeasonName } from "~/utils/date";
import { Tag } from "~/components/Tag";

export const ProjectCard = ({
  project,
  imageOnLeft = true,
}: {
  project: Project;
  imageOnLeft?: boolean;
}) => (
  <div
    className={`flex flex-col overflow-hidden md:my-4 md:flex-row md:px-8 md:py-12 ${
      !imageOnLeft ? "md:flex-row-reverse" : ""
    }`}
  >
    {project.img && (
      <div className="relative md:w-1/2">
        <div
          className={`relative overflow-hidden ${
            imageOnLeft ? "" : "md:order-2"
          }`}
        >
          <Image
            width={800}
            height={600}
            src={project.img ?? ""}
            alt="Project"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    )}
    <div
      className={`bg-primary p-4 md:w-1/2 md:pr-4 ${
        imageOnLeft ? "ml-auto" : "mr-auto"
      }`}
    >
      <h4 className="text-4xl font-semibold">
        {project.title}{" "}
        <span className="text-sm text-gray-600">
          {getSeasonName(new Date(project.date)) +
            " " +
            new Date(project.date).getFullYear()}
        </span>
      </h4>

      <h5 className="mb-1 text-lg text-gray-400">{project.subtitle}</h5>

      <p className="text-gray-600">{project.body}</p>
      <div className="mb-4 mt-2 text-gray-600">
        {project.programmingLanguage
          .split(", ")
          .map((tag: string, i: number) => (
            <Tag key={`${tag}-${i}`} title={tag} />
          ))}
      </div>

      <div className="flex items-center gap-4">
        {project.github && <GithubIconButton link={project.github} />}
        {project.url && <LiveDemoButton link={project.url} />}
      </div>
    </div>
  </div>
);
