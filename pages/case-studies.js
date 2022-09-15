import Head from "next/head";
import Footer from "../components/web/Footer";
import Navbar from "../components/web/Navbar";
import TopAlert from "../components/web/TopAlert";

export default function caseStudies() {
  return (
    <>
      <Head>
        <title>Case Studies</title>
      </Head>
      <TopAlert />
      <Navbar />
      <Footer />
    </>
  );
}
