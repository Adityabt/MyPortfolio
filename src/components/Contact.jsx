import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccessMsg("✅ Message sent successfully!");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setSuccessMsg("❌ Failed to send message. Try again later.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="border-b border-neutral-900 pb-24 text-white">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false, amount: 0.4 }}
        className="pt-5 my-16 text-center text-5xl font-bold tracking-tight text-purple-400"
      >
        Let&apos;s <span className="text-white">Connect</span>
      </motion.h2>

      {/* Form */}
      <div className="flex justify-center">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="w-full max-w-2xl space-y-8 p-6 rounded-xl border border-neutral-800 bg-neutral-950 shadow-lg"
        >
          <motion.div custom={1} variants={fadeInUp}>
            <label className="block text-sm font-semibold mb-2 text-purple-300">
              Your Name
            </label>
            <input
              type="text"
              name="from_name"
              placeholder="Aditya Thakur"
              required
              className="w-full rounded-md bg-neutral-900 p-4 text-sm font-medium text-purple-100 placeholder-purple-500 border border-purple-600/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </motion.div>

          <motion.div custom={2} variants={fadeInUp}>
            <label className="block text-sm font-semibold mb-2 text-purple-300">
              Your Email
            </label>
            <input
              type="email"
              name="reply_to"
              placeholder="example@gmail.com"
              required
              className="w-full rounded-md bg-neutral-900 p-4 text-sm font-medium text-purple-100 placeholder-purple-500 border border-purple-600/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </motion.div>
          <motion.div custom={5} variants={fadeInUp}>
            <label className="block text-sm font-semibold mb-2 text-purple-300">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Let’s talk about something amazing..."
              rows="5"
              required
              className="w-full rounded-md bg-neutral-900 p-4 text-sm font-medium text-purple-100 placeholder-purple-500 border border-purple-600/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </motion.div>

          <motion.div custom={6} variants={fadeInUp}>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-md shadow-md transition-all duration-200"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.div>

          {successMsg && (
            <div className="text-center text-sm font-semibold text-green-400 pt-2">
              {successMsg}
            </div>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
