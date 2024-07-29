import { FaSearch, FaLifeRing } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gray-50 fixed top-0 left-0 right-0 z-50 border-b-2 border-amber-400 px-4 lg:px-16 xl:px-24">
      <nav className="container mx-auto p-1 flex items-center justify-between text-sm md:text-base lg:text-base 2xl:text-lg">
        {/* Left side */}

        <div className="flex items-center space-x-4 py-2">
          <Image
            src="/Logo-tag.png"
            alt="Logo not found"
            height={200}
            width={200}
          />
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-2 text-customColor">
          <span className="font-bold">Pie-Technologies</span>
          <span>Documentation</span>
        </div>
      </nav>
    </header>
  );
}
