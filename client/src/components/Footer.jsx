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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
            {/* View Demo Button with Link */}
            <a
              href="/analyze" // Replace with your desired URL
              target="" // Opens link in a new tab
              rel="noopener noreferrer"
            >
              <motion.button
                className="flex items-center justify-center order-1 w-full px-6 py-3 mt-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg sm:mx-2 sm:w-auto hover:from-blue-600 hover:to-purple-600 hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                View Demo
              </motion.button>
            </a>

            {/* Get Started Button with Link */}
            <a
              href="/analyze" // Replace with your desired URL
              target="" // Opens link in a new tab
              rel="noopener noreferrer"
            >
              <motion.button
                className="w-full px-6 py-3 mt-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg sm:mx-2 sm:w-auto hover:from-blue-600 hover:to-purple-600 hover:shadow-xl transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex mt-6 space-x-4">
            {/* GitHub */}
            <a
              href="https://github.com/Dharamchandpatle"  // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/"  // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com/your-profile"  // Replace with your Twitter URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            {/* YouTube */}
            <a
              href="https://youtube.com/your-channel"  // Replace with your YouTube URL
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
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Teams"
            >
              Teams
            </a>
            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Privacy"
            >
              Privacy
            </a>
            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Cookies"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
