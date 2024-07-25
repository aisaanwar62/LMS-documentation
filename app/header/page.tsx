import { FaSearch, FaLifeRing } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className="bg-amber-500 fixed top-0 left-0 right-0 z-50 text-white 2xl:px-24 xl:px-24 lg:px-16 md:px-8">
      <nav className="container mx-auto p-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center text-sm md:text-base lg:text-base">
        {/* Left side */}
        <a
          href="#"
          className="flex items-center space-x-2 col-span-1 md:col-auto"
        >
          <div className="flex items-center space-x-4 py-2 2xl:pr-14 xl:pr-20 lg:pr-5 md:pr-5 border-r border-slate-300 font-bold text-customColor ">
            Pie-Technologies{" "}
            <span className="font-bold ml-1 ">Documentation</span>
          </div>
        </a>

        {/* Middle - Search bar */}
        <div className="relative  md:col-span-1  md:order-none sm:order-2">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 font-thin md:ml-5" />
          <input
            type="text"
            id="search"
            className="appearance-none w-full py-2 pl-10 pr-4 md:ml-5 outline-none rounded placeholder-gray-400 text-black "
            placeholder="Quick search for anything"
            autoComplete="off"
          />
        </div>

        {/* Right side */}
        <div className="flex justify-end space-x-4  md:col-auto  md:order-none sm:order-3 text-customColor">
          <a
            className="flex items-center space-x-2 py-2 font-semibold"
            href="#"
          >
            Demo
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="w-3 h-3 ml-2"
            />
          </a>
          <a
            className="flex items-center space-x-2 py-2 font-semibold"
            href="#"
          >
            Get Support
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="w-3 h-3 ml-2 "
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
