import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/Button";
import { GithubIconButton } from "~/components/GithubIconButton";
import { LiveDemoButton } from "~/components/LiveDemoButton";
import { api } from "~/utils/api";

export default function Home() {
  const { data: projects } = api.projects.getAll.useQuery(); // TODO: static rendering

  return (
    <>
      <Head>
        <title>Eirik Steira</title>
        <meta name="description" content="Eirik Steira's Portfolio" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative min-h-screen bg-primary px-16">
        <section className="relative">
          <nav>
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

                <div className="flex">
                  <a className="mr-2 inline-block hover:underline" href="#">
                    Projects,
                  </a>
                  <a className="mr-2 inline-block hover:underline" href="#">
                    Info,
                  </a>
                  <a className="mr-2 inline-block hover:underline" href="#">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </nav>
          <div className="container relative pb-64 pt-2 lg:pb-28">
            <div className="relative max-w-sm md:max-w-xl xl:max-w-5xl">
              <div className="">
                <h1 className="font-heading md:text-11xl xl:text-13xl text-8xl">
                  <span className="block">EIRIK</span>
                  <span className="block">STEIRA</span>
                </h1>
              </div>
            </div>
            <div className="mr-auto mt-5 block">
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
                  <span className="block">FULLSTACK</span>
                  <span className="block">DEVELOPER</span>
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto">
          <h3 className="font-heading mb-8 mt-4 text-5xl font-bold">
            PROJECTS
          </h3>

          {/* <div key={project.id}>
                <Image
                  width={400}
                  height={300}
                  src={project.img ?? ""}
                  alt={`Project '${project.title} cover image'`}
                />
                <h4>{project.title}</h4>
                <p>{project.subtitle}</p>
                <p>{project.body}</p>
              </div> */}

          <div>
            {projects?.map((project) => (
              <div
                key={project.id}
                className="my-4 flex flex-col overflow-hidden md:flex-row"
              >
                <div className="pr-4 md:w-1/2">
                  <div className="">
                    <h4 className="mb-2 text-xl font-semibold">
                      {project.title}
                    </h4>
                    <p className="text-gray-600">{project.body}</p>
                    <p className="mt-2 text-gray-600">
                      Programming Language: {project.programmingLanguage}
                    </p>
                    <p className="mt-2 text-gray-600">
                      Date: {project.date.toDateString()}
                    </p>
                    <a
                      href="#"
                      className="hover:text-primary-dark mt-4 inline-block font-semibold text-primary"
                    >
                      Learn More
                    </a>
                    <div className="flex items-center gap-4">
                      {project.github && (
                        <GithubIconButton link={project.github} />
                      )}
                      {project.url && <LiveDemoButton link={project.url} />}
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <Image
                    width={600}
                    height={400}
                    src={project.img ?? ""}
                    alt="Project"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
