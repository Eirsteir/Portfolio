import { type Project } from "@prisma/client";
import Link from "next/link";
import { api } from "~/utils/api";

export default function Projects() {
  const { data: projects } = api.projects.getAll.useQuery();

  return (
    <div>
      <div className="container mx-auto">
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

      <div className="w-8/12 py-24">
        <h1 className="border-b-4">Projects</h1>
        <div className="no-scrollbar max-h-[28rem] overflow-y-scroll pb-24">
          {projects?.map((project: Project) => (
            <Link key={project.id} href={`/projects/${project.title}`}>
              <div className="cubic-bezier-0.1-0.4-0.2-1 cursor-pointer py-6 transition-colors duration-500 ease-in-out hover:text-gray-400">
                <h2 className="inline-block text-6xl">{project.title}</h2>
                <p className="ml-4 inline-block">
                  <span className="capitalize">
                    {project.type.replace("_", " ").toLowerCase()}
                  </span>{" "}
                  \ {project.date.getFullYear()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
