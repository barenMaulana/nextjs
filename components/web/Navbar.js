import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Navbar() {
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
    <>
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
                loading="lazy"
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
    </>
  );
}
