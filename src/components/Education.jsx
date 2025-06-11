import { EDUCATION } from "../constants";
import { motion } from "framer-motion";

const container = (delay = 0) => ({
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  },
});

const itemLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.7 },
  },
});

const itemRight = (delay = 0) => ({
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.7 },
  },
});

const Education = () => {
  return (
    <section className="border-b border-neutral-900 pt-20 pb-24 px-6 sm:px-12 lg:px-24 text-white font-poppins">
      <motion.h3
        variants={container()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="my-16 text-center text-5xl font-bold tracking-tight text-white"
      >
        Education
      </motion.h3>

      <div className="max-w-5xl mx-auto space-y-14">
        {EDUCATION.map((edu, idx) => (
          <div
            key={idx}
            className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12"
          >
            {/* Year */}
            <motion.div
              variants={itemLeft(idx * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="min-w-[80px] text-purple-400 text-base sm:text-lg font-medium lg:pt-1"
            >
              {edu.year}
            </motion.div>

            {/* Content */}
            <motion.div
              variants={itemRight(idx * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 shadow-lg"
            >
              <h4 className="text-lg sm:text-xl font-semibold">
                {edu.role}
                <span className="text-sm sm:text-base text-purple-400">
                  {" "}
                  – {edu.company}
                </span>
              </h4>
              <p className="mt-2 text-justify text-sm sm:text-base text-neutral-300 leading-relaxed">
                {edu.description}
              </p>
              {edu.technologies?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {edu.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded border border-purple-500/40 bg-neutral-900 px-2 py-1 text-xs sm:text-sm font-medium text-purple-400 shadow-inner"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
