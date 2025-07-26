import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import SearchComponent from "@/components/ui/SearchComponent";

export default function DocsNavbar() {
  return (
    <nav className="fixed bg-black border-b border-border  text-white p-4 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl justify-self-start"
        >
          <FaGithub /> <span className="hidden md:flex">BitElements</span>
        </Link>
        <ul className="flex space-x-4 items-center md:pr-25">
          <li className="hover:bg-zinc-800/80 px-4 py-2 rounded-md text-sm">
            <a href="/">Home </a>
          </li>
          <li>
            <SearchComponent />
          </li>
        </ul>
      </div>
    </nav>
  );
}
