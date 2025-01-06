import { useNavigate } from "react-router-dom";
import { FaHome, FaChartBar, FaClipboardList, FaCogs, FaUsers, FaGithub } from 'react-icons/fa';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full bg-transparent py-6"
      style={{
        background: "transparent", // Transparent background for the header
      }}
    >
      <div className="container mx-auto flex justify-between items-center px-12">
        {/* Logo or Brand */}
        <div className="text-black font-extrabold text-xl sm:text-2xl">
          <a href ="/" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Hackode👨‍💻
          </a>
        </div>

        {/* Navbar */}
        <nav className="hidden sm:flex space-x-8 ">
          <button
            className="text-black hover:text-gray-700  relative group pb-3"
            onClick={() => navigate("/")}
          >
            <FaHome className="inline-block mr-2  " />
            Home
            <span className="absolute left-0 bottom-0 block w-full h-1 rounded-lg bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
          <button
            className="text-black hover:text-gray-700 relative group pb-3"
            onClick={() => navigate("/analyze")}
          >
            <FaChartBar className="inline-block mr-2" />
            Analysis & Social Media
            <span className="absolute left-0 bottom-0 block w-full h-1 rounded-lg bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
          <button
            className="text-black hover:text-gray-700 relative group pb-3"
            onClick={() => navigate("/overview")}
          >
            <FaClipboardList className="inline-block mr-2" />
            Overview
            <span className="absolute left-0 bottom-0 block w-full h-1 rounded-lg bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
          <button
            className="text-black hover:text-gray-700 relative group pb-3"
            onClick={() => navigate("/features")}
          >
            <FaCogs className="inline-block mr-2" />
            Features
            <span className="absolute left-0 bottom-0 block w-full h-1 rounded-lg bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
          <button
            className="text-black hover:text-gray-700 relative group pb-3"
            onClick={() => navigate("/team")}
          >
            <FaUsers className="inline-block mr-2" />
            Team
            <span className="absolute left-0 bottom-0 block w-full h-1 rounded-lg bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
          <button
            className="text-black hover:text-gray-700 relative group pb-3"
            onClick={() => window.open("https://github.com", "_blank")}
          >
            <FaGithub className="inline-block mr-2" />
            GitHub
            <span className="absolute left-0 bottom-0 block w-full h-1 rounded-lg bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <button className="text-black text-3xl focus:outline-none">
            &#9776;
          </button>
        </div>
      </div>
      
      {/* Medium Space Below Header */}
      {/* <div className="h-1"></div> Adjusted space below the header */}
    </div>
  );
};

export default Header;
