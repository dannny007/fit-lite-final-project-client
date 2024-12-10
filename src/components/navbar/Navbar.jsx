import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // Navigation Function
  const handleNavigation = (path) => {
    if (path === "Home") {
      navigate("/");
    } else {
      navigate(`/${path.toLowerCase()}`);
    }
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="w-full bg-customNavbar">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side - Logo and Navigation Links */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <div
            onClick={() => handleNavigation("Home")}
            className="text-white font-bold cursor-pointer"
          >
            LOGO
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex space-x-6">
            {["Home", "Products", "About", "Contact", "Updates"].map((item) => (
              <div
                key={item}
                onClick={() => handleNavigation(item)}
                className="text-white font-inter font-bold text-[15px] hover:text-gray-300 transition-colors cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Buttons - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => handleNavigation("signup")}
            className="bg-customPurple text-white font-inter font-bold text-[15px] px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
          >
            SIGN UP
          </button>
          <button
            onClick={() => handleNavigation("login")}
            className="bg-customPurple text-white font-inter font-bold text-[15px] px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
          >
            LOGIN
          </button>
        </div>

        {/* Hamburger Menu Icon - Visible on mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Home", "Products", "About", "Contact", "Updates"].map((item) => (
              <div
                key={item}
                onClick={() => handleNavigation(item)}
                className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
              >
                {item}
              </div>
            ))}
            <button
              onClick={() => handleNavigation("signup")}
              className="w-full bg-customPurple text-white font-inter font-bold text-[15px] px-4 py-2 rounded-full hover:bg-purple-700 transition-colors mt-2"
            >
              SIGN UP
            </button>
            <button
              onClick={() => handleNavigation("login")}
              className="w-full bg-customPurple text-white font-inter font-bold text-[15px] px-4 py-2 rounded-full hover:bg-purple-700 transition-colors mt-2"
            >
              LOGIN
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
