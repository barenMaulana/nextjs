import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const burger = useRef();
  const span1 = useRef();
  const span2 = useRef();
  const span3 = useRef();
  const mobile_menu = useRef();

  function toggleNavbar() {
    console.log(span1, span2, span3);
    if (burger.current.classList.contains("open")) {
      burger.current.classList.remove("open");
      span1.current.classList.remove("span1-active");
      span2.current.classList.remove("span2-active");
      span3.current.classList.remove("span3-active");
      mobile_menu.current.classList.remove("mobile-navbar-active");
    } else {
      burger.current.classList.add("open");
      span1.current.classList.add("span1-active");
      span2.current.classList.add("span2-active");
      span3.current.classList.add("span3-active");
      mobile_menu.current.classList.add("mobile-navbar-active");
    }
  }

  return (
    <div>
      <Head>
        <title>Document</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@200;300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
        <script src="/scripts/global.js" async></script>
      </Head>

      {/* top alert */}
      <div className="h-10 bg-black flex justify-center items-center">
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </span>
        <p className="font-sans-serif-pro text-center text-white w-fit text-sm">
          sign up free for influencer
        </p>
        <span className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </span>
      </div>

      {/* desktop navbar */}
      <nav className="hidden md:flex justify-between h-14 items-center font-sans-serif-pro px-28 shadow-lg ">
        <Link href="/">
          <a>
            <Image
              src="/ainfluencer.png"
              alt="Ainfluencer"
              width={120}
              height={30}
            />
          </a>
        </Link>
        <div>
          <Link href="/services">
            <a>
              <span className="px-3 hover:text-gray-500">services</span>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <span className="px-3 hover:text-gray-500">about</span>
            </a>
          </Link>
          <Link href="/case-studies">
            <a>
              <span className="px-3 hover:text-gray-500">case studies</span>
            </a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>
              <button className="bg-black text-white rounded-sm py-1 px-3 mr-2 text-sm">
                Login
              </button>
            </a>
          </Link>
          <Link href="/">
            <a>
              <button className="bg-black text-white rounded-sm py-1 px-3 text-sm">
                Register
              </button>
            </a>
          </Link>
        </div>
      </nav>

      {/* mobile navbar */}
      <nav className="flex md:hidden justify-between h-14 items-center font-sans-serif-pro px-5 shadow-lg">
        <div className=" h-7 w-24 relative">
          <Link href="/">
            <a>
              <Image
                src="/ainfluencer.png"
                alt="Ainfluencer"
                layout="fill"
                objectFit="contain"
              />
            </a>
          </Link>
        </div>
        <div id="burger" ref={burger} onClick={toggleNavbar}>
          <span ref={span1}></span>
          <span ref={span2}></span>
          <span ref={span3}></span>
        </div>
      </nav>
      <div ref={mobile_menu} className="mobile-navbar shadow">
        <div className="flex flex-col pt-5">
          <Link href="/services">
            <a>
              <span className="px-3 hover:text-gray-500">services</span>
            </a>
          </Link>
          <Link href="/about">
            <a>
              <span className="px-3 hover:text-gray-500">about</span>
            </a>
          </Link>
          <Link href="/case-studies">
            <a>
              <span className="px-3 hover:text-gray-500">case studies</span>
            </a>
          </Link>
        </div>
        <div className="ml-2 mt-5">
          <Link href="/">
            <a>
              <button className="bg-black text-white rounded-sm py-1 px-3 mr-2 text-sm">
                Login
              </button>
            </a>
          </Link>
          <Link href="/">
            <a>
              <button className="bg-black text-white rounded-sm py-1 px-3 text-sm">
                Register
              </button>
            </a>
          </Link>
        </div>
      </div>

      {/* header */}
      <section className="container mx-auto flex flex-col-reverse md:flex-row font-sans-serif-pro md:mt-16 px-5 md:px-28 ">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-6xl tracking-wider font-semibold leading-snug">
            Influencer Marketing Berawal Dari Sini
          </h1>
          <Link href="/">
            <a>
              <button className="bg-black text-white rounded-sm py-2 px-3 md:py-3 md:px-5 text-xs md:text-lg mt-3 md:mt-5 hover:bg-gray-300 hover:text-black transition-all duration-500">
                registrasi gratis
              </button>
            </a>
          </Link>
        </div>
        <div className="w-full md:w-1/2 h-72 md:h-80 relative">
          <Image
            src="/hero-1.png"
            alt="Ainfluencer"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
      </section>

      {/* content 1 */}
      <section className="container mx-auto flex flex-col md:flex-row font-sans-serif-pro px-5 md:px-28 mt-5 md:mt-36">
        <div className="w-full md:w-1/2 h-80 md:h-80 relative">
          <Image
            src="/hero-2.png"
            alt="Ainfluencer"
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
        <div className="w-full md:w-1/2 text-left md:text-right">
          <p className="text-gray-600 text-sm md:text-lg font-semibold">
            Bagaimana Ainfluencer Membantu?
          </p>
          <h2 className="text-xl md:text-5xl mt-3">
            Hemat Waktu Manage Ratusan Influencer
          </h2>
          <p className="mt-3 text-justify text-gray-800 tracking-wide leading-6">
            Berapapun influencer yang kamu butuhkan, LEMON Platform siap
            membantu sehingga Anda hemat waktu dalam mencari dan menganalisis
            influencer mana yang tepat.
          </p>
          <p className="mt-3 text-justify text-gray-800 tracking-wide leading-6">
            Bangun hubungan yang lebih dekat lebih dari sekadar influencer
            dengan client dan hasikan content yang original untuk memenangkan
            hati audiens.
          </p>
          <Link href="/">
            <a>
              <button className="bg-black text-white rounded-sm py-2 px-3 md:py-3 md:px-5 text-xs md:text-lg mt-3 md:mt-5 hover:bg-gray-300 hover:text-black transition-all duration-500">
                registrasi gratis
              </button>
            </a>
          </Link>
        </div>
      </section>

      {/* content 2 */}
      <section className="container mx-auto px-5 md:px-28 mt-10 md:mt-36 font-sans-serif-pro">
        <h2 className="text-xl md:text-5xl text-center">
          Cerita Sukses Campaign
        </h2>
        <div className="flex flex-col-reverse md:flex-row mt-3 md:mt-14">
          <div className="w-full md:w-1/2">
            <h2 className="text-xl md:text-5xl mt-0 md:mt-5">Focallure</h2>
            <p className="mt-3 text-justify text-gray-800 tracking-wide leading-6">
              Focallure menjalankan influencer marketing campaign dengan 1.237
              influencer dan tidak membuang waktu berhari-hari untuk mengontak
              mereka satu per satu. Dengan LEMON, Focallure mampu dengan cepat
              mendapatkan influencer yang...
              <Link href="/">
                <a className=" italic text-gray-500">&nbsp;selengkapnya</a>
              </Link>
            </p>
            <div className="flex justify-between mt-3">
              <div className="h-20 w-32 text-white bg-gray-400 p-3 shadow hover:shadow-xl transition-all duration-500">
                <p className="text-2xl">Rp 113</p>
                <p>CPR</p>
              </div>
              <div className="h-20 w-32 text-white bg-gray-400 p-3 shadow hover:shadow-xl transition-all duration-500">
                <p className="text-2xl">Rp 113</p>
                <p>CPR</p>
              </div>
              <div className="h-20 w-32 text-white bg-gray-400 p-3 shadow hover:shadow-xl transition-all duration-500">
                <p className="text-2xl">Rp 113</p>
                <p>CPR</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-72 md:h-80 relative">
            <Image
              src="/hero-3.png"
              alt="Ainfluencer"
              layout="fill"
              objectFit="contain"
            ></Image>
          </div>
        </div>
      </section>

      {/* content 3 */}
      <section className="container mx-auto px-5 md:px-28 mt-10 md:mt-36 font-sans-serif-pro">
        <div className=" w-3/4 h-40 md:h-80 mx-auto rounded-lg bg-gray-300 relative">
          <div className="absolute bottom-3 right-3 md:bottom-5 md:right-5 flex">
            <Link href="/">
              <a>
                <button className="bg-black text-white mr-2 rounded-sm py-2 px-3 md:py-3 md:px-5 text-xs md:text-lg mt-3 md:mt-5 hover:bg-gray-300 hover:text-black transition-all duration-500">
                  konsultasi
                </button>
              </a>
            </Link>
            <Link href="/">
              <a>
                <button className="bg-black text-white rounded-sm py-2 px-3 md:py-3 md:px-5 text-xs md:text-lg mt-3 md:mt-5 hover:bg-gray-300 hover:text-black transition-all duration-500">
                  registrasi gratis
                </button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* footer */}
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
                ></Image>
              </a>
            </Link>
          </div>
        </div>
        <p className="text-center text-white text-sm mt-16 pb-5 tracking-wider">
          copyright Ainfluencer 2022
        </p>
      </footer>
    </div>
  );
}
