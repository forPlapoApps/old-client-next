import Head from "next/head";
import Navbar from "../components/Navbar";

type Props = { title?: string; children?: React.ReactNode };

const Layout = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>
          {title ? `${title} | forplapoapps.com` : "forplapoapps.com"}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto h-screen flex flex-col">
        <div className="flex-none">
          <Navbar />
        </div>
        <div className="px-4 flex flex-col gap-4 grow">{children}</div>
      </main>
    </>
  );
};

export default Layout;
