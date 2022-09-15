import Head from "next/head";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Footer from "../../components/web/Footer";
import Navbar from "../../components/web/Navbar";
import TopAlert from "../../components/web/TopAlert";

export default function Blogs({ post }) {
  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <TopAlert />
      <Navbar />
      <section className="container mx-auto font-sans-serif-pro px-5 md:px-28">
        <div className="w-full md:w-1/2 h-40 md:h-72 shadow relative mx-auto mt-5 md:mt-10">
          <Image
            src={process.env.NEXT_PUBLIC_API_BASEURL + post.featured_image.url}
            alt="Ainfluencer"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <h1 className="text-center mt-5 md:mt-10 text-2xl md:text-5xl font-semibold tracking-wider leading-snug">
            {post.title}
          </h1>
          <div className="mt-10">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ params }) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/posts?slug=${params.slug}`
  );
  const post = await data.json();
  return { props: { post: post[0] } };
}
