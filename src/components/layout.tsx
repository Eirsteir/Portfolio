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
      <div className="flex h-screen overflow-hidden">
        <Navbar />
        <main className="relative h-screen min-h-screen w-screen min-w-full flex-grow overflow-y-hidden bg-primary px-16">
          {children}
        </main>
      </div>
      {/* <Footer /> */}
    </>
  );
}
