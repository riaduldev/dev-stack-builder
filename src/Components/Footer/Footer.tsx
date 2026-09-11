
import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import navImg from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white text-gray-700">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={navImg}
              alt="Dev Stack"
              className="w-32"
            />

            <p className="mt-5 max-w-sm text-sm leading-6 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-[#D91B7E] hover:bg-[#D91B7E] hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-[#D91B7E] hover:bg-[#D91B7E] hover:text-white"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-gray-600 transition-all duration-300 hover:-translate-y-1 hover:border-[#D91B7E] hover:bg-[#D91B7E] hover:text-white"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h2 className="mb-5 text-sm font-bold tracking-wider text-gray-900">
              PRODUCT
            </h2>

            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-sm text-gray-500 transition-colors hover:text-[#D91B7E]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#technologies"
                  className="text-sm text-gray-500 transition-colors hover:text-[#D91B7E]"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-sm text-gray-500 transition-colors hover:text-[#D91B7E]"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="mb-5 text-sm font-bold tracking-wider text-gray-900">
              COMPANY
            </h2>

            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-sm text-gray-500 transition-colors hover:text-[#D91B7E]"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm text-gray-500 transition-colors hover:text-[#D91B7E]"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition-colors hover:text-[#D91B7E]"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="mb-5 text-sm font-bold tracking-wider text-gray-900">
              LEGAL
            </h2>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition-colors hover:text-[#D91B7E]"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 transition-colors hover:text-[#D91B7E]"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-200" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-sm text-gray-400 transition-colors hover:text-[#D91B7E]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-sm text-gray-400 transition-colors hover:text-[#D91B7E]"
            >
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
