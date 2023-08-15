import { ArrowDownIcon } from "~/icons/ArrowDownIcon";

export default function Info() {
  return (
    <div className="min-w-screen flex min-h-screen items-center justify-center">
      <div className="w-3/5">
        <h2 className="my-4 border border-b-2 border-b-slate-950 py-4 text-6xl">
          ABOUT ME
        </h2>
        <div className="">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices
            elit ut ligula egestas volutpat quis non leo. Praesent at sem eros.
            Donec congue tortor vitae sapien ultrices, nec pretium ligula
            placerat. Curabitur lacus sapien, aliquet ut malesuada quis, rutrum
            sed dolor. Vestibulum pretium eros quis ipsum tristique, et varius
            leo venenatis. Aliquam elementum pellentesque lorem, et lobortis
            quam lacinia sit amet. Vestibulum arcu nibh, tristique id dui nec,
            mollis mollis augue. Integer commodo, purus in convallis placerat,
            odio turpis molestie nulla, a iaculis leo orci sed erat. Cras vel
            est velit. Nam aliquet massa ut faucibus fermentum.
          </p>
        </div>
        <a
          href="#"
          className="mt-4 flex items-baseline text-xl hover:underline"
        >
          <ArrowDownIcon /> Resume
        </a>
      </div>
    </div>
  );
}
