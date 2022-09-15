import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/web/Footer";
import Navbar from "../components/web/Navbar";
import TopAlert from "../components/web/TopAlert";

export default function about() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopAlert />
      <Navbar />

      <section className="container mx-auto mt-10 md:mt-20 font-sans-serif-pro px-5 md:px-28">
        <h1 className="text-2xl md:text-5xl text-center tracking-wider">
          About Ainfluencer
        </h1>
        <div className="flex justify-center mt-5 md:mt-10">
          <Link href="#history">
            <a className="px-3 hover:text-gray-500 hover:text-3xl transition-all duration-500 hover:underline">
              History
            </a>
          </Link>
          <Link href="#team">
            <a className="px-3 hover:text-gray-500 hover:text-3xl transition-all duration-500 hover:underline">
              Team
            </a>
          </Link>
          <Link href="#philosophy">
            <a className="px-3 hover:text-gray-500 hover:text-3xl transition-all duration-500 hover:underline">
              Philosophy
            </a>
          </Link>
          <Link href="#history">
            <a className="px-3 hover:text-gray-500 hover:text-3xl transition-all duration-500 hover:underline">
              History
            </a>
          </Link>
        </div>
        <div className="flex justify-between mt-5 md:mt-10">
          <div className="w-52 h-20 md:h-52 relative">
            <Image
              src="/photo-1.png"
              alt="Ainfluencer"
              layout="fill"
              objectFit="contain"
            ></Image>
          </div>
          <div className="w-52 h-20 md:h-52 relative">
            <Image
              src="/photo-2.png"
              alt="Ainfluencer"
              layout="fill"
              objectFit="contain"
            ></Image>
          </div>
          <div className="w-52 h-20 md:h-52 relative">
            <Image
              src="/photo-3.png"
              alt="Ainfluencer"
              layout="fill"
              objectFit="contain"
            ></Image>
          </div>
          <div className="w-52 h-20 md:h-52 relative">
            <Image
              src="/photo-4.png"
              alt="Ainfluencer"
              layout="fill"
              objectFit="contain"
            ></Image>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-20 font-sans-serif-pro px-5 md:px-28">
        <h2 className="text-center text-4xl">History</h2>
        <div className="flex mt-5 bg-red">
          <div className="text-right mr-2">
            <p className="text-gray-600 text-sm md:text-lg font-semibold">
              Bagaimana Ainfluencer Membantu?
            </p>
            <h2 className="text-xl md:text-3xl font-semibold mt-3">
              Hemat Waktu Manage Ratusan Influencer
            </h2>
            <p className="mt-3  text-gray-800 tracking-wide leading-6">
              Berapapun influencer yang kamu butuhkan, LEMON Platform siap
              membantu sehingga Anda hemat waktu dalam mencari dan menganalisis
              influencer mana yang tepat.
            </p>
            <p className="mt-3  text-gray-800 tracking-wide leading-6">
              Bangun hubungan yang lebih dekat lebih dari sekadar influencer
              dengan client dan hasikan content yang original untuk memenangkan
              hati audiens.
            </p>
          </div>
          <div className="ml-2">
            <p className="text-gray-600 text-sm md:text-lg font-semibold">
              Bagaimana Ainfluencer Membantu?
            </p>
            <h2 className="text-xl md:text-3xl font-semibold mt-3">
              Hemat Waktu Manage Ratusan Influencer
            </h2>
            <p className="mt-3  text-gray-800 tracking-wide leading-6">
              Berapapun influencer yang kamu butuhkan, LEMON Platform siap
              membantu sehingga Anda hemat waktu dalam mencari dan menganalisis
              influencer mana yang tepat.
            </p>
            <p className="mt-3  text-gray-800 tracking-wide leading-6">
              Bangun hubungan yang lebih dekat lebih dari sekadar influencer
              dengan client dan hasikan content yang original untuk memenangkan
              hati audiens.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto mt-20 font-sans-serif-pro px-5 md:px-28">
        <h2 className="text-center text-4xl">Team</h2>
        <div className="flex flex-wrap justify-between mt-5">
          <div className="text-center mt-5 md:mt-0">
            <div className="w-24 h-24 relative mx-auto">
              <Image
                src="/avatars/udin.png"
                alt="Ainfluencer"
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
            <p>Frontend Lead</p>
            <p>Udin</p>
          </div>
          <div className="text-center mt-5 md:mt-0">
            <div className="w-24 h-24 relative mx-auto">
              <Image
                src="/avatars/ucup.png"
                alt="Ainfluencer"
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
            <p>UI Designer</p>
            <p>Ucup</p>
          </div>
          <div className="text-center mt-5 md:mt-0">
            <div className="w-24 h-24 relative mx-auto">
              <Image
                src="/avatars/tutuy.png"
                alt="Ainfluencer"
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
            <p>Backend Lead</p>
            <p>Tutuy</p>
          </div>
          <div className="text-center mt-5 md:mt-0">
            <div className="w-24 h-24 relative mx-auto">
              <Image
                src="/avatars/jupri.png"
                alt="Ainfluencer"
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
            <p>SEO Lead</p>
            <p>Jupri</p>
          </div>
          <div className="text-center mt-5 md:mt-0">
            <div className="w-24 h-24 relative mx-auto">
              <Image
                src="/avatars/tatang.png"
                alt="Ainfluencer"
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
            <p>DevOps Lead</p>
            <p>Tatang</p>
          </div>
          <div className="text-center mt-5 md:mt-0">
            <div className="w-24 h-24 relative mx-auto">
              <Image
                src="/avatars/endang.png"
                alt="Ainfluencer"
                layout="fill"
                objectFit="contain"
              ></Image>
            </div>
            <p>Marketing Lead</p>
            <p>Endang</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
