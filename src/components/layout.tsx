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
      <Navbar />
      <main className="relative min-h-screen min-w-full bg-primary px-16">
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
}
