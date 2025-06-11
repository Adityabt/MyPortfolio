import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/ProfilePic2.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap lg:flex-nowrap items-start">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <motion.div
            className="flex flex-col items-center lg:items-start mt-10 lg:mt-16"
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={container(0)}
              className="mt-6 ml-3 pb-10 text-8xl font-thin tracking-tight lg:text-8xl"
            >
              Aditya Thakur
            </motion.h1>

            <motion.span
              variants={container(0.3)}
              className="ml-3 bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent flex items-center"
            >
              Full Stack Developer (Beginner)
            </motion.span>

            <motion.p
              variants={container(0.6)}
              className="ml-3 my-2 max-w-2xl py-6 font-light text-justify text-justify text-base leading-relaxed max-w-2xl font-light text-purple-100"
            >
              {HERO_CONTENT}
            </motion.p>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center lg:justify-end mt-15 lg:mt-25">
          <motion.img 
            initial={{x: 100, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{ duration: 1, delay: 0.9}}
            src={profilePic}
            alt="Aditya Thakur"
            className="mt-7 w-80 h-90 object-cover rounded-2xl shadow-lg"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
