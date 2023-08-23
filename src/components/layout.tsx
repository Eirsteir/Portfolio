import Head from "next/head";
import { Navbar } from "~/components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="title" content="Eirik Steira | Portfolio" />
        <meta
          name="description"
          content="Eirik Steira's portfolio with an overview of projects and work experience."
        />
        <meta
          name="keywords"
          content="Eirik Steira, porfolio, projects, work, work experience"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="no-scrollbar flex ">
        <Navbar />
        <main className="no-scrollbar relative min-h-screen w-screen min-w-full flex-grow overflow-y-hidden bg-primary px-4 md:px-16">
          {children}
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
}
