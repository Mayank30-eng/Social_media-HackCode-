import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"; // Import the icons

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <a href="/" className="text-lg font-semibold text-white">
            HackCode👨‍💻
          </a>

          {/* Description */}
          <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">
          Innovation Starts Here – HackCode Team
          </p>

          

          {/* Social Icons */}
          <div className="flex mt-6 space-x-4">
            {/* GitHub */}
            <a
              href="https://github.com/rahulpatil298/Social_media-HackCode-"  // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            
            
            {/* YouTube */}
            <a
              href="https://youtu.be/qxsTL6r2EMk"  // Replace with your YouTube URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
              aria-label="YouTube"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        <hr className="my-10 border-gray-200 dark:border-gray-700" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          {/* Copyright Text */}
          <p className="text-sm text-gray-500">© HackCode 2025. All Rights Reserved.</p>

          {/* Footer Links */}
          <div className="flex mt-3 -mx-2 sm:mt-0">
            <a
              href="/team"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Teams"
            >
              Teams
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
