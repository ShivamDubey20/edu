"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isIeltsDropdownOpen, setIsIeltsDropdownOpen] = useState(false);
  const [isSpokenDropdownOpen, setIsSpokenDropdownOpen] = useState(false);
  const [isForeignDropdownOpen, setIsForeignDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavLinkClass = (path: string) => {
    const isActive = pathname === path;
    return `group flex items-center justify-center h-full text-[14px] font-medium tracking-wide relative
            after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-full 
            after:h-[2px] after:bg-blue-600 after:transform after:scale-x-0 after:origin-left
            after:transition-transform after:duration-300 hover:after:scale-x-100
            hover:text-blue-600 transition-colors duration-300 
            ${isActive ? "text-blue-600 after:scale-x-100" : "text-blue-900"}`;
  };

  return (
    <>
      <div className="h-[70px]"></div>

      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
                ${isScrolled
            ? "bg-white shadow-lg py-2 border-b border-blue-100"
            : "bg-blue-50/95 backdrop-blur-sm py-3"}`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between h-[40px]">
            
            {/* Logo with proper positioning */}
            <div className="flex-shrink-0 ml-0 lg:-ml-12">
              <Link href="/" className="group">
                <Image
                  src="/Artboard 2.png"
                  alt="JG Language Academy Logo"
                  width={370}
                  height={50}
                  className="transform group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
          
            {/* Navigation Links with right padding */}
            <div className="flex items-center gap-5 h-full pr-2 sm:pr-6 lg:pr-8">
              <nav className="flex items-center gap-5 h-full">
                <Link href="/" className={getNavLinkClass("/")}>
                  <span className="transform hover:scale-105 transition-transform duration-200">HOME</span>
                </Link>

                {/* IELTS Dropdown */}
                <div
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => {
                    setIsIeltsDropdownOpen(true);
                    setIsSpokenDropdownOpen(false);
                  }}
                  onMouseLeave={() => setIsIeltsDropdownOpen(false)}
                >
                  <Link href="/ielts" className={`${getNavLinkClass("/ielts")} flex items-center`}>
                    <span className="transform group-hover:scale-105 transition-transform duration-200">STUDY ABROAD</span>
                    <ChevronDown className="ml-1 h-3 w-3 transform group-hover:rotate-180 transition-transform duration-300" />
                  </Link>
                  {isIeltsDropdownOpen && (
                    <div className="absolute left-0 top-[calc(100%+1px)] w-52 rounded-lg shadow-lg bg-white ring-1 ring-black/5 
                                    transform transition-all duration-200 ease-out origin-top">
                      <div className="py-1">
                        {[
                          { name: "PTE Core", path: "/ielts"  },
                          { name: "PTE Academic", path: "/pte_academy" },
                          { name: "IELTS Academic / General", path: "/ielts" , href: "/ielts" },
                          { name: "OET - Nurses / Doctors", path: "/ielts/oet" },
                          { name: "CELPIP", path: "/ielts/celpip" },
                          { name: "TOEFL", path: "/ielts/toefl" },
                        ].map(({ name, path }, index) => (
                          <Link
                            key={index}
                            href={path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600
                                      transition-all duration-200 hover:pl-5"
                          >
                            {name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Spoken English Dropdown */}
                <div
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => {
                    setIsSpokenDropdownOpen(true);
                    setIsIeltsDropdownOpen(false);
                  }}
                  onMouseLeave={() => setIsSpokenDropdownOpen(false)}
                >
                  <Link href="/spoken-english" className={`${getNavLinkClass("/spoken-english")} flex items-center`}>
                    <span className="transform group-hover:scale-105 transition-transform duration-200">SPOKEN ENGLISH</span>
                    <ChevronDown className="ml-1 h-3 w-3 transform group-hover:rotate-180 transition-transform duration-300" />
                  </Link>
                  {isSpokenDropdownOpen && (
                    <div className="absolute left-0 top-[calc(100%+1px)] w-44 rounded-lg shadow-lg bg-white ring-1 ring-black/5
                                    transform transition-all duration-200 ease-out origin-top">
                      <div className="py-1">
                        {["Kids", "Elders", "Communication Skills", "Corporate Training", "Personal Development"].map((name, index) => (
                          <Link
                            key={index}
                            href={`/spoken-english#${name.toLowerCase().replace(/ /g, "-")}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600
                                      transition-all duration-200 hover:pl-5"
                          >
                            {name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Foreign Language Dropdown - added NAATI Course */}
                <div
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => {
                    setIsForeignDropdownOpen(true);
                    setIsIeltsDropdownOpen(false);
                    setIsSpokenDropdownOpen(false);
                  }}
                  onMouseLeave={() => setIsForeignDropdownOpen(false)}
                >
                  <Link href="/foreign-language" className={`${getNavLinkClass("/foreign-language")} flex items-center`}>
                    <span className="transform group-hover:scale-105 transition-transform duration-200">FOREIGN LANGUAGE</span>
                    <ChevronDown className="ml-1 h-3 w-3 transform group-hover:rotate-180 transition-transform duration-300" />
                  </Link>
                  {isForeignDropdownOpen && (
                    <div className="absolute left-0 top-[calc(100%+1px)] w-60 rounded-lg shadow-lg bg-white ring-1 ring-black/5
                                    transform transition-all duration-200 ease-out origin-top">
                      <div className="py-1">
                        {["French", "German", "Spanish", "Italian", "NAATI Course", "Fit in", "TCF, TEF, DELF Exam Preparation", "DELE Exam Preparation"].map((name, index) => (
                          <Link
                            key={index}
                            href={`/foreign-language#${name.toLowerCase().replace(/ /g, "-")}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600
                                      transition-all duration-200 hover:pl-5"
                          >
                            {name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </nav>

              <Link
                href="/contact"
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium tracking-wide 
                            rounded-md hover:bg-blue-700 transition-all duration-300 
                            hover:shadow-lg active:transform active:scale-95
                            hover:ring-2 hover:ring-blue-400 hover:ring-offset-2"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;