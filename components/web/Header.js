import Image from "next/image";
import ButtonLink from "./ButtonLink";

export default function Header({ headerTitle }) {
  return (
    <>
      <section className="container mx-auto flex flex-col-reverse md:flex-row font-sans-serif-pro md:mt-16 px-5 md:px-28 ">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-6xl tracking-wider font-semibold leading-snug">
            {headerTitle}
          </h1>
          <ButtonLink
            link="/"
            className="py-2 px-3 md:py-3 md:px-5 text-xs md:text-lg mt-3 md:mt-5 rounded-sm"
          >
            registrasi gratis
          </ButtonLink>
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
    </>
  );
}
