export default function Contact() {
  return (
    <div className="min-w-screen flex min-h-screen items-center justify-center">
      <div className="">
        <h2 className="my-4 border border-b-2 border-b-slate-950 py-4 text-6xl">
          CONTACT
        </h2>
        <div className="grid grid-cols-4 gap-8">
          <h4 className="text-xl font-bold">Mail</h4>
          <p className="">steiraeirik@gmail.com</p>
          <h4 className="text-xl font-bold">Social Media</h4>
          <div className="flex flex-col">
            <p>Github</p>
            <p>LinkedIn</p>
          </div>
        </div>
        <p>Resume</p>
      </div>
    </div>
  );
}
