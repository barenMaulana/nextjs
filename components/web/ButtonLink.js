import Link from "next/link";

export default function ButtonLink({ children, link, className }) {
  return (
    <>
      <Link href={link}>
        <a>
          <button
            className={`bg-black text-white hover:bg-gray-300 hover:text-black transition-all duration-500 ${className}`}
          >
            {children}
          </button>
        </a>
      </Link>
    </>
  );
}
