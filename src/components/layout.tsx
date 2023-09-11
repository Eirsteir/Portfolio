import Head from "next/head";
import { Navbar } from "~/components/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Eirik Steira | Portfolio</title>
        <meta
          name="description"
          content="Eirik Steira's portfolio with an overview of projects and work experience."
        />
        <meta
          name="keywords"
          content="Eirik Steira, porfolio, projects, work, work experience"
        ></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <meta name="language" content="English"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="google-site-verification"
          content="tPw21a-SCnQlq_KZy6kITQWnwiObQ33V0LJW-knA90c"
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
