import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-blue-50 text-center p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-6xl font-bold text-blue-800 mb-4"
      >
        Welcome to SimpleCode
      </motion.h1>
      <p className="text-gray-700 mb-6 max-w-xl text-lg">
        We help small businesses and startups harness the power of AI and machine learning.
        From predictions and forecasting to clustering and insights, we make AI simple.
      </p>
      <a
        href="#services"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-lg hover:bg-blue-700 transition"
      >
        Explore Our Services
      </a>
    </section>
  );
}
