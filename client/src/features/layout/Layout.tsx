import { FunctionComponent, useEffect } from "react";
import Head from "next/head";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout: FunctionComponent = ({ children }) => {
  useEffect(() => {
    document.body.style.backgroundColor = "#0f172a";
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Spotify Community</title>
      </Head>
      <Header />
      <main className="mt-16 p-4 w-screen bg-slate-900 h-auto">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
