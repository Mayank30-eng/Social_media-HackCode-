import { Link, useLocation, useNavigate } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="bg-gradient-to-r from-blue-800 via-purple-900 to-black flex items-center justify-between py-4 px-8 fixed w-full top-0 left-0 shadow-lg">
      <div>
        <h1
          onClick={() => navigate("/")}
          className="text-white text-2xl font-semibold cursor-pointer tracking-wide hover:text-purple-300 transition duration-300"
        >
          🚀 HACKCODE
        </h1>
      </div>

      <div className="flex items-center space-x-4">
        <Link
          target="_blank"
          to={"https://github.com/ronak-paffl1/PostPulse"}
          className="px-4 py-1.5 rounded-full bg-gradient-to-r from-gray-800 to-black text-white hover:from-purple-700 hover:to-black hover:shadow-lg transition duration-300 border border-gray-700 flex items-center space-x-2"
        >
          <p className="font-medium text-sm">View GitHub</p>
          <GitHubIcon style={{ fontSize: "18px" }} />
        </Link>

        {location.pathname === "/" && (
          <button
            className="px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-400 to-green-500 text-white text-sm font-medium hover:from-teal-500 hover:to-green-600 focus:ring-2 focus:ring-teal-500 hover:shadow-md transition duration-300"
            onClick={() => navigate("/analyze")}
          >
            Get Started
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
