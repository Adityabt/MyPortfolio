import { RiReactjsLine } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiHtml5 } from "react-icons/di"; 
import { FaNodeJs } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10, opacity: 0.85 },
  animate: {
    y: [10, -10],
    opacity: [1, 0.85],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pt-20 pb-32 text-white ">
      <motion.h3
        initial={{ opacity: 0, y: -120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="my-16 text-center text-5xl font-bold tracking-tight text-white"
      >
        Technologies
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, x: -150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="mx-auto flex lg:6xl flex-wrap justify-center gap-7 px-6"
        style={{ perspective: 800 }}
      >
        {[{
          icon: RiReactjsLine,
          color: "cyan-400",
          border: "border-cyan-400"
        }, {
          icon: TbBrandJavascript,
          color: "yellow-300",
          border: "border-yellow-400"
        }, {
          icon: SiMongodb,
          color: "green-500",
          border: "border-green-500"
        }, {
          icon: DiHtml5,
          color: "red-500",
          border: "border-red-500"
        }, {
          icon: FaNodeJs,
          color: "green-300",
          border: "border-green-300"
        }, {
          icon: BiLogoTailwindCss,
          color: "sky-400",
          border: "border-sky-400"
        }].map(({ icon: Icon, color, border }, idx) => (
          <motion.div
            key={idx}
            variants={iconVariants(3 + idx)}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.15, boxShadow: `0 0 15px 3px rgb(var(--tw-color-${color}))` }}
            className={`group rounded-2xl border-4 ${border} bg-neutral-900 p-6 shadow-lg transition-shadow duration-300 cursor-pointer`}
          >
            <Icon className={`text-6xl text-${color} group-hover:text-white transition-colors duration-300`} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
