import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="px-5 md:px-28 w-full bg-black pt-10 md:pt-20 text-white font-sans-serif-pro mt-20">
        <div className="flex flex-col md:flex-row items-center justify-between tracking-wider">
          <div className="w-fit mt-5 text-center md:text-left md:mt-0">
            <h6 className=" font-semibold">Ainfluencer for business</h6>
            <div className="flex flex-col">
              <Link href="/">
                <a>artikel</a>
              </Link>
              <Link href="/">
                <a>faq</a>
              </Link>
              <Link href="/">
                <a>faq</a>
              </Link>
            </div>
          </div>
          <div className="w-fit mt-5 text-center md:text-left md:mt-0">
            <h6 className=" font-semibold">Ainfluencer</h6>
            <div className="flex flex-col">
              <Link href="/">
                <a>artikel</a>
              </Link>
              <Link href="/">
                <a>faq</a>
              </Link>
              <Link href="/">
                <a>faq</a>
              </Link>
            </div>
          </div>
          <div className="w-fit mt-5 text-center md:text-left md:mt-0">
            <h6 className=" font-semibold">Ainfluencer</h6>
            <div className="flex flex-col">
              <Link href="/">
                <a>artikel</a>
              </Link>
              <Link href="/">
                <a>faq</a>
              </Link>
              <Link href="/">
                <a>faq</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex mt-10 justify-center">
          <div className="h-7 w-7 mx-3 relative">
            <Link href="/">
              <a>
                <Image
                  src="/fb-icon.png"
                  alt="Ainfluencer"
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                ></Image>
              </a>
            </Link>
          </div>
          <div className="h-7 w-7 mx-3 relative">
            <Link href="/">
              <a>
                <Image
                  src="/instagram-icon.png"
                  alt="Ainfluencer"
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                ></Image>
              </a>
            </Link>
          </div>
          <div className="h-7 w-7 mx-3 relative">
            <Link href="/">
              <a>
                <Image
                  src="/twitter-icon.png"
                  alt="Ainfluencer"
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                ></Image>
              </a>
            </Link>
          </div>
          <div className="h-7 w-20 mx-3 relative">
            <Link href="/">
              <a>
                <Image
                  src="/app-store.png"
                  alt="Ainfluencer"
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                ></Image>
              </a>
            </Link>
          </div>
          <div className="h-7 w-20 mx-3 relative">
            <Link href="/">
              <a>
                <Image
                  src="/play-store.png"
                  alt="Ainfluencer"
                  layout="fill"
                  objectFit="contain"
                  loading="lazy"
                ></Image>
              </a>
            </Link>
          </div>
        </div>
        <p className="text-center text-white text-sm mt-16 pb-5 tracking-wider">
          copyright Ainfluencer 2022
        </p>
      </footer>
    </>
  );
}
