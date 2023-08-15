import Head from "next/head";
import { Navbar } from "~/components/Navbar";

export default function Layout({ children }) {
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
