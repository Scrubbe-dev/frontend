"use client";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiBell } from "react-icons/fi";

const NavbarDataS = () => {
  return (
    <>
      {/* Navbar Container */}
      <section className="w-full h-auto bg-white flex justify-center sticky top-0 z-50">
        <nav className="flex text-gray-800 h-16 w-screen max-w-[1440px] justify-between items-center px-10 xl:px-20 sticky top-0 z-50 bg-white shadow-sm">
          {/* Logo */}
          <Link href="/" className="relative w-[211px] h-[60px]">
            <Image
              src="/scrubbe-logo-01.png"
              alt="scrubbe-logo-01.png"
              fill
              sizes="(min-width: 1024px) 100vw"
              className="object-contain"
            />
          </Link>

          {/* Search Bar */}
          <div className="flex items-center justify-center flex-1 ml-8 max-w-md">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for anything here..."
                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors">
                <FiSearch size={20} />
              </button>
            </div>
          </div>

          {/* Desktop Right Menu - Bell, Name, and Profile Picture */}
          <aside className="flex items-center gap-4">
            {/* Bell Icon */}
            <button className="p-2 rounded-full hover:bg-gray-100 cursor-pointer relative">
              <FiBell size={20} className="text-gray-600" />
              {/* Optional notification dot */}
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Name and Profile Picture */}
            <div className="flex items-center gap-3">
              <span className="text-gray-700 font-medium whitespace-nowrap">
                Alex Martins
              </span>
              <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-300 transition-all">
                <Image
                  src="/avatar-blank.jpg"
                  alt="Alex Martins Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </aside>
        </nav>
      </section>
    </>
  );
};

export default NavbarDataS;
