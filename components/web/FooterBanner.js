import Link from "next/link";

export default function FooterBanner() {
  return (
    <>
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
    </>
  );
}
