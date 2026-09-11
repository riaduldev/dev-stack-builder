
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import navImg from "../../assets/logo-text.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto my-4 px-4 md:my-5">
      {/* Main Navbar */}
      <div className="flex h-14 items-center justify-between">

        {/* Left - Hamburger on Mobile / Logo on Desktop */}
        <div className="flex items-center">
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Logo - Desktop & Tablet */}
          <div className="hidden md:block">
            <img
              src={navImg}
              alt="Logo"
              className="w-32 lg:w-36"
            />
          </div>
        </div>

        {/* Logo - Mobile Center */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden">
          <img
            src={navImg}
            alt="Logo"
            className="w-28 sm:w-32"
          />
        </div>

        {/* Middle - Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 lg:gap-7">
            <li>
              <a
                href="#home"
                className="transition-colors duration-200 hover:text-[#D91B7E]"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                className="transition-colors duration-200 hover:text-[#D91B7E]"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#projects"
                className="transition-colors duration-200 hover:text-[#D91B7E]"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#about"
                className="transition-colors duration-200 hover:text-[#D91B7E]"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="transition-colors duration-200 hover:text-[#D91B7E]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right - Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="cursor-pointer text-sm sm:text-base">
            Sign In
          </button>

          <button className="btn rounded-2xl bg-[#D91B7E] px-3 text-sm text-white sm:px-4 sm:text-base">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-3 border-t border-gray-200 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="block transition-colors hover:text-[#D91B7E]"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                onClick={() => setMenuOpen(false)}
                className="block transition-colors hover:text-[#D91B7E]"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="block transition-colors hover:text-[#D91B7E]"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="block transition-colors hover:text-[#D91B7E]"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block transition-colors hover:text-[#D91B7E]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
