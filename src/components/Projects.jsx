import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

/* Section heading animation */
const headingVariants = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

/* Individual card fade / slide-up */
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15 }
  })
};

const Projects = () => {
  return (
    <section className="pt-20 pb-24 border-b border-neutral-900 px-4 sm:px-8">
      {/* ── Heading ───────────────────────────────────────────── */}
      <motion.h3
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }} 
        className="mb-20 text-center text-5xl font-bold tracking-tight text-white"
      >
        Projects
      </motion.h3>

      {/* ── Card grid ─────────────────────────────────────────── */}
      <div className="grid gap-12 md:grid-cols-2">
        {PROJECTS.map((project, idx) => (
          <motion.article
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            key={idx}
            className="flex flex-col overflow-hidden rounded-2xl border border-neutral-800/70 bg-neutral-900/60 shadow-xl backdrop-blur-lg"
          >
            {/* Screenshot / hero image */}
            <img
              src={project.image}
              alt={project.title}
              className="h-56 w-full object-cover object-top md:h-64"
            />

            {/* Card body */}
            <div className="flex grow flex-col justify-between p-8">
              {/* Title + description */}
              <div>
                <h4 className="text-2xl font-semibold text-white">
                  {project.title}
                </h4>
                <p className="mt-3 text-neutral-400">
                  {project.description}
                </p>
              </div>

              {/* Tech stack badges */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded border border-purple-500/40 bg-gray-900 px-2 py-0.5 text-xs font-medium text-purple-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="mt-8 flex gap-4">
                {project.codeLink && (
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-purple-700/60 px-5 py-2 text-sm font-medium text-white transition hover:bg-purple-800/60"
                  >
                    <FaGithub className="text-lg" /> GitHub
                  </a>
                )}

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-purple-700/60 px-5 py-2 text-sm font-medium text-white transition hover:bg-purple-800/60"
                  >
                    <FaExternalLinkAlt className="text-sm" /> Preview
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

