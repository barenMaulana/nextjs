import Image from "next/image";
import Link from "next/link";

export default function CardBlog({ posts }) {
  return (
    <>
      <section className="container mx-auto flex md:justify-between md:flex-wrap flex-col md:flex-row px-5 md:px-28 mt-5 font-sans-serif-pro">
        {posts.map(function (post) {
          return (
            <div
              key={post.id}
              className="bg-white shadow w-full md:w-1/4 hover:shadow-lg transition-all duration-500 cursor-pointer mt-5 md:mt-2 box-border"
            >
              <Link href={`/blogs/${post.slug}`}>
                <a>
                  <div className="w-full h-40 relative bg-gray-800">
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_API_BASEURL +
                        post.featured_image.url
                      }
                      alt="Ainfluencer"
                      layout="fill"
                      objectFit="cover"
                    ></Image>
                  </div>
                  <p className="text-justify p-2">
                    {post.short_description} <br />
                    <span className=" text-gray-500 text-sm">
                      {new Date(post.published_at).toLocaleDateString("id-ID")}
                    </span>
                    &nbsp;
                    <span className=" text-gray-500 text-sm">
                      {post.author.firstname}
                    </span>
                  </p>
                </a>
              </Link>
            </div>
          );
        })}
      </section>
    </>
  );
}
