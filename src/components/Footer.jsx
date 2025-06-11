import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="border-t border-purple-800 font-poppins"
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Name + Icon */}
        <motion.div
          variants={childVariants}
          className="flex items-center gap-2 mb-3 md:mb-0"
        >
          <span className="text-purple-500 text-lg">◆</span>
          <span className="text-sm md:text-base font-medium tracking-widest text-purple-400">
            Aditya Thakur
          </span>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={childVariants}
          className="text-xs md:text-sm text-gray-400 tracking-wide"
        >
          © {new Date().getFullYear()} All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
