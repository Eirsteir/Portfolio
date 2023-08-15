import { ArrowUpRightIcon } from "~/icons/ArrowUpRightIcon";

export default function Contact() {
  return (
    <div className="min-w-screen flex min-h-screen items-center justify-center">
      <div className="">
        <h2 className="my-4  border-b-2 border-b-slate-950 py-4 text-6xl">
          CONTACT
        </h2>
        <div className="grid grid-cols-4 gap-8">
          <h4 className="text-xl font-bold">MAIL</h4>
          <a
            href="mailto:steiraeirik@gmail.com"
            className="flex items-baseline text-xl hover:underline"
          >
            <ArrowUpRightIcon /> steiraeirik@gmail.com
          </a>
          <h4 className="text-xl font-bold">SOCIAL MEDIAS</h4>
          <div className="flex flex-col">
            <a
              href="https://github.com/Eirsteir"
              className="flex items-baseline text-xl hover:underline"
            >
              <ArrowUpRightIcon /> Github
            </a>
            <a
              href="https://www.linkedin.com/in/eirik-steira/"
              className="flex items-baseline text-xl hover:underline"
            >
              <ArrowUpRightIcon /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
