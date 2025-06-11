import logo from "../assets/adityaThakurLogo.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="w-full border-b border-neutral-800 py-4 px-4 sm:px-6 flex items-center justify-between bg-transparent text-white font-poppins sticky top-0 z-50 backdrop-blur-md"
    >
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="Aditya Thakur Logo"
          className="w-14 sm:w-16 h-auto"
        />
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-4 sm:gap-6 text-xl sm:text-2xl">
        <a
          href="https://www.linkedin.com/in/aditya-thakur-4086bb2a7/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Adityabt"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-yellow-400 transition-colors duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/adxtya.thakxr/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-400 transition-colors duration-200"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/AdityaT1105"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-red-800 transition-colors duration-200"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;

