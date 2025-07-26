import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="fixed left-1/2 -translate-x-1/2 w-full z-30 bg-zinc-900/5 backdrop-blur-md border-b border-border/40">
      <div className="w-full">
        <nav className=" relative flex md:grid md:grid-cols-3 items-center py-4 px-4 xl:px-0 max-w-5xl mx-auto">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl justify-self-start"
          >
            <img src="/bitelements.png" alt="logo-bitelements" className="w-[150px]" />
          </Link>
          <ul className="ml-6 md:ml-0 flex space-x-2 md:space-x-6 justify-center justify-self-center text-base">
            <li>
              <Link
                href="/"
                className="inline-block transition-all duration-300 hover:-translate-y-0.5 hover:text-zinc-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="hidden md:inline-block transition-all duration-300 hover:-translate-y-0.5 hover:text-zinc-400"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/docs"
                className="inline-block transition-all duration-300 hover:-translate-y-0.5 hover:text-zinc-400"
              >
                Docs
              </Link>
            </li>
          </ul>
          <Link
            href="https://github.com/"
            target="_blank"
            className="absolute right-4 xl:right-0 rounded-full px-2 py-2 md:px-4 md:py-2 button-color text-xs md:text-sm text-white flex items-center gap-2 cursor-pointer hover:scale-95 transition-all duration-500 font-light"
          >
            Drop a star on GitHub
            <FaGithub className="size-6" />
          </Link>
        </nav>
      </div>
    </header>
  );
}
