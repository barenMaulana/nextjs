import Image from "next/image";
import Link from "next/link";

export default function TestimonialSection() {
  return (
    <>
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
              loading="lazy"
            ></Image>
          </div>
        </div>
      </section>
    </>
  );
}
