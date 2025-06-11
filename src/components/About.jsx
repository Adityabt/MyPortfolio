import aboutImg from "../assets/About.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pt-20 pb-20 text-white">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="my-16 text-center text-5xl font-bold tracking-tight text-white"
      >
        About <span className="text-purple-400">Me</span>
      </motion.h2>

      {/* Content Flex Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20 px-6 lg:px-20">
        
        {/* Image Animation */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="w-96 h-96"
        >
          <img
            src={aboutImg}
            alt="About"
            className="rounded-2xl shadow-lg object-cover w-full h-full"
          />
        </motion.div>

        {/* Text Animation */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <p className="text-justify text-base leading-relaxed max-w-2xl font-light text-purple-100">
            {ABOUT_TEXT}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
