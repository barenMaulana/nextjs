import Head from "next/head";
import { useEffect, useState } from "react";
import CardBlog from "../components/web/CardBlog";
import Footer from "../components/web/Footer";
import Navbar from "../components/web/Navbar";
import TopAlert from "../components/web/TopAlert";

export default function Blogs() {
  // state
  const [posts, setPost] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getPost() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASEURL}/posts`
    );
    const posts = await response.json();
    setPost(posts);
    setLoading(false);
  }

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <TopAlert />
      <Navbar />
      {loading && (
        <p className="text-center mt-10 text-gray-800">
          loading, please wait..
        </p>
      )}
      {loading == false ? (
        <>
          <section className=" container mx-auto px-5 md:px-28 mt-5 md:mt-10 ">
            <div className="flex mx-auto  shadow w-fit">
              <input
                type="text"
                placeholder="cari sesuatu.."
                className="py-2 px-3 text-sm text-gray-700 focus:outline-none"
              />
              <button className="px-2 bg-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </div>
          </section>
          <CardBlog posts={posts} />
        </>
      ) : (
        ""
      )}

      <Footer />
    </>
  );
}
