import Head from "next/head";
import { useEffect, useState } from "react";
import CardBlog from "../components/web/CardBlog";
import Footer from "../components/web/Footer";
import Navbar from "../components/web/Navbar";
import TopAlert from "../components/web/TopAlert";

export default function Blogs() {
  // state
  const [posts, setPost] = useState([]);

  async function getPost() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASEURL}/posts`
    );
    const posts = await response.json();
    setPost(posts);
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
      <CardBlog posts={posts} />
      <Footer />
    </>
  );
}
