import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 w-full z-50 bg-black bg-opacity-90">
      {/* Kaleidoscope Pattern Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-red-800 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-75"></div>
        </div>
      </div>

      <nav className="relative z-10 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* TEDx Logo */}
            <div className="flex-shrink-0">
              <Link
                to="/"
                className="text-2xl font-bold text-red-600 hover:text-red-600"
              >
                TEDx<span className="text-white">IIIT Sri City</span><span className="hover:animate-none animate-pulse-red"> Live</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-red-600 transition-colors"
              >
                <div className="space-y-2">
                  <div
                    className={`w-8 h-0.5 bg-current transform transition-all duration-300 ${
                      isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                    }`}
                  ></div>
                  <div
                    className={`w-8 h-0.5 bg-current transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  ></div>
                  <div
                    className={`w-8 h-0.5 bg-current transform transition-all duration-300 ${
                      isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                    }`}
                  ></div>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {[
                // "HOME",
                "SPEAKERS",
                // "SPONSORS",
                "TEAM",
                "ABOUT",
                "POLICIES",
              ].map((item) => (
                <Link
                  key={item}
                  to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                  className="relative text-white hover:text-red-600 transition-colors duration-300 text-sm tracking-widest"
                >
                  <span className="relative inline-block py-2">
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              ))}
              {/* <Link
                to="/form"
                className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full hover:from-red-700 hover:to-red-900 transition-all duration-300 transform hover:scale-105 animate-pulse hover:animate-none text-sm tracking-widest shadow-lg hover:shadow-red-600/50"
              >
                JOIN WAITLIST
              </Link> */}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden mt-4`}>
            <div className="flex flex-col space-y-4 py-4">
              {[
                // "HOME",
                "SPEAKERS",
                // "SPONSORS",
                "TEAM",
                "ABOUT",
                "POLICIES",
              ].map((item) => (
                <Link
                  key={item}
                  to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                  className="text-white hover:text-red-600 transition-colors duration-300 text-sm tracking-widest"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              ))}
              {/* <Link
                to="/form"
                className="px-6 py-2 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full hover:from-red-700 hover:to-red-900 transition-all duration-300 text-center text-sm tracking-widest shadow-lg hover:shadow-red-600/50"
                onClick={toggleMenu}
              >
                JOIN WAITLIST
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
