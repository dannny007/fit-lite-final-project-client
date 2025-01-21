import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-customNavbar text-white py-20">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-customPurple tracking-wider uppercase">
            Connect With Us
          </span>
          <h2 className="text-3xl font-bold text-white mt-2 mb-4">
            Let's Stay In Touch
          </h2>
          <div className="w-24 h-1 bg-customPurple mx-auto rounded-full mb-8"></div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-6 text-customPurple">
              Company
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-customPurple transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-customPurple transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-customPurple transition-colors duration-300"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-6 text-customPurple">
              Customer Service
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/contact"
                  className="text-white hover:text-customPurple transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-customPurple transition-colors duration-300"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-customPurple transition-colors duration-300"
                >
                  Order Status
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold mb-6 text-customPurple">
              Follow Us
            </h2>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="#"
                className="transform transition-all duration-300 hover:scale-125"
              >
                <LinkedInIcon
                  sx={{
                    fontSize: 28,
                    color: "#ffffff",
                    "&:hover": { color: "#B433FF" },
                  }}
                />
              </a>
              <a
                href="#"
                className="transform transition-all duration-300 hover:scale-125"
              >
                <FacebookIcon
                  sx={{
                    fontSize: 28,
                    color: "#ffffff",
                    "&:hover": { color: "#B433FF" },
                  }}
                />
              </a>
              <a
                href="#"
                className="transform transition-all duration-300 hover:scale-125"
              >
                <InstagramIcon
                  sx={{
                    fontSize: 28,
                    color: "#ffffff",
                    "&:hover": { color: "#B433FF" },
                  }}
                />
              </a>
              <a
                href="#"
                className="transform transition-all duration-300 hover:scale-125"
              >
                <XIcon
                  sx={{
                    fontSize: 28,
                    color: "#ffffff",
                    "&:hover": { color: "#B433FF" },
                  }}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright and Date */}
        <div className="text-center mt-16 pt-8 border-t border-customPurple">
          <p className="text-white mb-2">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
