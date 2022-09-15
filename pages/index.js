import Head from "next/head";
import AboutSection from "../components/web/AboutSection";
import ButtonLink from "../components/web/ButtonLink";
import Footer from "../components/web/Footer";
import Header from "../components/web/Header";
import Navbar from "../components/web/Navbar";
import TestimonialSection from "../components/web/TestimonialSection";
import TopAlert from "../components/web/TopAlert";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Document</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopAlert />
      <Navbar />
      <Header headerTitle="Influencer Marketing Berawal Dari Sini" />
      <AboutSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
