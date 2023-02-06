import Head from "next/head";
import Navbar from "../components/Navbar";

type Props = { title?: string; children?: React.ReactNode };

const Layout = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | forplapoapps.com` : "forplapoapps.com"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <div style={{ minHeight: "800px" }}>{children}</div>
      </main>
    </>
  );
};

export default Layout;
