import { GithubIconButton } from "~/components/GithubIconButton";
import { type Project } from "@prisma/client";
import Image from "next/image";
import { LiveDemoButton } from "~/components/LiveDemoButton";

export const ProjectCard = ({
  project,
  imageOnLeft = true,
}: {
  project: Project;
  imageOnLeft?: boolean;
}) => (
  <div
    className={`relative flex flex-col overflow-hidden md:my-4 md:flex-row md:px-8 md:py-12 ${
      !imageOnLeft ? "md:flex-row-reverse" : ""
    }`}
  >
    <div
      className={`relative overflow-hidden md:w-1/2 ${
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
    <div
      className={`bottom-0 md:absolute ${
        imageOnLeft ? "right-12" : "left-12"
      } bg-primary p-4 md:w-1/2 md:pr-4`}
    >
      <h4 className="mb-2 text-4xl font-semibold">{project.title}</h4>
      <h5 className="mb-1 text-lg text-gray-400">{project.subtitle}</h5>

      <p className="text-gray-600">{project.body}</p>
      <p className="mt-2 text-gray-600">
        Programming Language: {project.programmingLanguage}
      </p>
      <p className="mt-2 text-gray-600">
        Date: {new Date(project.date).toLocaleDateString("en-us")}
      </p>
      <a
        href="#"
        className="hover:text-primary-dark mt-4 inline-block font-semibold text-primary"
      >
        Learn More
      </a>
      <div className="flex items-center gap-4">
        {project.github && <GithubIconButton link={project.github} />}
        {project.url && <LiveDemoButton link={project.url} />}
      </div>
    </div>
  </div>
);
