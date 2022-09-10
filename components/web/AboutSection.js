import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <>
      <section className="container mx-auto flex flex-col md:flex-row font-sans-serif-pro px-5 md:px-28 mt-5 md:mt-36">
        <div className="w-full md:w-1/2 h-80 md:h-80 relative">
          <Image
            src="/hero-2.png"
            alt="Ainfluencer"
            layout="fill"
            objectFit="contain"
            loading="lazy"
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
    </>
  );
}
